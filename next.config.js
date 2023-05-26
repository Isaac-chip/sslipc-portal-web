const path = require('path');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImages: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config, options) {
    // 在这里添加自定义的 webpack 配置
    return config;
  },
});

// module.exports = nextConfig

