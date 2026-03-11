"use client";

import { SidebarRHS, SidebarRHSProvider } from "@/components/bloks/sidebar-rhs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  SearchInput,
  SearchInputField,
  SearchInputLeftElement,
} from "@/components/ui/search-input";
import {
  StackNavigation,
  type StackNavigationElement,
  type StackNavigationItem,
} from "@/components/ui/stack-navigation";
import { Icon } from "@/lib/icon";
import { cn } from "@/lib/utils";
import {
  mdiClockOutline,
  mdiCommentOutline,
  mdiContentCopy,
  mdiInformationOutline,
  mdiLayers,
  mdiMagnify,
  mdiTrashCanOutline,
  mdiViewDashboard,
} from "@mdi/js";
import { useState } from "react";

function ExpandableDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. amet sapien non amet.. Posuere parturient donec`;

  const truncatedText = fullText.substring(0, 200);
  const shouldTruncate = fullText.length > 200;

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold">Description</h3>
      <div className="relative">
        <p className="text-sm text-foreground">
          {isExpanded ? fullText : truncatedText}
        </p>
        {!isExpanded && shouldTruncate && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-center text-foreground hover:underline cursor-pointer font-semibold"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

function TodoSection() {
  const [todoChecked, setTodoChecked] = useState(true);
  const [newTodoChecked, setNewTodoChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold">To do</h3>
      <div className="space-y-3">
        {/* Completed Todo Item */}
        <div className="flex items-center gap-2 group">
          <Checkbox
            checked={todoChecked}
            onCheckedChange={(checked) => setTodoChecked(checked === true)}
            className="shrink-0"
          />
          <span className="text-sm flex-1">
            <Badge size="sm" colorScheme="neutral" className="mr-1">
              @Anne Schmeler
            </Badge>
            please review
          </span>
          <button
            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-muted-foreground hover:text-foreground"
            aria-label="Delete todo"
          >
            <Icon path={mdiTrashCanOutline} size={0.9} />
          </button>
        </div>

        {/* Add New Todo Input */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={newTodoChecked}
            onCheckedChange={(checked) => setNewTodoChecked(checked === true)}
            className="shrink-0"
          />
          <Input
            type="text"
            placeholder="Add new to-do, type @ to mention someone"
            className="flex-1 border-0 bg-transparent px-0 py-0 h-auto text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
    </div>
  );
}

function UsageSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const usedByItems = [
    {
      label: "Product Hero Banner",
      language: "en-US",
      count: 3,
      status: "Draft",
      statusColor: "neutral" as const,
    },
    {
      label: "Homepage Layout",
      language: "en-US",
      count: 2,
      status: "Published",
      statusColor: "success" as const,
      hasClockIcon: true,
    },
    {
      label: "Navigation Menu",
      language: "en-US",
      count: 1,
      status: "Published",
      statusColor: "success" as const,
      hasClockIcon: false,
    },
    {
      label: "Footer Component",
      language: "en-US",
      count: 4,
      status: "Queued",
      statusColor: "warning" as const,
    },
    {
      label: "Sidebar Widget",
      language: "en-US",
      count: 5,
      status: "Archived",
      statusColor: "neutral" as const,
    },
  ];

  const filteredItems = usedByItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h3 className="text-base font-semibold text-foreground">
        Briefs that are using this brief type
      </h3>

      {/* Search Input */}
      <SearchInput>
        <SearchInputLeftElement>
          <Icon path={mdiMagnify} />
        </SearchInputLeftElement>
        <SearchInputField
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchInput>

      {/* Items List */}
      <div className="flex flex-col">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between py-2 first:pt-0"
          >
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">
                {item.label} {item.language}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Used {item.count} {item.count === 1 ? "time" : "times"}
              </div>
            </div>
            <Badge
              size="sm"
              colorScheme={item.statusColor}
              className="shrink-0 ml-2"
            >
              {item.hasClockIcon && (
                <Icon path={mdiClockOutline} className="size-3" />
              )}
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoSection() {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Details Title */}
      <h3 className="text-base font-semibold text-foreground">Details</h3>
      {/* Label */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-muted-foreground">Label</label>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">The label</span>
          <button
            onClick={() => handleCopy("The label")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy to clipboard"
          >
            <Icon path={mdiContentCopy} className="size-4" />
          </button>
        </div>
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-muted-foreground">Name</label>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Value</span>
          <button
            onClick={() => handleCopy("Value")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy to clipboard"
          >
            <Icon path={mdiContentCopy} className="size-4" />
          </button>
        </div>
      </div>

      {/* Created by */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-muted-foreground">Created by</label>
        <span className="text-sm font-medium text-foreground">Value</span>
      </div>

      {/* Created */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-muted-foreground">Created</label>
        <span className="text-sm font-medium text-foreground">
          Person, Date
        </span>
      </div>

      {/* Updated */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-muted-foreground">Updated</label>
        <span className="text-sm font-medium text-foreground">
          Person, Date
        </span>
      </div>
    </div>
  );
}

function SidebarContent({ activeTab }: { activeTab: string }) {
  const tabContent: Record<string, React.ReactNode> = {
    "/overview": (
      <div className="flex flex-col gap-6">
        {/* Description Section */}
        <ExpandableDescription />
      </div>
    ),
    "/usage": (
      <div className="flex flex-col gap-4">
        <UsageSection />
      </div>
    ),
    "/comments": (
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader className="border-b-0 pb-0">
            <CardTitle>Comment</CardTitle>
            <CardDescription>View and manage comments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              This section displays comments and feedback related to the current
              item.
            </p>
            <div className="space-y-2">
              <div className="p-3 border border-border rounded-md">
                <div className="flex items-start justify-between mb-1">
                  <span className="text-sm font-semibold">John Doe</span>
                  <span className="text-xs text-muted-foreground">2h ago</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Great work on this feature!
                </p>
              </div>
              <div className="p-3 border border-border rounded-md">
                <div className="flex items-start justify-between mb-1">
                  <span className="text-sm font-semibold">Jane Smith</span>
                  <span className="text-xs text-muted-foreground">5h ago</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Could we add more details here?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    "/info": (
      <div className="flex flex-col gap-4">
        <InfoSection />
      </div>
    ),
  };

  return <>{tabContent[activeTab] || tabContent["/overview"]}</>;
}

export default function SidebarRHSBriefTypeDemo() {
  const [activeTab, setActiveTab] = useState("/overview");

  const navigationItems: StackNavigationElement[] = [
    {
      name: "Overview",
      path: "/overview",
      icon: <Icon path={mdiViewDashboard} />,
    },
    {
      name: "Usage",
      path: "/usage",
      icon: <Icon path={mdiLayers} />,
    },
    {
      name: "Comment",
      path: "/comments",
      icon: <Icon path={mdiCommentOutline} />,
    },
    {
      name: "Info",
      path: "/info",
      icon: <Icon path={mdiInformationOutline} />,
    },
  ];

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  const renderTabItem = (item: StackNavigationItem) => {
    const isActive = activeTab === item.path;
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          "min-w-12 w-fit h-9 px-1.5 py-0.5 gap-0.5 rounded-md cursor-pointer overflow-hidden",
          "text-neutral-fg hover:bg-sidebar-accent transition-colors font-medium",
          isActive &&
            "bg-neutral-bg text-neutral-fg hover:bg-neutral-bg hover:text-neutral-fg font-medium",
        )}
        onClick={() => handleTabClick(item.path)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div
          aria-hidden="true"
          className="shrink-0 flex items-center justify-center w-[16px] h-[16px]"
        >
          {item.icon}
        </div>
        <span
          className="text-3xs text-center whitespace-nowrap leading-tight"
          title={item.name}
        >
          {item.name}
        </span>
      </div>
    );
  };

  const customHeader = (
    <div className="flex-1 flex items-center">
      <StackNavigation
        items={navigationItems}
        orientation="horizontal"
        renderItem={renderTabItem}
        navClassName="justify-start gap-1"
        className="shadow-none h-auto"
      />
    </div>
  );

  return (
    <div className="h-[550px]">
      <SidebarRHSProvider>
        <div className="w-full h-full flex bg-body-bg">
          {/* Main content area */}
          <main className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Main Content Area</h2>
              <p className="text-muted-foreground">
                This sidebar demonstrates a brief-type example with horizontal
                tabs for Overview, Usage, Comment, and Info.
              </p>
            </div>
          </main>

          {/* Sidebar */}
          <SidebarRHS
            header={customHeader}
            width="340px"
            minWidth="250px"
            maxWidth="600px"
            height="100%"
            collapsible={true}
            dockable={true}
          >
            <SidebarContent activeTab={activeTab} />
          </SidebarRHS>
        </div>
      </SidebarRHSProvider>
    </div>
  );
}
