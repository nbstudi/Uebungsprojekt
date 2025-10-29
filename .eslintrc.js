module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "@react-native",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native", "jest"],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
