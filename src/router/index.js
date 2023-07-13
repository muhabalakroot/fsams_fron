// Composables
import { createRouter, createWebHistory } from "vue-router";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/LoginPage.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  {
    path: "/ForgotPassword",
    name: "forgotPassword",
    component: () => import("@/pages/ForgotPasswordPage.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  {
    path: "/ResetPassword/:resetToken",
    name: "resetPassword",
    component: () => import("@/pages/ResetPasswordPage.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  {
    path: "/Home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/pages/HomePage.vue"),
    meta: {
      layout: AuthLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
