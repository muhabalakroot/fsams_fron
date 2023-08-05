<template>
  <v-alert v-if="userRole == 'faculty-member'" type="success">
    لقد تم إرسال طلب بنجاح🎉. حظ موفق.
  </v-alert>
  <v-alert v-if="userRole == 'department-head'" type="success">
    لقد تم تسليم طلب بنجاح. شكراً لك.
  </v-alert>
  <div class="text-center pa-2">
    <v-img class="mx-auto" width="70" src="/uot_logo.png"></v-img>
    <div class="text-h5">جامعة طرابلس</div>
    <div class="text-h5">إدارة شؤون أعضاء هيئة التدريس</div>
  </div>
  <div class="pa-2">
    <div class="pb-2">
      تشكرك إدارة شؤون أعضاء هيئة التدريس على استخدام النظام. نأمل أن تكون قد
      حضيت بتجربة سلسة.
    </div>
  </div>
  <div align="left">
    <v-divider></v-divider>

    <v-btn @click="validate">الصفحة الرئيسية</v-btn>
  </div>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";

export default {
  data() {
    return {
      name: "د. رضوان حسين",
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
  },
  methods: {
    validate() {
      this.$router.push({ name: "Main" });
    },
  },
};
</script>
