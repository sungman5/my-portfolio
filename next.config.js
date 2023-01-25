/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['localhost', '*', 'https://github.com/']
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig