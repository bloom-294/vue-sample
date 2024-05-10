import { createApp } from "vue";
import router from "./router/index";
import "./style.css";
import App from "./App.vue";
import { inject } from "@vercel/analytics";

createApp(App).use(router).mount("#app");
inject();
