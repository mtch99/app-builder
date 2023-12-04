const ConsoleLogOnBuildWebpackPlugin = require('./react-bootstrap-md3')
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config = {
      ...config,
      plugins: [
        ...config.plugins,
        new ConsoleLogOnBuildWebpackPlugin('emptyPath')
      ]
    }
    // console.log(config)
    return config
  }
}

module.exports = nextConfig
