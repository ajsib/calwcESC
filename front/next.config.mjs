/** @type {import('next').NextConfig} */
import env from './public/env.json' with { type: 'json' };

const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'calwc-esc-server.azurewebsites.net',
      },
    ],
  },
  basePath: env.basePath,
};

export default nextConfig;
