import Vue from "vue";
import VueRouter from "vue-router";

import defaultRoutes from "../views/default/router";
import sampleRoutes from "../views/sample/router";

const baseRoutes = [];

const routes = baseRoutes.concat(defaultRoutes, sampleRoutes);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
