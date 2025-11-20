import fs from "fs";
import path from "path";
import { SemanticTokensClient } from "./semantic-tokens-client";

const cssPath = path.join(process.cwd(), "src", "app", "globals.css");
const globalsContent = fs.readFileSync(cssPath, "utf-8");

export default function SemanticTokensPage() {
  return (
    <div className="flex w-full">
      <div className="flex-1 min-w-0">
        <div className="container p-5 md:p-10">
          <div className="mb-8">
            <h1 className="font-bold text-4xl tracking-tight">Semantic Tokens</h1>
            <p className="mt-1 text-muted-foreground">
              Semantic color tokens that adapt to light and dark themes
            </p>
          </div>
          <SemanticTokensClient content={globalsContent} />
        </div>
      </div>
    </div>
  );
}
