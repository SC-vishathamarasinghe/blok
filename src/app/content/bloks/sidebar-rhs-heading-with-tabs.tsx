"use client";

import { SidebarRHS, SidebarRHSProvider } from "@/components/bloks/sidebar-rhs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  StackNavigation,
  type StackNavigationElement,
  type StackNavigationItem,
} from "@/components/ui/stack-navigation";
import { Icon } from "@/lib/icon";
import { cn } from "@/lib/utils";
import { mdiHistory, mdiLayers, mdiViewDashboard } from "@mdi/js";
import { useState } from "react";

function SidebarContent({ activeTab }: { activeTab: string }) {
  const tabContent: Record<string, React.ReactNode> = {
    "/overview": (
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader className="border-b-0 pb-0">
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Get a summary of all important information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              This is the overview section. Here you can see a summary of all
              the important information and key metrics.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                <span className="text-sm font-medium">Total Items</span>
                <span className="text-sm font-bold">1,234</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                <span className="text-sm font-medium">Active Users</span>
                <span className="text-sm font-bold">567</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    "/versions": (
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader className="border-b-0 pb-0">
            <CardTitle>Versions</CardTitle>
            <CardDescription>
              View and manage different versions of your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              This is the versions section. View and manage different versions
              of your project, track changes, and compare versions.
            </p>
            <div className="space-y-2">
              <div className="p-3 border border-border rounded-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">v2.1.0</span>
                  <span className="text-xs text-muted-foreground">Latest</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Released 2 days ago
                </p>
              </div>
              <div className="p-3 border border-border rounded-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">v2.0.5</span>
                  <span className="text-xs text-muted-foreground">Stable</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Released 1 week ago
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    "/usage": (
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader className="border-b-0 pb-0">
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              Learn how to use this component effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              This is the usage section. Learn how to use this component
              effectively with examples and best practices.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-muted rounded-md">
                <h4 className="text-sm font-semibold mb-1">Basic Usage</h4>
                <p className="text-xs text-muted-foreground">
                  Import the component and wrap your content with the provider.
                </p>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <h4 className="text-sm font-semibold mb-1">Custom Header</h4>
                <p className="text-xs text-muted-foreground">
                  Use the header prop to add custom navigation or controls.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  };

  return <>{tabContent[activeTab] || tabContent["/overview"]}</>;
}

export default function SidebarRHSHeadingWithTabsDemo() {
  const [activeTab, setActiveTab] = useState("/overview");

  const navigationItems: StackNavigationElement[] = [
    {
      name: "Overview",
      path: "/overview",
      icon: <Icon path={mdiViewDashboard} />,
    },
    {
      name: "Versions",
      path: "/versions",
      icon: <Icon path={mdiHistory} />,
    },
    {
      name: "Usage",
      path: "/usage",
      icon: <Icon path={mdiLayers} />,
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
            "bg-primary-bg text-primary-fg hover:bg-primary-bg hover:text-primary-fg font-medium",
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
    <div className="h-[500px]">
      <SidebarRHSProvider>
        <div className="relative w-full h-full flex border border-border rounded-lg overflow-hidden bg-body-bg">
          {/* Main content area */}
          <main className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Main Content Area</h2>
              <p className="text-muted-foreground">
                This sidebar demonstrates a header with stack navigation
                horizontal tabs. Click on the tabs in the sidebar header to see
                them in action.
              </p>
            </div>
          </main>

          {/* Sidebar */}
          <SidebarRHS
            header={customHeader}
            width="360px"
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
