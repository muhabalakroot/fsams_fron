<template>
  <v-navigation-drawer permanent location="right">
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        prepend-avatar="\uot_logo.png"
        :title="fullName"
        :subtitle="user.role_ar"
      ></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" v-model:selected="selectedItem" @click="navigate">
      <v-list-item
        :active="$route.name === 'Main'"
        color="primary"
        prepend-icon="mdi-home-city"
        title="الصفحة الرئيسية"
        value="Main"
      ></v-list-item>
      <v-list-item
        v-if="user.currentDegree !== 'أستاذ'"
        :active="
          $route.name === 'ApplicationManagement' ||
          $route.name === 'applicationStatus'
        "
        color="primary"
        prepend-icon="mdi-note-edit-outline"
        title="إدارة الطلبات"
        value="Application Management"
      ></v-list-item>
      <v-list-item
        :active="$route.name === 'UserInfo'"
        color="primary"
        prepend-icon="mdi-account-outline"
        title="البيانات الشخصية"
        value="User Info"
      ></v-list-item>

      <v-divider class="ma-2"></v-divider>

      <v-list-item
        color="primary"
        prepend-icon="mdi-logout"
        title="تسجيل الخروج"
        @click="logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";

export default {
  data() {
    return {
      user: null,
      selectedItem: null,
    };
  },
  computed: {
    ...mapState(useUsersStore, ["users"]),
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    },
    navigate() {
      if (this.selectedItem == "Main") this.$router.push({ name: "Main" });
      if (this.selectedItem == "Application Management")
        this.$router.push({ name: "ApplicationManagement" });
      if (this.selectedItem == "User Info")
        this.$router.push({ name: "UserInfo" });
    },
    initialize() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
  },
  created() {
    this.initialize();
  },
};
</script>
