import { createRouter, createWepHistory } from "vue-router";
import Home from "./Home";

export default createRouter({
  history: createWepHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
