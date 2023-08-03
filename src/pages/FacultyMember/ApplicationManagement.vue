<template>
  <TheH1>إدارة الطلبات</TheH1>
  <v-alert type="info">
    من خلال هذه الصفحة يمكنك إنشاء طلبات جديدة والإطلاع على حالة طلابتك السابقة.
    لإنشاء طلب جديد اضغط على زر إنشاء طلب.</v-alert
  >

  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="applications"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </template>
  </v-data-table>

  <!-- <div class="d-flex justify-center">
    <v-btn @click="addApplication">إنشاء طلب</v-btn>
  </div> -->

  <NewApplicationDialog class="ma-2"></NewApplicationDialog>
</template>
<script>
import NewApplicationDialog from "@/components/Dialogs/NewApplicationDialog.vue";

import { mapState } from "pinia";

import { useAppicationsStore } from "@/store/applications";
export default {
  components: {
    NewApplicationDialog,
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      headers: [
        {
          align: "start",
          key: "applicationType",
          sortable: false,
          title: "نوع الطلب",
        },
        { title: "تاريخ الإنشاء", key: "createdAt" },
        { title: "الحالة", key: "status" },
        { title: "الإرسال", key: "isSubmited" },
      ],
    };
  },
  computed: {
    ...mapState(useAppicationsStore, ["applications"]),
    pageCount() {
      return Math.ceil(this.applications.length / this.itemsPerPage);
    },
  },
};
</script>
