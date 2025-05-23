import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";

export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/industryTrending/index.vue"),
  },
  {
    path: "/URsearch",
    name: "URsearch",
    component: () => import("@/views/layout/index.vue"),
  },
];
