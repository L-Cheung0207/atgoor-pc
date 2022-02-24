module.exports = {
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    amd: true,
    browser: true,
    es6: true,
  },
  rules: {
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
  },
};
