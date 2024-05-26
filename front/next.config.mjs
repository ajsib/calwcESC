/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  output: "standalone",
  images: {
    domains: ['localhost', 'calwc-esc-server.azurewebsites.net'],
  },
};

export default nextConfig;
