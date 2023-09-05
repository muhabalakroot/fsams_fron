<template>
  <v-data-table
    :headers="headers"
    :items="reviewers"
    item-value="id"
    class="elevation-1 mt-3"
    show-select
    return-object
    v-model="selected"
  >
    <!-- <template v-slot:item.data-table-select="{ on, props }">
      <v-simple-checkbox
        color="green"
        v-bind="props"
        v-on="on"
      ></v-simple-checkbox>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td></td>
        <td>
          {{ item.columns.name }}
        </td>
        <td>{{ item.columns.univercity }}</td>
        <td>
          {{ item.columns.degree }}
        </td>
        <td>
          {{ item.columns.generalMajor }}
        </td>
        <td>
          <div v-if="userRole == 'department-head'">
            <v-btn class="ma-1"
              ><v-icon
                @click="editItem(item.raw)"
                icon="mdi-pencil-outline"
              ></v-icon
            ></v-btn>
            <v-btn color="error" class="ma-1"
              ><v-icon
                icon="mdi-delete-outline"
                @click="deleteItem(item.raw)"
              ></v-icon
            ></v-btn>
          </div>
        </td>
      </tr>
    </template> -->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>لجنة التقييم</v-toolbar-title>
      </v-toolbar>
    </template>

    <template v-slot:bottom>
      <div></div>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
  <v-alert v-if="isSend" type="success" class="mt-2"
    >تم ارسال الطلب الى لجنة التحكيم بنجاح. وستظهم النتائج هنا بعد أكمال التقييم
    من قبل اللجنة.</v-alert
  >
  <div v-if="!isSend" align="left">
    <v-btn @click="select">ارسال الطلب الى لجنة التحكيم</v-btn>
  </div>

  <v-data-table
    v-if="isSend"
    :headers="header"
    :items="selected"
    item-value="id"
    class="elevation-1 mt-3"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>
          {{ item.columns.name }}
        </td>
        <td>{{ item.columns.univercity }}</td>
        <td>
          {{ item.columns.degree }}
        </td>
        <td>
          {{ item.columns.generalMajor }}
        </td>
        <td>
          <v-btn class="ma-1"
            ><v-icon @click="editItem(item.raw)" icon="mdi-eye-outline"></v-icon
          ></v-btn>
        </td>
      </tr>
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title> نتائج لجنة التقييم</v-toolbar-title>
      </v-toolbar>
    </template>

    <template v-slot:bottom>
      <div></div>
    </template>
  </v-data-table>
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { useUsersStore } from "@/store/user";
import { mapWritableState } from "pinia";
import { mapState } from "pinia";
import { mapActions } from "pinia";

import ReviewerCRUD from "@/components/ReviewersCRUD.vue";

export default {
  components: {
    ReviewerCRUD,
  },
  data() {
    return {
      isSend: false,
      selected: [],
      reviewers: null,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          align: "start",
          key: "name",
          title: "اسم المحكم",
          sortable: false,
        },
        { title: "الجامعة التابع لها", key: "univercity" },
        { title: "الدرجة العلمية", key: "degree" },
        { title: "التخصص", key: "generalMajor" },
      ],
      header: [
        {
          align: "start",
          key: "name",
          title: "اسم المحكم",
          sortable: false,
        },
        { title: "الجامعة التابع لها", key: "univercity" },
        { title: "الدرجة العلمية", key: "degree" },
        { title: "التخصص", key: "generalMajor" },
        { title: "الإجراءات", key: "id" },
      ],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        univercity: "",
        degree: "",
        generalMajor: "",
      },
      defaultItem: {
        id: "",
        name: "",
        univercity: "",
        degree: "",
        generalMajor: "",
      },
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
    ...mapWritableState(useApplyingStore, ["applyings"]),
    formTitle() {
      return this.editedIndex === -1 ? "إضافة محكم" : "تعديل البيانات";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    ...mapActions(useApplyingStore, ["addSselectedReviewers"]),
    select() {
      this.isSend = !this.isSend;

      this.addSselectedReviewers(this.selected);
    },
    editItem(item) {
      this.editedIndex = this.reviewers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.reviewers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.reviewers.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        if (this.editedIndex > -1) {
          Object.assign(this.reviewers[this.editedIndex], this.editedItem);
        } else {
          this.reviewers.push(this.editedItem);
        }
        this.close();
      }
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.$router.push({
          name: "ApplicationAttachment",
          id: this.$route.params.id,
        });
      }
    },
    initialize() {
      this.reviewers = this.applyings[0].reviewers;
      console.log(this.reviewers);
    },
  },
  created() {
    this.initialize();
  },
};
</script>
