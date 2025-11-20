import fs from "fs";
import path from "path";
import { convertCssVariablesToObject } from "@/lib/token-utils";

const cssPath = path.join(process.cwd(), "src", "app", "shadows.css");
const shadowsContent = fs.readFileSync(cssPath, "utf-8");

const NOTES: Record<string, string> = {
  xs: "Looks like a light 1px border",
  base: "Top bar",
  lg: "Modal, Drawer",
  outline: "Used as focus ring",
  "dark-lg": "Only used in dark mode",
};

export default function ShadowsPage() {
  const shadows = convertCssVariablesToObject(shadowsContent, "--shadow-");

  return (
    <div className="flex w-full">
      <div className="flex-1 min-w-0">
        <div className="container p-5 md:p-10">
          <div className="mb-8">
            <h1 className="font-bold text-4xl tracking-tight">Shadows</h1>
            <p className="mt-1 text-muted-foreground">
              Shadow tokens for depth and elevation effects
            </p>
          </div>
          <div style={{ width: "100%" }}>
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
                  <th style={{ padding: "0.8rem", textAlign: "left" }}>Value</th>
                  <th style={{ padding: "0.8rem", textAlign: "left" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(shadows).map(([key, value]) => {
                  return (
                    <tr key={key} style={{ borderBottom: "1px solid #eee" }}>
                      <td style={{ padding: "0.8rem" }}>
                        <div
                          className={`h-16 w-16 rounded-md bg-body-bg shadow-${key}`}
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
