module.exports = function config(api) {
  return {
    presets: [
      [
        "@babel/preset-env",
        api.caller((x) => !x || x.target === "node" || x.target === undefined) ? {
          targets: { node: "14" },
          useBuiltIns: "usage",
          corejs: { version: 3, proposals: true },
        } : {},
      ],
    ],
    plugins: [
      "relay"
    ],
    ignore: api.env() === "test" ? [] : ["**/*.spec.js"],
    sourceMaps: api.env() === "production",

    overrides: [{
      test: /.*\/web\/.*\.js/,
      presets: [
        [
          "@babel/preset-react",
          {
            development: api.env() === "development",
            useBuiltIns: true,
            runtime: "automatic"
          },
        ],
      ]
    }],
  };
};
