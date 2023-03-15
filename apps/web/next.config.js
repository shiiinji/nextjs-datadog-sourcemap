const buildMode = process.env.BUILD_MODE

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  productionBrowserSourceMaps: buildMode === 'ci',
};
