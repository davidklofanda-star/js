/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  devIndicators: false,
  output: "export",
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
            { not: "foreign" },
            "development",
          ],
        },
        loaders: [
          {
            loader: "macaly-tagger",
            options: { disableSourceMaps: true },
          },
        ],
        as: "*",
      },
    },
  },
};

module.exports = nextConfig;

