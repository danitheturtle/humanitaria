const baseConfig = require('../babel.config.js');

module.exports = function config(api) {
  const baseConfigResult = baseConfig(api);
  return {
    ...baseConfigResult,
    overrides: [
      ...baseConfigResult.overrides,
      {
        test: /\.js$/,
        presets: [
          [
            "@babel/preset-react",
            {
              development: api.env() === "development",
              useBuiltIns: true,
              runtime: "automatic"
            }
          ]
        ]
      }
    ]
  };
}
