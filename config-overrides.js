const {
  override,
  addBabelPlugin,
  addBundleVisualizer,
  addBabelPreset,
} = require("customize-cra")

let config = override(
  (config) => {
    config.plugins = config.plugins.filter((plugin) => {
      return plugin.key !== "ESLintWebpackPlugin"
    })
    // Adds human readable names to chunks
    config.optimization.chunkIds = "named"
    return config
  },
  addBabelPlugin("@emotion/babel-plugin"),
  addBabelPreset("@emotion/babel-preset-css-prop"),
  process.env.ANALYZE && addBundleVisualizer(),
)

/*eslint-disable no-param-reassign */
if (process.env.NODE_ENV === "test") {
  config = {
    babelrc: true,
    jest: (config) => {
      config.setupFilesAfterEnv = ["<rootDir>/test/setup-tests.js"]
      config.modulePaths = ["."]
      config.transform["^.+\\.(js|jsx|mjs|cjs|ts|tsx)$"] = [
        "@swc/jest",
        {
          sourceMaps: true,
          jsc: {
            parser: {
              syntax: "ecmascript",
              jsx: true,
            },

            transform: {
              react: {
                runtime: "automatic",
              },
            },
          },
        },
      ]
      return config
    },
  }
}

module.exports = config
