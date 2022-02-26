const path = require("path");
const webpack = require("webpack");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const Timestamp = new Date().getTime();
const isProd = ["production", "prod"].includes(process.env.NODE_ENV);
const CompressionPlugin = require("compression-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const cesiumSource = "./node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

const port = 8080;

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.symlinks(true); // 修复HMR
    config
      .plugin("ignore")
      .use(new webpack.ContextReplacementPlugin(/dayjs[/\\]locale$/, /zh-cn$/));
    if (isProd) {
      config.optimization.minimize(true);
      config.optimization.splitChunks({ chunks: "all" });
      config.plugins.delete("prefetch");
      config.plugins.delete("preload");
    }
  },
  configureWebpack: {
    // name: name,
    // resolve: {
    //   alias: {
    //     '@': resolve('src')
    //   }
    // },
    output: {
      sourcePrefix: " ",
      filename: `js/[name].${Timestamp}.js`,
      chunkFilename: `js/[name].${Timestamp}.js`,
    },
    amd: {
      toUrlUndefined: true,
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve("src"),
        cesium: path.resolve(__dirname, cesiumSource),
      },
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, cesiumWorkers), to: "Workers" },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Assets"), to: "Assets" },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Widgets"), to: "Widgets" },
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, "ThirdParty/Workers"),
          to: "ThirdParty/Workers",
        },
      ]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("./"),
      }),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 8192,
        minRatio: 0.8,
      }),
    ],
    module: {
      unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false,
    },
  },
  css: {
    extract: {
      filename: `css/[name].${Timestamp}.css`,
      chunkFilename: `css/[name].${Timestamp}.css`,
    },
  },
  productionSourceMap: false,
  parallel: require("os").cpus().length > 1,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port,
    https: false,
    hotOnly: false,
    proxy: null,
    hot: false,
    inline: false,
  },
};
