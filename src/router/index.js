import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Join from "@/views/Join.vue";
import Login from "@/views/Login.vue";
import Cart from "@/views/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/join",
      component: Join,
    },

    {
      path: "/login",
      component: Login,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ],
});

export default router;
