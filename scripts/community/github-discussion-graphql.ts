/**
 * GitHub GraphQL helpers for Discussions — more reliable than REST for some repos/tokens.
 * @see https://docs.github.com/en/graphql/reference/mutations#adddiscussioncomment
 */

const MUTATION_ADD_COMMENT = `
mutation AddDiscussionComment($discussionId: ID!, $body: String!) {
  addDiscussionComment(input: { discussionId: $discussionId, body: $body }) {
    comment {
      id
      url
    }
  }
}
`;

const QUERY_COMMENT_BODIES = `
query DiscussionCommentBodies($id: ID!) {
  node(id: $id) {
    ... on Discussion {
      comments(first: 100) {
        nodes {
          body
        }
      }
    }
  }
}
`;

async function graphqlRequest<T>(params: {
  token: string;
  query: string;
  variables: Record<string, unknown>;
}): Promise<T> {
  const url =
    process.env.GITHUB_GRAPHQL_URL?.trim() || "https://api.github.com/graphql";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.query,
      variables: params.variables,
    }),
  });
  const json = (await res.json()) as {
    errors?: { message: string }[];
    data?: T;
  };
  if (!res.ok) {
    throw new Error(
      `GraphQL HTTP ${res.status}: ${JSON.stringify(json).slice(0, 600)}`,
    );
  }
  if (json.errors?.length) {
    throw new Error(`GraphQL: ${json.errors.map((e) => e.message).join("; ")}`);
  }
  if (json.data === undefined) {
    throw new Error("GraphQL: empty response");
  }
  return json.data;
}

export async function addDiscussionCommentGraphql(params: {
  token: string;
  discussionNodeId: string;
  body: string;
}): Promise<void> {
  type Data = {
    addDiscussionComment?: {
      comment?: { id: string; url?: string } | null;
    } | null;
  };
  await graphqlRequest<Data>({
    token: params.token,
    query: MUTATION_ADD_COMMENT,
    variables: {
      discussionId: params.discussionNodeId,
      body: params.body,
    },
  });
}

/** Concatenated comment bodies for idempotency checks (e.g. "Tracked in #"). */
export async function getDiscussionCommentBodiesGraphql(params: {
  token: string;
  discussionNodeId: string;
}): Promise<string[]> {
  type Data = {
    node?: {
      comments?: { nodes?: { body?: string }[] | null } | null;
    } | null;
  };
  const data = await graphqlRequest<Data>({
    token: params.token,
    query: QUERY_COMMENT_BODIES,
    variables: { id: params.discussionNodeId },
  });
  if (data.node == null) {
    throw new Error(
      "GraphQL: discussion node not found (check discussion node_id and token access).",
    );
  }
  const nodes = data.node.comments?.nodes;
  if (!Array.isArray(nodes)) return [];
  return nodes.map((n) => n.body || "").filter(Boolean);
}
