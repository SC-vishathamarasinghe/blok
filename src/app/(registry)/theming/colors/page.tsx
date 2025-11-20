import fs from "fs";
import path from "path";
import { ColorsClient } from "./colors-client";

let cssPath = path.join(process.cwd(), "src", "app", "colors.css");
const colorsContent = fs.readFileSync(cssPath, "utf-8");

cssPath = path.join(process.cwd(), "src", "app", "globals.css");
const globalsContent = fs.readFileSync(cssPath, "utf-8");

const combinedColorsContent = `${colorsContent}\n${globalsContent}`;

export default function ColorsPage() {
  return (
    <div className="flex w-full">
      <div className="flex-1 min-w-0">
        <div className="container p-5 md:p-10">
          <div className="mb-8">
            <h1 className="font-bold text-4xl tracking-tight">Colors</h1>
            <p className="mt-1 text-muted-foreground">
              Color tokens used throughout the design system
            </p>
          </div>
          <ColorsClient content={combinedColorsContent} />
        </div>
      </div>
    </div>
  );
}
