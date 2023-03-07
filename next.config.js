/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/quiz1',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
