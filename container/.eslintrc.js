module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": ["off"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "src/setupTests.ts",
          "src/services/reactotron/**",
          "src/__tests__/**",
          "src/gbweb-shared/**"
        ]
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "consistent-return": "off",
    "react/require-default-props": "off",
    "no-bitwise": "off",
    "no-plusplus": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-console": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "radix": [2, "as-needed"],
    "import/no-named-default": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  }
};
