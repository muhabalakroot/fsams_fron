<template>
  <TheH1>إدارة الطلبات</TheH1>
  <v-alert type="info">
    من خلال هذه الصفحة يمكنك إنشاء طلبات جديدة والإطلاع على حالة طلابتك السابقة.
    لإنشاء طلب جديد اضغط على زر إنشاء طلب.</v-alert
  >

  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="desserts"
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

  <div class="d-flex justify-center">
    <v-btn @click="addApplication">إنشاء طلب</v-btn>
  </div>
</template>
<script>
export default {
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
      desserts: [
        {
          applicationType: "طلب ترقية ربيع 2023",
          createdAt: "5/1/2023",
          status: "قيد المعالجة",
          isSubmited: "نعم",
        },
        {
          applicationType: "طلب ترقية خريف 2019",
          createdAt: "5/8/2019",
          status: "مرفوض",
          isSubmited: "نعم",
        },
      ],
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / this.itemsPerPage);
    },
  },
  methods: {
    addApplication() {
      this.desserts.push({
        applicationType: "طلب ترقية خريف 2023",
        createdAt: new Date().toLocaleDateString(),
        status: "جديد",
        isSubmited: "لا",
      });
    },
  },
};
</script>
