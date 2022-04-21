// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    output: "stream"
  },
  buildOptions: {
    out: "docs",
    sourcemap: true
  },
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: 'es2020',
  // },
  root: "src/",
  exclude: 
    [
      '**/node_modules/**/*',
      '.vscode',
      'devops'
    ]
};
