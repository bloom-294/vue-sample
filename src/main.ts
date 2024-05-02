import { createApp } from "vue"
import router from "./router/index"
import "./style.css"
import App from "./App.vue"
// import Sweetalert2 from 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App).use(router).mount("#app")
// App.use(Sweetalert2);
