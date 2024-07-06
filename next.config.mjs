/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Placeholder images provider
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        hostname: "google",
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
