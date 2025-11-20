import fs from "fs";
import path from "path";
import { convertCssVariablesToObject } from "@/lib/token-utils";

const cssPath = path.join(process.cwd(), "src", "app", "borderRadius.css");
const borderRadiusContent = fs.readFileSync(cssPath, "utf-8");

const NOTES: Record<string, string> = {
  md: "The most common rounded. Used on many elements, such as inputs, cards, tags, and more.",
  lg: "The preferred larger rounded. Used on modals and large panels.",
  full: "Used for circular elements, such as avatars and buttons.",
};

export default function BorderRadiusPage() {
  const borderRadiuses = convertCssVariablesToObject(borderRadiusContent, "--rounded-");

  return (
    <div className="flex w-full">
      <div className="flex-1 min-w-0">
        <div className="container p-5 md:p-10">
          <div className="mb-8">
            <h1 className="font-bold text-4xl tracking-tight">Border Radius</h1>
            <p className="mt-1 text-muted-foreground">
              Border radius tokens used throughout the design system
            </p>
          </div>
          <div style={{ width: "100%", overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "1rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #ccc" }}>
                  <th style={{ padding: "0.8rem", textAlign: "left" }}>Example</th>
                  <th style={{ padding: "0.8rem", textAlign: "left" }}>Token</th>
                  <th style={{ padding: "0.8rem", textAlign: "left" }}>
                    Value (rem)
                  </th>
                  <th style={{ padding: "0.8rem", textAlign: "left" }}>
                    Value (px)
                  </th>
                  <th style={{ padding: "0.8rem", textAlign: "left" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(borderRadiuses).map(([key, value]) => {
                  const pxValue = parseFloat(value) * 16;

                  return (
                    <tr key={key} style={{ borderBottom: "1px solid #eee" }}>
                      <td style={{ padding: "0.8rem" }}>
                        <div
                          className={`h-16 w-16 bg-pink-200 rounded-${key}`}
                        ></div>
                      </td>
                      <td style={{ padding: "0.8rem" }}>{key}</td>
                      <td style={{ padding: "0.8rem" }}>
                        <span
                          style={{
                            fontFamily: "monospace",
                            fontSize: "0.9rem",
                          }}
                          className="text-muted-foreground"
                        >
                          {value}
                        </span>
                      </td>
                      <td style={{ padding: "0.8rem" }}>
                        <span
                          style={{
                            fontFamily: "monospace",
                            fontSize: "0.9rem",
                          }}
                          className="text-muted-foreground"
                        >
                          {pxValue}px
                        </span>
                      </td>
                      <td style={{ padding: "0.8rem" }}>
                        <span
                          style={{
                            fontFamily: "monospace",
                            fontSize: "0.9rem",
                          }}
                          className="text-muted-foreground"
                        >
                          {NOTES[key] ?? ""}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
