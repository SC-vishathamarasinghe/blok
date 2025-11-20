import fs from "fs";
import path from "path";
import { BreakpointsClient } from "./breakpoints-client";

const cssPath = path.join(process.cwd(), "src", "app", "breakpoints.css");
const breakpoints = fs.readFileSync(cssPath, "utf-8");

export default function BreakpointsPage() {
  return (
    <div className="flex w-full">
      <div className="flex-1 min-w-0">
        <div className="container p-5 md:p-10">
          <div className="mb-8">
            <h1 className="font-bold text-4xl tracking-tight">Breakpoints</h1>
            <p className="mt-1 text-muted-foreground">
              Responsive breakpoint tokens for different screen sizes
            </p>
          </div>
          <BreakpointsClient content={breakpoints} />
        </div>
      </div>
    </div>
  );
}
