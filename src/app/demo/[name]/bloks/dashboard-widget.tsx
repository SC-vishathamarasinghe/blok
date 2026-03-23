export const dashboardWidget = {
  name: "dashboard-widget",
  preview: {
    defaultComponent: "dashboard-widget",
  },
  usage: {
    usage: [
      `import {
  DashboardWidget,
  DashboardWidgetHeader,
  DashboardWidgetTitle,
  DashboardWidgetDescription,
  DashboardWidgetAction,
  DashboardWidgetToolbar,
  DashboardWidgetContent,
} from "@/components/bloks/dashboard-widget";`,
      `<DashboardWidget>
  <DashboardWidgetHeader>
    <DashboardWidgetTitle>Widget name</DashboardWidgetTitle>
    <DashboardWidgetDescription>Optional description</DashboardWidgetDescription>
    <DashboardWidgetAction>
      <Button variant="link" size="sm" colorScheme="primary" asChild>
        <a href="/path">Go to Widget name <ChevronRight /></a>
      </Button>
    </DashboardWidgetAction>
  </DashboardWidgetHeader>
  <DashboardWidgetToolbar>
    {/* Optional: filters, actions, or any custom toolbar content */}
  </DashboardWidgetToolbar>
  <DashboardWidgetContent>
    {/* Your widget content */}
  </DashboardWidgetContent>
</DashboardWidget>`,
    ],
  },
  components: {
    "Gray bg large": { component: "dashboard-widget-gray-bg-large" },
    "White bg small": { component: "dashboard-widget-white-bg-small" },
    "Marketplace apps": { component: "dashboard-widget-marketplace-apps" },
    "Two-column layout": { component: "dashboard-widget-two-column" },
  },
};
