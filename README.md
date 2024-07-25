# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Point
- `node`でストーリーを自動生成するスクリプトを作成しました(`Storybook`が腐らないように)。
- VisualTestに`chromatic`を導入しました。

## Structure
- `atomic-design` を導入しました。 

```
.
├── bin
├── dist
│   └── assets
├── node_modules
├── public
└── src
    ├── Pages
    ├── assets
    ├── components
    │   ├── Atoms
    │   ├── Molecules
    │   ├── Organisms
    │   ├── assets
    │   └── stories
    ├── router
    ├── style
    └── types
```
