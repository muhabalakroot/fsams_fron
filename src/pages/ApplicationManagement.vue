<template>
  <TheH1>إدارة الطلبات</TheH1>
  <v-alert type="info">
    من خلال هذه الصفحة يمكنك إنشاء طلبات جديدة والإطلاع على حالة طلابتك السابقة.
    لإنشاء طلب جديد اضغط على زر إنشاء طلب.</v-alert
  >

  <v-data-table
    hover
    v-model:page="page"
    :headers="headers"
    :items="application"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1 mt-2"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>
          {{ item.columns.applicationType }}
        </td>
        <td>{{ item.columns.createdAt }}</td>
        <td>{{ item.columns.status }}</td>
        <td>{{ item.columns.isSubmited }}</td>
        <td>
          <v-btn
            :loading="isLoading"
            :disabled="isLoading"
            v-if="item.columns.isSubmited == 'لا'"
            @click="openApplicationPage(item.columns.applicationId)"
            >فتح الطلب</v-btn
          ><v-btn
            :loading="isLoading"
            :disabled="isLoading"
            variant="text"
            @click="openStatusePage(item.columns.applicationId)"
            v-else
            >عرض الحالة</v-btn
          >
        </td>
      </tr>
    </template>
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </template>
  </v-data-table>

  <!-- <div class="d-flex justify-center">
    <v-btn @click="addApplication">إنشاء طلب</v-btn>
  </div> -->

  <NewApplicationDialog
    v-if="application.length == 0"
    class="ma-2"
  ></NewApplicationDialog>
</template>
<script>
import NewApplicationDialog from "@/components/Dialogs/NewApplicationDialog.vue";

import { mapState } from "pinia";
import { mapActions } from "pinia";

import { useAppicationsStore } from "@/store/applications";
export default {
  components: {
    NewApplicationDialog,
  },
  data() {
    return {
      application: null,
      isLoading: false,
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
        { title: "الإجراء", key: "applicationId" },
      ],
    };
  },
  computed: {
    ...mapState(useAppicationsStore, ["applications"]),
    pageCount() {
      return Math.ceil(this.applications.length / this.itemsPerPage);
    },
  },
  methods: {
    ...mapActions(useAppicationsStore, ["updateApplication"]),
    openStatusePage(id) {
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push({
          name: "applicationStatus",
          params: { id: id },
        });
        this.isLoading = false;
      }, 2000);
    },
    openApplicationPage(id) {
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push({
          name: "ApplicationPersonaInfo",
          params: { id: id },
        });
        this.isLoading = false;
      }, 2000);
    },
    init() {
      this.application = JSON.parse(localStorage.getItem("application"));
    },
  },
  created() {
    this.init();
  },
};
</script>
