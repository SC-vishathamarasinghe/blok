"use client";

import {
  DashboardWidget,
  DashboardWidgetAction,
  DashboardWidgetContent,
  DashboardWidgetHeader,
  DashboardWidgetTitle,
} from "@/components/bloks/dashboard-widget";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings } from "lucide-react";

export default function DashboardWidgetMarketplaceAppsDemo() {
  return (
    <div className="w-[960px] max-w-full">
      <DashboardWidget type="marketplace-apps">
        <DashboardWidgetHeader>
          <DashboardWidgetTitle>
            <Checkbox />
            Sitecore Search
          </DashboardWidgetTitle>
          <DashboardWidgetAction>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 p-1"
              aria-label="Settings"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </DashboardWidgetAction>
        </DashboardWidgetHeader>
        <DashboardWidgetContent>
          <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
            Widget content area
          </div>
        </DashboardWidgetContent>
      </DashboardWidget>
    </div>
  );
}
