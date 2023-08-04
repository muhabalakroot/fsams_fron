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
      navigationDrawer: "FacultyMember",
    },
  },
  {
    path: "/ApplicationManagement",
    name: "ApplicationManagement",
    component: () => import("@/pages/FacultyMember/ApplicationManagement.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  {
    path: "/UserInfo",
    name: "UserInfo",
    component: () => import("@/pages/FacultyMember/UserInfo.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  {
    path: "/ApplicationPersonaInfo/:id",
    name: "ApplicationPersonaInfo",
    component: () =>
      import("@/pages/FacultyMember/Application/ApplicationPersonaInfo.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMemberApplication",
    },
  },
  {
    path: "/ApplicationAcadimecInfo/:id",
    name: "ApplicationAcadimecInfo",
    component: () =>
      import("@/pages/FacultyMember/Application/ApplicationAcadimecInfo.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMemberApplication",
    },
  },
  {
    path: "/ApplicationScientificPaper/:id",
    name: "ApplicationScientificPaper",
    component: () =>
      import(
        "@/pages/FacultyMember/Application/ApplicationScientificPaper.vue"
      ),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMemberApplication",
    },
  },
  {
    path: "/ApplicationAttachment/:id",
    name: "ApplicationAttachment",
    component: () =>
      import("@/pages/FacultyMember/Application/ApplicationAttachment.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMemberApplication",
    },
  },
  {
    path: "/applicationStatus/:id",
    name: "applicationStatus",
    component: () => import("@/pages/FacultyMember/applicationStatus.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
