/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['en', 'fr'], 
      defaultLocale: 'en',    
    },
    output: 'standalone',
  };
  
  export default nextConfig;