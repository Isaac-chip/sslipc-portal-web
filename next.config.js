const path = require('path');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImages: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
  webpack(config, options) {
    // 在这里添加自定义的 webpack 配置
    return config;
  },
});

// module.exports = nextConfig

