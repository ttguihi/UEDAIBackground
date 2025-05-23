import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "@/styles/reset.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//iconfont 引入 Css
import "./styles/icon/iconfont.css";


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router);
app.use(ElementPlus);
app.mount("#app");
