/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: ["localhost", "your-production-domain.com"],
  },
  output: "standalone",
};

export default nextConfig;
