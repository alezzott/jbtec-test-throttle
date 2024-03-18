module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "prettier/prettier": "error",
        semi: ["error", "always"],
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    env: {
        node: true,
        jest: true,
    },
};
