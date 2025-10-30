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
  // Skip static page generation errors to allow build to complete
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Set output to standalone for better performance
  output: 'standalone',
};

export default nextConfig;