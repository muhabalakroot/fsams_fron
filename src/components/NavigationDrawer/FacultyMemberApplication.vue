<template>
  <v-navigation-drawer permanent location="right">
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        prepend-avatar="\uot_logo.png"
        :title="name"
        :subtitle="scientificDegree"
      ></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" v-model:selected="selectedItem" @click="navigate">
      <v-list-item
        color="primary"
        prepend-icon="mdi-chevron-right"
        title="العودة لإدارة الطلبات"
        value="Application Management"
      ></v-list-item>

      <v-divider class="ma-2"></v-divider>

      <v-list-item
        color="primary"
        prepend-icon="mdi-account"
        title="البيانات الشخصية"
        value="User Info"
      ></v-list-item>
      <v-list-item
        color="primary"
        prepend-icon="mdi-school-outline"
        title="البيانات الاكاديمية"
        value="User Info"
      ></v-list-item>
      <v-list-item
        color="primary"
        prepend-icon="mdi-paperclip"
        title="المرفقات"
        value="User Info"
      ></v-list-item>

      <v-list-item
        color="primary"
        prepend-icon="mdi-note-search-outline"
        title="مراجعة الطلب"
        value="User Info"
      ></v-list-item>

      <!-- <v-divider class="ma-2"></v-divider> -->

      <!-- <v-list-item
        color="primary"
        prepend-icon="mdi-logout"
        title="تسجيل الخروج"
        @click="logout"
      ></v-list-item>  -->
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      name: "د. رضوان حسين",
      scientificDegree: "أستاذ مشارك",
      selectedItem: null,
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: "login" });
    },
    navigate() {
      if (this.selectedItem == "Main") this.$router.push({ name: "Main" });
      if (this.selectedItem == "Application Management")
        this.$router.push({ name: "ApplicationManagement" });
      if (this.selectedItem == "User Info")
        this.$router.push({ name: "UserInfo" });
    },
  },
};
</script>
