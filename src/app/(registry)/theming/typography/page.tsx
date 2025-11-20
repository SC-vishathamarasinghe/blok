import fs from "fs";
import path from "path";
import { convertCssVariablesToObject } from "@/lib/token-utils";

const cssPath = path.join(process.cwd(), "src", "app", "typography.css");
const typographyContent = fs.readFileSync(cssPath, "utf-8");

export default function TypographyPage() {
  const typography = convertCssVariablesToObject(typographyContent, "--text-");

  return (
    <div className="flex w-full">
      <div className="flex-1 min-w-0">
        <div className="container p-5 md:p-10">
          <div className="mb-8">
            <h1 className="font-bold text-4xl tracking-tight">Typography</h1>
            <p className="mt-1 text-muted-foreground">
              Typography tokens for consistent text styling
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <h2 style={{ fontSize: "1.5rem" }}>Font sizes</h2>

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
                    <th style={{ padding: "0.8rem", textAlign: "left" }}>Token</th>
                    <th style={{ padding: "0.8rem", textAlign: "left" }}>Value</th>
                    <th style={{ padding: "0.8rem", textAlign: "left" }}>PX</th>
                    <th style={{ padding: "0.8rem", textAlign: "left" }}>Example</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(typography).map(([key, value]) => (
                    <tr key={key} style={{ borderBottom: "1px solid #eee" }}>
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
                          {parseFloat(value) * 16}px
                        </span>
                      </td>
                      <td style={{ padding: "0.8rem", textAlign: "left" }}>
                        <p className={`text-${key}`}>text-{key}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
}
