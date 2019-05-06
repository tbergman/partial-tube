module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  })
  config.externals = {
    jsdom: "window",
    cheerio: "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": "window",
    "react/addons": true
  }
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
