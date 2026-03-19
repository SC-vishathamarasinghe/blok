"use client";

import { DashboardWidget } from "@/components/bloks/dashboard-widget";
import { useState } from "react";

const filterOptions = [
  { value: "filter1", label: "filter1" },
  { value: "filter2", label: "filter2" },
  { value: "filter3", label: "filter3" },
];

export default function DashboardWidgetDemo() {
  const [filterValue, setFilterValue] = useState<string>("");

  return (
    <div className="grid min-h-screen w-[960px] max-w-full grid-cols-1 gap-6 p-6 lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-col gap-8">
        {/* Gray bg large */}
        <section>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Gray bg large
          </h3>
          <DashboardWidget
            name="Pinned channels"
            goToHref="#"
            onGoTo={() => console.log("Go to Pinned channels")}
            variant="gray-bg-large"
          >
            <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
              Widget content area
            </div>
          </DashboardWidget>
        </section>

        {/* White bg large - with description and filter */}
        <section>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            White bg large (with description and filter)
          </h3>
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
            variant="white-bg-large"
          >
            <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
              Widget content area
            </div>
          </DashboardWidget>
        </section>

        {/* White bg small (RHS) */}
        <section>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            White bg small (RHS)
          </h3>
          <div className="flex justify-start">
            <DashboardWidget
              name="The name"
              description="Small explanation on something or other"
              goToHref="#"
              onGoTo={() => console.log("Go to The name (RHS)")}
              filter={{
                value: filterValue,
                onChange: setFilterValue,
                options: filterOptions,
                placeholder: "Filter",
              }}
              variant="white-bg-small"
            >
              <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
                Widget content area
              </div>
            </DashboardWidget>
          </div>
        </section>

        {/* Marketplace apps */}
        <section>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Marketplace apps
          </h3>
          <DashboardWidget
            name="Marketplace app"
            icon={
              <div className="h-8 w-8 rounded bg-subtle-bg border border-border" />
            }
            onSettings={() => console.log("Settings clicked")}
            variant="marketplace-apps"
          >
            <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
              Widget content area
            </div>
          </DashboardWidget>
        </section>
      </div>
      <div aria-hidden className="hidden lg:block" />
    </div>
  );
}
