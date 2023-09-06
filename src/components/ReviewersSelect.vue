<template>
  <v-alert
    v-if="userRole == 'faculty-affairs-office' && user.isSubmitedByFAA == true"
    type="info"
    >في ما يلي قائمة باعضاء لجنة القييم تم اختيارها من قبل إدارة شؤون أعضاء هيئة
    التدريس.</v-alert
  >
  <v-data-table
    v-if="user.isSubmitedByFAA !== true || user.isSubmitedByFAO !== true"
    :headers="headers"
    :items="userRole == 'faculty-affairs-administration' ? reviewers : selected"
    item-value="id"
    class="elevation-1 mt-3"
    :show-select="userRole == 'faculty-affairs-administration' ? true : false"
    return-object
    v-model="selected"
  >
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
  <v-alert
    v-if="isSend && userRole == 'faculty-affairs-administration'"
    type="success"
    class="mt-2"
    >تم ارسال الطلب الى مكتب شؤون أعضاء التدريس بالكلية بنجاح ليقوم باحالتها الى
    لجنة التقييم. وستظهم النتائج هنا بعد أكمال التقييم من قبل اللجنة.</v-alert
  >
  <v-alert
    v-if="isSend && userRole == 'faculty-affairs-office'"
    type="success"
    class="mt-2"
    >تم ارسال الطلب الى لجنة التقييم بنجاح. وستظهم النتائج على حساب إدارة شؤون
    أعضاء هيئة التدريس بعد أكمال التقييم من قبل اللجنة.</v-alert
  >
  <div v-if="!isSend" align="left">
    <v-btn v-if="userRole == 'faculty-affairs-office'" @click="select"
      >ارسال الطلب الى لجنة التحكيم</v-btn
    >
    <v-btn
      v-if="
        userRole == 'faculty-affairs-administration' &&
        user.isSubmitedByFAA !== true &&
        user.isSubmitedByFAO !== true
      "
      @click="select"
      >ارسال الطلب الى القسم المختص</v-btn
    >
  </div>

  <v-data-table
    v-if="user.isSubmitedByFAO == true"
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
      user: null,
      isSend: false,
      selected: [
        {
          id: 3,
          name: "عزالدين شليبك",
          univercity: "جامعة النجم الساطع",
          degree: "أستاذ",
          generalMajor: "تقنيات إنترنت",
        },
        {
          id: 4,
          name: "مؤيد العكاري",
          univercity: "جامعة قاريونس",
          degree: "أستاذ",
          generalMajor: "هندسة كبيوتر",
        },
        {
          id: 5,
          name: "أسامة ساسي",
          univercity: "جامعة طرابلس",
          degree: "أستاذ",
          generalMajor: "تطوير برمجيات",
        },
      ],
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
    ...mapState(useApplyingStore, ["applyings"]),
    ...mapState(useUsersStore, ["userRole"]),

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
      this.user = this.applyings[0];
      this.reviewers = this.applyings[0].reviewers;
      console.log(this.reviewers);
    },
  },
  created() {
    this.initialize();
  },
};
</script>
