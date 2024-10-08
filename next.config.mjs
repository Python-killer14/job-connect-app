/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        // Placeholder images provider
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        // Placeholder images provider
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
