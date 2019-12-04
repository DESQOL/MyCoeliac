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
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/semi": ["error"],
        "eol-last": ["error", "always"],
        "indent": ["error", 4, { "MemberExpression": 1 }],
        "multiline-comment-style": ["error", "starred-block"],
        "no-multiple-empty-lines": ["error", {
            "max": 1,
            "maxBOF": 0,
            "maxEOF": 1
        }],
        "object-curly-spacing": ["error", "always"],
        "prefer-arrow-callback": "error",
        "quotes": ["error", "single", "avoid-escape"],
        "semi": "off",
        "spaced-comment": ["error", "always", {
            "block": {
                "balanced": true
            }
        }],
    },
};
