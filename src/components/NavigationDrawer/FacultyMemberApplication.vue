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
        prepend-icon="mdi-account-outline"
        title="البيانات الشخصية"
        value="ApplicationPersonalInfo"
      ></v-list-item>
      <v-list-item
        color="primary"
        prepend-icon="mdi-school-outline"
        title="البيانات الاكاديمية"
        value="ApplicationAcadimecInfo"
      ></v-list-item>
      <v-list-item
        color="primary"
        prepend-icon="mdi-note-multiple-outline"
        title="الإنتاج العلمي"
        value="ApplicationScientificPaper"
      ></v-list-item>
      <v-list-item
        color="primary"
        prepend-icon="mdi-paperclip"
        title="المرفقات"
        value="ApplicationAttachment"
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
      if (this.selectedItem == "Application Management")
        this.$router.push({ name: "ApplicationManagement" });

      if (this.selectedItem == "ApplicationPersonalInfo")
        this.$router.push({ name: "ApplicationPersonaInfo" });

      if (this.selectedItem == "ApplicationAcadimecInfo")
        this.$router.push({ name: "ApplicationAcadimecInfo" });

      if (this.selectedItem == "ApplicationScientificPaper")
        this.$router.push({ name: "ApplicationScientificPaper" });

      if (this.selectedItem == "ApplicationAttachment")
        this.$router.push({ name: "ApplicationAttachment" });
    },
  },
};
</script>
