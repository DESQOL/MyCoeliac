module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-native/all',
    ],
    plugins: [
        "react",
        "react-native",
    ],
    rules: {
        "@typescript-eslint/semi": ["error"],
        "eol-last": ["error", "always"],
        "indent": ["error", 4, { "MemberExpression": 1 }],
        "object-curly-spacing": ["error", "always"],
        "prefer-arrow-callback": "error",
        "quotes": ["error", "single", "avoid-escape"],
        "semi": "off",
    },
};
