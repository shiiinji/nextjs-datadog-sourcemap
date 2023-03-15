/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    config.devtool = 'hidden-source-map'

    return config
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*.map',
          destination: '/404'
        }
      ]
    }
  }
};

module.exports = nextConfig;
