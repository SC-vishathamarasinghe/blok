/**
 * Telemetry event names for Gainsight PX.
 * Use these constants so event names stay aligned with docs/telemetry/event-models.md.
 */
export const TELEMETRY_EVENTS = {
  // Pages visited
  page_view: "page_view",
  topbar_nav_click: "topbar_nav_click",
  sidebar_nav_click: "sidebar_nav_click",
  topbar_search_result_click: "topbar_search_result_click",
  registry_card_click: "registry_card_click",
  // TopBar – theme & external links
  topbar_theme_toggle: "topbar_theme_toggle",
  topbar_link_click: "topbar_link_click",
} as const;

export type TelemetryEventName =
  (typeof TELEMETRY_EVENTS)[keyof typeof TELEMETRY_EVENTS];
