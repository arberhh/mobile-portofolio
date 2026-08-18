const expoConfig = require("eslint-config-expo/flat");
const reactNative = require("eslint-plugin-react-native");

module.exports = [
  ...expoConfig,
  {
    plugins: {
      "react-native": reactNative,
    },
    rules: {
      "react-native/no-color-literals": "error",
      "react-native/no-inline-styles": "error",
      "react-native/no-raw-text": "error",
      "react-native/no-single-element-style-arrays": "error",
      "react-native/no-unused-styles": "error",
      "react-native/sort-styles": "error",
      "react-native/split-platform-components": "error",
    },
  },
  {
    ignores: ["dist/*", ".expo/*", "supabase/.temp/*"],
  },
];
