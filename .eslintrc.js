module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended", // Integra o Prettier com o ESLint
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "react-native", "prettier"],
  rules: {
    "prettier/prettier": "error", // Exibe erros quando o código não segue o Prettier
    "react/react-in-jsx-scope": "off", // Desativa a exigência do React com JSX (React 17+)
    "react-native/no-inline-styles": "off", // Permite inline styles no React Native
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
