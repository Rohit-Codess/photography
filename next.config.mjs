/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testguru.autotracker24.com',
      },
    ],
  },
};

export default nextConfig;