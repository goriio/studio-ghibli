/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'www.themoviedb.org'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
