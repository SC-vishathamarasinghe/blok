import { type Registry } from "shadcn/registry"

export const hooks: Registry["items"] = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },

  {
    name: "use-brandkits",
    type: "registry:hook",
    dependencies: ["@sitecore/stream-ui-core"],
    files: [
      {
        path: "hooks/use-brandkits.ts",
        type: "registry:hook",
      },
    ],
    categories: ["stream", "hooks", "brandkit"],
  },
  {
    name: "use-brandkit-by-id",
    type: "registry:hook",
    dependencies: ["@sitecore/stream-ui-core"],
    files: [
      {
        path: "hooks/use-brandkit-by-id.ts",
        type: "registry:hook",
      },
    ],
    categories: ["stream", "hooks", "brandkit"],
  },
]
