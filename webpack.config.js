module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./monteCarlo.ts",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
      },
    experiments: {
        topLevelAwait: true,
        outputModule: true
    },
};