import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "@/styles/reset.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//iconfont 引入 Css
import "./styles/icon/iconfont.css";
const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
