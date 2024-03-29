import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes.js";

const router = new createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
