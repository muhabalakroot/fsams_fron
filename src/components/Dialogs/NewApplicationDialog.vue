<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> إنشاء طلب </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <TheH1>إنشاء طلب</TheH1>
          <v-alert type="info">يمكنك الاختيار من الطلبات المتاحة.</v-alert>
        </v-card-title>
        <v-card-text>
          <ThaTextFieldLable>الطلبات المتاحة</ThaTextFieldLable>
          <v-select :items="['طلب ترقية خريف 2024']"></v-select>
        </v-card-text>
        <div align="left">
          <v-divider></v-divider>
          <v-btn variant="text" @click="dialog = false" class="mx-2">
            إلغاء
          </v-btn>
          <v-btn @click="addNewApplication"> إنشاء </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { useAppicationsStore } from "@/store/applications";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    ...mapActions(useAppicationsStore, ["addApplication"]),
    addNewApplication() {
      this.addApplication({
        applicationId: "3",
        applicationType: "طلب ترقية خريف 2024",
        createdAt: new Date().toLocaleDateString(),
        status: "جديد",
        isSubmited: "لا",
      });
      this.dialog = false;
    },
  },
};
</script>
