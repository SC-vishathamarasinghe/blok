import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX({})

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};


export default withMDX(nextConfig)