// Composables
import { createRouter, createWebHistory } from "vue-router";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
// import { useUsersStore } from "@/store/user";

const routes = [
  //Authentication
  //login
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Authentication/Login.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  // forgotPassword
  {
    path: "/ForgotPassword",
    name: "forgotPassword",
    component: () => import("@/pages/Authentication/ForgotPassword.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  // ResetPassword
  {
    path: "/ResetPassword/:resetToken",
    name: "resetPassword",
    component: () => import("@/pages/Authentication/ResetPassword.vue"),
    meta: {
      layout: EmptyLayout,
      isAuth: true,
    },
  },
  // Main
  {
    path: "/Main",
    name: "Main",
    component: () => import("@/pages/Main.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  // ApplicationManagement
  {
    path: "/ApplicationManagement",
    name: "ApplicationManagement",
    component: () => import("@/pages/ApplicationManagement.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  // UserInfo
  {
    path: "/UserInfo",
    name: "UserInfo",
    component: () => import("@/pages/UserInfo.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  // Faculty Member
  // ApplicationPersonaInfo
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
  // ApplicationAcadimecInfo
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
  // ApplicationScientificPaper
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
  //ApplicationAttachment
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
  // ApplicationReview
  {
    path: "/ApplicationReview/:id",
    name: "ApplicationReview",
    component: () =>
      import("@/pages/FacultyMember/Application/ApplicationReview.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMemberApplication",
    },
  },
  // ApplicationSubmited
  {
    path: "/ApplicationSubmited",
    name: "ApplicationSubmited",
    component: () =>
      import("@/pages/FacultyMember/Application/ApplicationSubmited.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  // applicationStatus
  {
    path: "/applicationStatus/:id",
    name: "applicationStatus",
    component: () => import("@/pages/applicationStatus.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  // Head of Department
  // FacultyMembersManagment
  {
    path: "/FacultyMembersManagment",
    name: "FacultyMembersManagment",
    component: () =>
      import("@/pages/FacultyMembersManagement/FacultyMembersManagment"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  {
    path: "/FacultyMembersAccounts",
    name: "FacultyMembersAccounts",
    component: () =>
      import("@/pages/FacultyMembersManagement/FacultyMembersAccounts.vue"),
    meta: {
      layout: AuthLayout,
      navigationDrawer: "FacultyMember",
    },
  },
  {
    path: "/FacultyMembersApplicationsManagement",
    name: "FacultyMembersApplicationsManagement",
    component: () =>
      import(
        "@/pages/FacultyMembersManagement/FacultyMembersApplicationsManagement.vue"
      ),
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

// router.beforeEach((to, from, next) => {
//   const users = useUsersStore();

//   if (from.name === "Login" && users.userRole == "faculty-member")
//     next({ name: "Main" });
//   else if (from.name === "Login" && users.userRole == "department-head")
//     next({ name: "DHMain" });
//   else next();
// });

export default router;
