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
        "eol-last": ["error", "always"],
        "quotes": ["error", "single", "avoid-escape"],
        "object-curly-spacing": ["error", "always"],
    },
};
