/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // ← DŮLEŽITÉ PRO WEDOS HOSTING
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  devIndicators: false,
  allowedDevOrigins: [
    "*.macaly.dev",
    "*.macaly.app",
    "*.macaly-app.com",
    "*.macaly-user-data.dev",
  ],
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        condition: {
          all: [
            { not: "foreign" },  // Exclude node_modules
            "development",        // Only in development mode
          ],
        },
        loaders: [
          {
            loader: "macaly-tagger",
            options: {
              disableSourceMaps: true,  // Required to avoid Turbopack crashes
            },
          },
        ],
        as: "*",  // Preserve original file handling
      },
    },
  },
};

export default nextConfig;



