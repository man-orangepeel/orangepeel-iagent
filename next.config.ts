import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "orangepeel-iagent.vercel.app" }],
        destination: "https://iagent.orangepeel.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
