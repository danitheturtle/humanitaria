module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },

  extends: ["eslint:recommended"],

  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ["*.jsx"],
      extends: ["plugin:react/recommended"],
      plugins: ["jsx-a11y", "react-hooks"],
      env: {
        browser: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: "17.0.2",
        },
      },
      rules: {
        "react/no-children-prop": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
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
    "/**/__snapshots__",
    "/**/node_modules",
    "/coverage",
    "/dist/",
  ],
};
