import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "@/stores/authStore";
import { useCookie } from "@/services/useCookies";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = () => {
    return useCookie("isAuthenticated").value;
  };
  const accessToken = useCookie("accessToken").value;
  if (to.meta.requiresAuth && !isAuthenticated() && !accessToken) {
    next("/login");
  } else {
    next();
  }
});

export default router;
