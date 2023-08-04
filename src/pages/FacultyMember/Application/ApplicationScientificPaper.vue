<template>
  <TheH1>الإنتاج العلمي</TheH1>

  <v-alert type="warning">
    الانتاج العلمي يجب أن يكون صادر بعد تاريخ أخر ترقية. ويجب أيضاً أن لا يكون
    مستل من رسالة الماجيستير أو أطروحة الدكتوره.
  </v-alert>

  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="scientificPaper"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1 mt-2"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.columns.scientificPaperTitle }}</td>
        <td>{{ item.columns.publisher }}</td>
        <td>{{ item.columns.dateOfpublishing }}</td>
        <td>
          <v-btn><v-icon icon="mdi-pencil-outline"></v-icon></v-btn>
        </td>
      </tr>
    </template>
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </template>
  </v-data-table>

  <NewScientificPaperDialog class="ma-2"></NewScientificPaperDialog>
</template>
<script>
import NewScientificPaperDialog from "@/components/Dialogs/NewScientificPaperDialog.vue";

import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";
export default {
  components: {
    NewScientificPaperDialog,
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      headers: [
        {
          align: "start",
          key: "scientificPaperTitle",
          title: "عنوان الانتاج العلمي",
        },
        { title: "حهة النشر", key: "publisher" },
        { title: "تاريخ النشر", key: "dateOfpublishing" },
        { title: "إجراءات", key: "id" },
      ],
    };
  },
  computed: {
    ...mapState(useUsersStore, ["scientificPaper"]),
    pageCount() {
      return Math.ceil(this.scientificPaper.length / this.itemsPerPage);
    },
  },
  mounted() {
    console.log(this.scientificPaper);
  },
};
</script>
