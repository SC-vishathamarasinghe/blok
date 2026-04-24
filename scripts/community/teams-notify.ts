/**
 * Teams Incoming Webhook — Adaptive Card payload (Power Automate / Workflows).
 * Includes discussion template content (markdown sections) when available.
 */
import { Buffer } from "node:buffer";

const TEAMS_PAYLOAD_MAX_BYTES = 256 * 1024;
const ADAPTIVE_VERSION = "1.5";
const ADAPTIVE_SCHEMA = "http://adaptivecards.io/schemas/adaptive-card.json";
const DISCUSSION_BODY_MAX = 24000;
const SECTION_BODY_MAX = 4000;
const MAX_SECTIONS = 14;

function escapeText(s: string | undefined): string {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function truncate(s: string, max: number): string {
  const t = String(s || "");
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

/**
 * Split GitHub discussion body on markdown headings (template fields become ### headings).
 */
function splitDiscussionBodyMarkdown(md: string): Array<{
  heading: string;
  text: string;
}> {
  const t = md.trim();
  if (!t) return [];
  const parts = t.split(/\n(?=#{1,6}\s)/);
  const out: { heading: string; text: string }[] = [];
  for (const part of parts) {
    const m = part.match(/^#{1,6}\s+([^\n]+)\n?([\s\S]*)$/);
    if (m) {
      const body = (m[2] || "").trim();
      out.push({
        heading: m[1].trim(),
        text: body || "_(empty)_",
      });
    } else if (part.trim()) {
      out.push({ heading: "Details", text: part.trim() });
    }
  }
  return out.length
    ? out
    : [
        {
          heading: "Discussion content",
          text: truncate(t, DISCUSSION_BODY_MAX),
        },
      ];
}

/** Office 365 Connector / Power Automate webhook envelope for Adaptive Cards. */
export interface TeamsAdaptiveMessage {
  type: "message";
  attachments: Array<{
    contentType: "application/vnd.microsoft.card.adaptive";
    content: Record<string, unknown>;
  }>;
}

function assertPayloadSize(payload: TeamsAdaptiveMessage): void {
  const raw = JSON.stringify(payload);
  const bytes = Buffer.byteLength(raw, "utf8");
  if (bytes > TEAMS_PAYLOAD_MAX_BYTES) {
    throw new Error(
      `Teams webhook payload is ${bytes} bytes (max ${TEAMS_PAYLOAD_MAX_BYTES}).`,
    );
  }
}

async function postAdaptiveTeamsWebhook(
  webhookUrl: string,
  payload: TeamsAdaptiveMessage,
): Promise<void> {
  assertPayloadSize(payload);
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Teams webhook ${res.status}: ${t.slice(0, 300)}`);
  }
}

function adaptiveCardShell(
  title: string,
  titleColor: "Default" | "Good" | "Warning" | "Attention",
  body: Record<string, unknown>[],
  actions: Record<string, unknown>[],
): TeamsAdaptiveMessage {
  const content: Record<string, unknown> = {
    $schema: ADAPTIVE_SCHEMA,
    type: "AdaptiveCard",
    version: ADAPTIVE_VERSION,
    body: [
      {
        type: "TextBlock",
        text: title,
        weight: "Bolder",
        size: "Large",
        color: titleColor,
      },
      ...body,
    ],
  };
  if (actions.length) {
    content.actions = actions;
  }
  return {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content,
      },
    ],
  };
}

function markdownSectionBlocks(
  sectionHeading: string,
  rawBody: string,
): Record<string, unknown>[] {
  const trimmed = truncate(rawBody.trim(), DISCUSSION_BODY_MAX);
  const blocks: Record<string, unknown>[] = [];
  if (sectionHeading.trim()) {
    blocks.push({
      type: "TextBlock",
      text: sectionHeading.trim(),
      weight: "Bolder",
      size: "Medium",
      spacing: "Medium",
    });
  }
  if (!trimmed) {
    blocks.push({
      type: "TextBlock",
      text: "_No description was provided on this discussion._",
      wrap: true,
      isSubtle: true,
    });
    return blocks;
  }
  const sections = splitDiscussionBodyMarkdown(trimmed);
  const shown = sections.slice(0, MAX_SECTIONS);
  for (const sec of shown) {
    blocks.push({
      type: "Container",
      separator: true,
      items: [
        {
          type: "TextBlock",
          text: escapeText(sec.heading),
          weight: "Bolder",
          wrap: true,
        },
        {
          type: "TextBlock",
          text: escapeText(truncate(sec.text, SECTION_BODY_MAX)),
          wrap: true,
          spacing: "Small",
        },
      ],
    });
  }
  if (sections.length > MAX_SECTIONS) {
    blocks.push({
      type: "TextBlock",
      text: escapeText(
        `… ${sections.length - MAX_SECTIONS} more section(s) omitted (see discussion on GitHub).`,
      ),
      isSubtle: true,
      wrap: true,
    });
  }
  return blocks;
}

export interface TeamsDiscussionCreatedArgs {
  webhookUrl: string;
  title: string;
  url: string;
  category: string;
  author: string;
  /** e.g. owner/repo */
  repository?: string;
  discussionNumber?: number;
  /** Raw markdown from the discussion (form template answers). */
  body?: string;
}

export async function postTeamsDiscussionCreated({
  webhookUrl,
  title,
  url,
  category,
  author,
  repository,
  discussionNumber,
  body,
}: TeamsDiscussionCreatedArgs): Promise<void> {
  if (!webhookUrl) return;
  const facts: { title: string; value: string }[] = [];
  if (repository?.trim()) {
    facts.push({ title: "Repository", value: escapeText(repository.trim()) });
  }
  facts.push(
    { title: "Category", value: escapeText(category) },
    { title: "Author", value: escapeText(author) },
  );
  if (discussionNumber != null) {
    facts.push({ title: "Discussion", value: `#${discussionNumber}` });
  }

  const bodyBlocks: Record<string, unknown>[] = [
    {
      type: "TextBlock",
      text: escapeText(title),
      wrap: true,
      weight: "Bolder",
      size: "Medium",
    },
    { type: "FactSet", facts },
    ...markdownSectionBlocks("Discussion details", body || ""),
  ];

  const payload = adaptiveCardShell(
    "Blok — New discussion",
    "Default",
    bodyBlocks,
    [
      {
        type: "Action.OpenUrl",
        title: "Open discussion on GitHub",
        url,
      },
    ],
  );
  await postAdaptiveTeamsWebhook(webhookUrl, payload);
  console.log("Teams notification sent (discussion created)");
}

export interface TeamsDiscussionApprovedArgs {
  webhookUrl: string;
  title: string;
  discussionUrl: string;
  /** Set when a GitHub issue was created; use `0` when issues are disabled on the repo. */
  issueNumber: number;
  /** URL of the GitHub issue when created; otherwise the discussion URL. */
  issueUrl: string;
  /** When false, no mirror issue exists (e.g. HTTP 410 — Issues disabled). */
  githubIssueCreated?: boolean;
  repository?: string;
  discussionNumber?: number;
  /** Discussion title (may differ from issue title). */
  discussionTitle?: string;
  /** Excerpt of discussion body for context. */
  discussionBody?: string;
  issueTitle?: string;
  issueBody?: string;
}

export async function postTeamsDiscussionApproved({
  webhookUrl,
  title,
  discussionUrl,
  issueNumber,
  issueUrl,
  githubIssueCreated = true,
  repository,
  discussionNumber,
  discussionTitle,
  discussionBody,
  issueTitle,
  issueBody,
}: TeamsDiscussionApprovedArgs): Promise<void> {
  if (!webhookUrl) return;

  const facts: { title: string; value: string }[] = [];
  if (repository?.trim()) {
    facts.push({
      title: "Repository",
      value: escapeText(repository.trim()),
    });
  }
  if (discussionNumber != null) {
    facts.push({ title: "Discussion", value: `#${discussionNumber}` });
  }
  if (githubIssueCreated && issueNumber > 0) {
    facts.push({ title: "Tracked issue", value: `#${issueNumber}` });
  } else {
    facts.push({
      title: "GitHub issue",
      value: "Not created (Issues disabled for this repository)",
    });
  }

  const blocks: Record<string, unknown>[] = [
    {
      type: "TextBlock",
      text: escapeText(title),
      wrap: true,
      weight: "Bolder",
      size: "Medium",
    },
    { type: "FactSet", facts },
  ];

  if (githubIssueCreated) {
    blocks.push(
      {
        type: "TextBlock",
        text: "GitHub issue",
        weight: "Bolder",
        size: "Medium",
        spacing: "Medium",
      },
      {
        type: "TextBlock",
        text: escapeText(issueTitle || title),
        wrap: true,
        weight: "Bolder",
      },
      {
        type: "TextBlock",
        text: escapeText(truncate(issueBody || "", SECTION_BODY_MAX * 2)),
        wrap: true,
        spacing: "Small",
      },
    );
  } else {
    blocks.push({
      type: "TextBlock",
      text: "No mirror issue was created because **GitHub Issues** are turned off for this repository. Use the discussion thread and your backlog tool (e.g. Jira) for tracking.",
      wrap: true,
      spacing: "Medium",
    });
  }

  const discTitle = (discussionTitle || title).trim();
  const discMd = (discussionBody || "").trim();
  if (discTitle || discMd) {
    blocks.push({
      type: "TextBlock",
      text: "Original discussion",
      weight: "Bolder",
      size: "Medium",
      spacing: "Medium",
    });
    if (discTitle) {
      blocks.push({
        type: "TextBlock",
        text: escapeText(discTitle),
        wrap: true,
        weight: "Bolder",
      });
    }
    blocks.push(...markdownSectionBlocks("", discMd));
  }

  blocks.push({
    type: "TextBlock",
    text: githubIssueCreated
      ? "Use the buttons below to open the discussion or the new GitHub issue."
      : "Use the button below to open the discussion on GitHub.",
    wrap: true,
    isSubtle: true,
    size: "Small",
    spacing: "Medium",
  });

  const actions: Record<string, unknown>[] = [
    {
      type: "Action.OpenUrl",
      title: "Open discussion",
      url: discussionUrl,
    },
  ];
  if (githubIssueCreated && issueUrl && issueUrl !== discussionUrl) {
    actions.push({
      type: "Action.OpenUrl",
      title: "Open issue",
      url: issueUrl,
    });
  }

  const payload = adaptiveCardShell(
    "Blok — Discussion approved",
    "Good",
    blocks,
    actions,
  );
  await postAdaptiveTeamsWebhook(webhookUrl, payload);
  console.log("Teams notification sent (approved)");
}
