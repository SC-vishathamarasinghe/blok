"use client";

import {
  DashboardWidget,
  DashboardWidgetAction,
  DashboardWidgetContent,
  DashboardWidgetHeader,
  DashboardWidgetTitle,
} from "@/components/bloks/dashboard-widget";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function DashboardWidgetGrayBgLargeDemo() {
  return (
    <div className="w-[960px] max-w-full">
      <DashboardWidget type="gray-bg-large">
        <DashboardWidgetHeader>
          <DashboardWidgetTitle>Pinned channels</DashboardWidgetTitle>
          <DashboardWidgetAction>
            <Button
              variant="link"
              size="sm"
              colorScheme="primary"
              className="text-sm font-medium -m-1 p-1"
              asChild
            >
              <a href="#">
                Go to Pinned channels
                <ChevronRight className="ml-0.5 h-4 w-4" />
              </a>
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
