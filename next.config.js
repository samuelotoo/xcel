/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gdurl.com",
      },
    ],
  },
  // output: "export",
};

module.exports = nextConfig;
