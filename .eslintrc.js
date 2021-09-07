var fs = require('fs');

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  globals: {
    "env": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:relay/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      configFile: './babel.config.js',
      presets: ["@babel/preset-react"]
    }
  },
  plugins: ["jsx-a11y", "react-hooks", "relay", "graphql"],
  rules: {
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "relay/generated-flow-types": "off",
    "relay/must-colocate-fragment-spreads": "off",
    "graphql/template-strings": ['error', {
      env: 'relay',
      schemaString: fs.readFileSync('./api/schema.graphql', 'utf8'),
      tagName: 'graphql'
    }]
  },
  settings: {
    react: {
      version: "17.0.2",
    },
  },
  overrides: [
    {
      files: ["*.spec.js", "*.spec.jsx"],
      env: {
        jest: true,
      },
    }
  ],

  ignorePatterns: [
    "/.cache",
    "/.git",
    "/.yarn",
    "**/__snapshots__/**",
    "**/__generated__/**",
    "/**/node_modules",
    "/coverage",
    "/dist/",
  ],
};
