import { createRouter, createWebHistory } from "vue-router";
import front from "@/layouts/front.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: front,
      redirect: "front",
      children: [
        {
          path: "/front",
          name: "front",
          component: () => import("@/views/front/home/index.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
