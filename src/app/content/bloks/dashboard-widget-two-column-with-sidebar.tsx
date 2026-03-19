"use client";

import { DashboardWidget } from "@/components/bloks/dashboard-widget";
import { SidebarRHS, SidebarRHSProvider } from "@/components/bloks/sidebar-rhs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const filterOptions = [
  { value: "filter1", label: "filter1" },
  { value: "filter2", label: "filter2" },
  { value: "filter3", label: "filter3" },
];

function SidebarContent() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader className="border-b-0 pb-0">
          <CardTitle>Details</CardTitle>
          <CardDescription>
            Sidebar content for dashboard context
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Use this sidebar to show additional details, filters, or related
            actions for the dashboard widgets.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function DashboardWidgetTwoColumnWithSidebarDemo() {
  const [filterValue, setFilterValue] = useState<string>("");

  return (
    <div className="-m-8 flex h-[600px] max-h-[80vh] w-[calc(100%+4rem)] max-w-[calc(100%+4rem)] overflow-hidden">
      <SidebarRHSProvider>
        {/* Main content: shrinks when sidebar opens */}
        <main className="flex min-w-0 flex-1 shrink overflow-auto p-6">
          <div className="min-w-0 w-full">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
              {/* Row 1 */}
              <DashboardWidget
                name="Pinned channels"
                goToHref="#"
                onGoTo={() => console.log("Go to Pinned channels")}
                variant="white-bg-large"
              >
                <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
                  Pinned channels content
                </div>
              </DashboardWidget>
              <DashboardWidget
                name="The name"
                description="Small explanation on something or other"
                goToHref="#"
                onGoTo={() => console.log("Go to The name")}
                filter={{
                  value: filterValue,
                  onChange: setFilterValue,
                  options: filterOptions,
                  placeholder: "Filter",
                }}
                variant="white-bg-small"
              >
                <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
                  Widget content area
                </div>
              </DashboardWidget>
              {/* Row 2 */}
              <DashboardWidget
                name="Recent activity"
                goToHref="#"
                onGoTo={() => console.log("Go to Recent activity")}
                variant="white-bg-large"
              >
                <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
                  Recent activity content
                </div>
              </DashboardWidget>
              <DashboardWidget
                name="Analytics"
                description="Performance metrics overview"
                goToHref="#"
                onGoTo={() => console.log("Go to Analytics")}
                filter={{
                  value: filterValue,
                  onChange: setFilterValue,
                  options: filterOptions,
                  placeholder: "Filter",
                }}
                variant="white-bg-small"
              >
                <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
                  Analytics content
                </div>
              </DashboardWidget>
            </div>
          </div>
        </main>

        {/* Sidebar RHS */}
        <SidebarRHS
          title="Details"
          width="360px"
          minWidth="280px"
          maxWidth="480px"
          height="100%"
          collapsible
          dockable
        >
          <SidebarContent />
        </SidebarRHS>
      </SidebarRHSProvider>
    </div>
  );
}
