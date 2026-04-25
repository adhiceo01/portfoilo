/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.jsdelivr.net' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'thumbs.dreamstime.com' },
    ],
  },
};

module.exports = nextConfig;
