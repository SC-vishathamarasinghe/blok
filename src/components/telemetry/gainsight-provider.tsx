"use client";

import { useEffect } from "react";

/**
 * Gainsight PX – Task 1 is the tag (added in root layout <head>).
 * This provider only sets globalContext for anonymous docs.
 * Task 2 (identify) is required when you have auth – add aptrinsic("identify", userFields, accountFields) at the auth point. See docs/telemetry/event-models.md.
 */
export function GainsightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined" || !window.aptrinsic) return;
    window.aptrinsic("set", "globalContext", {
      App: "Blok Docs",
      Hostname: window.location.hostname,
    });
  }, []);

  return <>{children}</>;
}
