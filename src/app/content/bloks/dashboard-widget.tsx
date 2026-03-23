"use client";

import {
  DashboardWidget,
  DashboardWidgetAction,
  DashboardWidgetContent,
  DashboardWidgetDescription,
  DashboardWidgetHeader,
  DashboardWidgetTitle,
  DashboardWidgetToolbar,
} from "@/components/bloks/dashboard-widget";
import { Button } from "@/components/ui/button";
import { FilterSingleSelect } from "@/components/ui/filter";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const filterOptions = [
  { value: "all", label: "All projects" },
  { value: "active", label: "Active" },
  { value: "archived", label: "Archived" },
];

export default function DashboardWidgetDemo() {
  const [filterValue, setFilterValue] = useState<string>("");

  return (
    <div className="w-[960px] max-w-full">
      <DashboardWidget type="white-bg-large">
        <DashboardWidgetHeader>
          <DashboardWidgetTitle>Projects</DashboardWidgetTitle>
          <DashboardWidgetDescription>
            Overview of your recent projects and their status
          </DashboardWidgetDescription>
          <DashboardWidgetAction>
            <Button
              variant="link"
              size="sm"
              colorScheme="primary"
              className="text-sm font-medium -m-1 p-1"
              asChild
            >
              <a href="#">
                Go to Projects
                <ChevronRight className="ml-0.5 h-4 w-4" />
              </a>
            </Button>
          </DashboardWidgetAction>
        </DashboardWidgetHeader>
        <DashboardWidgetToolbar>
          <FilterSingleSelect
            value={filterValue}
            onChange={setFilterValue}
            options={filterOptions}
            placeholder="Filter"
            className="w-fit"
          />
        </DashboardWidgetToolbar>
        <DashboardWidgetContent>
          <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
            Widget content area
          </div>
        </DashboardWidgetContent>
      </DashboardWidget>
    </div>
  );
}
