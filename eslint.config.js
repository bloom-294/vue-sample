import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [{ files: ["**/*.js"], languageOptions: { sourceType: "script" } }, { languageOptions: { globals: { ...globals.browser, ...globals.node } } }, pluginJs.configs.recommended, ...tseslint.configs.recommended, ...pluginVue.configs["flat/essential"]];
