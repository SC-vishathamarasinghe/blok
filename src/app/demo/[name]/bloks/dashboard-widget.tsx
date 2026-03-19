export const dashboardWidget = {
  name: "dashboard-widget",
  preview: {
    defaultComponent: "dashboard-widget",
  },
  usage: {
    usage: [
      `import { DashboardWidget } from "@/components/bloks/dashboard-widget";`,
      `<DashboardWidget name="Widget name" goToHref="/path" />`,
    ],
  },
  components: {
    "Two-column layout": { component: "dashboard-widget-two-column" },
    "Two-column layout with Sidebar RHS": {
      component: "dashboard-widget-two-column-with-sidebar",
    },
  },
};
