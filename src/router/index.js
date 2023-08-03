// Composables
import { createRouter, createWebHistory } from "vue-router";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const routes = [
  //Authentication
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Authentication/Login.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  {
    path: "/ForgotPassword",
    name: "forgotPassword",
    component: () => import("@/pages/Authentication/ForgotPassword.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  {
    path: "/ResetPassword/:resetToken",
    name: "resetPassword",
    component: () => import("@/pages/Authentication/ResetPassword.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  //Faculty Member
  {
    path: "/Main",
    name: "Main",
    component: () => import("@/pages/FacultyMember/Main.vue"),
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: "/ApplicationManagement",
    name: "ApplicationManagement",
    component: () => import("@/pages/FacultyMember/ApplicationManagement.vue"),
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: "/UserInfo",
    name: "UserInfo",
    component: () => import("@/pages/FacultyMember/UserInfo.vue"),
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
