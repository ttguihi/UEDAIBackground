import { routes } from "./routes";
import { createRouter, createWebHistory } from "vue-router";

//创建路由器
const router = createRouter({
    //路由模式hash
    history: createWebHistory(),
    routes,
});

export default router;
