<template>
  <v-form ref="form">
    <v-container>
      <TheH1>البيانات الشخصية</TheH1>
      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>الاسم الأول</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.firstName"
          >
          </v-text-field>
        </v-col>
        <v-col cols="4"
          ><TheTextFieldLable>الاسم الأب</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.fatherName"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>اللقب</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.lastName"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>الكلية</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="colleges"
            v-model="users.faculty"
          >
          </v-select
        ></v-col>

        <!-- //كلية العلوم -->
        <v-col cols="4" v-if="users.faculty == 1"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="[
              'قسم الرياضيات',
              'قسم علم الحيوان',
              'قسم الفيزياء',
              'قسم الكيمياء',
              'قسم علم النبات',
              'قسم الجيولوجيا',
              'قسم علوم الحاسب الآلي',
              'قسم الإحصاء',
            ]"
            v-model="users.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الهندسة -->
        <v-col cols="4" v-if="users.faculty == 2"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="[
              'قسم الهندسة الكهربائية والالكترونية',
              'قسم الهندسة الميكانيكية والصناعية',
              'قسم الهندسة الكيميائية',
              'قسم هندسة العمارة والتخطيط العمراني',
              'قسم هندسة النفط',
              'قسم الهندسة الجيولوجية',
              'قسم هندسة التعدين',
              'قسم الهندسة النووية',
              'قسم هندسة الحاسب الآلي',
              'قسم هندسة المواد والمعادن',
              'قسم الهندسة البحرية والمنصات العائمة',
              'قسم هندسة الطيران',
              'قسم الهندسة المدنية',
              'قسم الدراسة والامتحانات والمرحلة العامة',
              'قسم الهندسة الطبية',
              'قسم الإدارة الهندسية',
            ]"
            v-model="users.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الفنون -->
        <v-col cols="4" v-if="users.faculty == 3"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="[
              'قسم الفنون المرئية',
              'قسم الفنون الدرامية',
              'قسم التصميم الداخلي',
              'قسم الفنون الموسيقية',
              'قسم الفنون الجميلة والتطبيقية',
            ]"
            v-model="users.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية اللغات -->
        <v-col cols="4" v-if="users.faculty == 4"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="[
              'قسم اللغة الإنجليزية',
              'قسم اللغة العربية',
              'قسم اللغة الاسبانية',
              'قسم اللغات الأفروآسيوية',
              'قسم اللغة الإيطالية',
              'قسم الترجمة والتعريب',
              'المرحلة العامة',
              'قسم اللغة الفرنسية',
            ]"
            v-model="users.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الزراعة -->
        <v-col cols="4" v-if="users.faculty == 5"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="[
              'قسم الاقتصاد الزراعي',
              'قسم الزراعات المائية',
              'قسم المراعي والغابات',
              'قسم اقتصاد المنزلي',
              'قسم المحاصيل الزراعية',
              'قسم الهندسة الزراعية',
              'قسم البستنة',
              'قسم وقاية النبات',
              'قسم التربة والمياه',
              'قسم الانتاج الحيواني',
              'قسم علوم وتقنية الاغذية',
            ]"
            v-model="users.department"
          >
          </v-select
        ></v-col>

        <!-- كليتنا الغالية -->
        <v-col cols="4" v-if="users.faculty == 6"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="[
              'قسم هندسة البرمجيات',
              'قسم الشبكات',
              'قسم نظم المعلومات',
              'قسم الحوسبة المتنقلة',
              'قسم تقنيات الإنترنت',
              'قسم المرحلة العامة',
            ]"
            v-model="users.department"
          >
          </v-select
        ></v-col>

        <v-col cols="4"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="['لا يوجد أقسام بالوقت الحالي']"
            v-model="users.department"
          >
          </v-select
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>الجنسية</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            v-model="users.nationality"
            :items="nationalityList"
          ></v-select
        ></v-col>

        <v-col cols="4" v-if="users.nationality == 1"
          ><TheTextFieldLable>الرقم الوطني</TheTextFieldLable>
          <v-text-field
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.nationalNumber"
          >
          </v-text-field
        ></v-col>

        <v-col cols="4" v-if="users.nationality > 1 && users.nationality < 20"
          ><TheTextFieldLable>رقم جواز السفر</TheTextFieldLable>
          <v-text-field
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.passport"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <!-- البيانات الاكاديمية -->
      <TheH1>البيانات الأكاديمية</TheH1>

      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>المؤهل العلمي</TheTextFieldLable>
          <v-select
            v-model="users.qualification"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="[
              { id: 1, value: 'ماجيستير' },
              { id: 2, value: 'دكتوراه' },
            ]"
          >
          </v-select>
        </v-col>
        <v-col cols="4"
          ><TheTextFieldLable>التخصص</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.generalMajor"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>التخصص الدقيق</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.exaxtMajor"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>الجامعة</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.univercity"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>البلد</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.country"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>المدينة</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.city"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>تاريخ الحصول عليه</TheTextFieldLable>
          <v-text-field
            type="date"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.dateOfObtaining"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>الدرجة العلمية الحالية</TheTextFieldLable>
          <v-select
            v-model="users.currentDegree"
            item-title="value"
            item-value="id"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="[
              { id: 1, value: 'محاضر مساعد' },
              { id: 2, value: 'محاضر' },
              { id: 3, value: 'أستاذ مساعد' },
              { id: 4, value: 'أستاذ مشارك' },
              { id: 5, value: 'أستاذ' },
            ]"
          >
          </v-select>
        </v-col>
        <v-col cols="4"
          ><TheTextFieldLable>رقم قرار الترقية</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.promotoinDegreeNumber"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>تاريخ قرار الترقية</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            type="date"
            v-model="users.degreeDateOfObtaing"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>قرار الترقية</TheTextFieldLable>
          <v-file-input
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            hint="الرجاء رفع صورة من قرار الترقية"
            v-model="users.promotoinDegreeFile"
          ></v-file-input>
        </v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <TheH1>الإنتاج العلمي</TheH1>

      <v-data-table
        hover
        :loading="false"
        no-data-text="إضغط على إضافة إنتاج علمي"
        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
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
              <v-btn color="error" class="mx-2"
                ><v-icon
                  icon="mdi-delete-outline"
                  @click="deletePaper(item.columns.id)"
                ></v-icon
              ></v-btn>
            </td>
          </tr>
        </template>
        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </template>
      </v-data-table>

      <v-divider class="ma-2"></v-divider>

      <TheH1>المرفقات</TheH1>

      <v-data-table
        hover
        v-model:page="page"
        :headers="attachmentHeader"
        :items="attachments"
        :items-per-page="itemsPerPage"
        hide-default-footer
        no-data-text="الرجاء الانتظار قليلاً"
        class="elevation-1 mt-2"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.columns.name }}</td>
            <td>{{ item.columns.description }}</td>
            <td>
              <v-icon
                v-if="item.columns.file.length > 0"
                color="success"
                :icon="item.columns.isUploaded"
              ></v-icon>
            </td>
            <td>
              <v-btn class="mx-2 my-1"
                ><v-icon
                  icon="mdi-tray-arrow-up"
                  @click="handleFileImport"
                ></v-icon
                ><v-file-input
                  ref="uploader"
                  class="d-none"
                  v-model="selectedFile"
                  @change="onFileChanged($event, item.columns.id)"
                ></v-file-input
              ></v-btn>
              <v-btn color="error" class="mx-2 my-1"
                ><v-icon icon="mdi-delete-outline"></v-icon
              ></v-btn>
            </td>
          </tr>
        </template>
        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </template>
      </v-data-table>

      <div align="left">
        <v-divider></v-divider>
        <ApplicationConfirmatiom></ApplicationConfirmatiom>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { useUsersStore } from "@/store/user";
import ApplicationConfirmatiom from "@/components/Dialogs/ApplicationConfirmatiom.vue";
import { mapState, mapActions, mapWritableState } from "pinia";
export default {
  components: {
    ApplicationConfirmatiom,
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      attachmentHeader: [
        {
          align: "start",
          key: "name",
          title: "بيان",
          sortable: false,
        },
        { title: "وصف", key: "description" },
        { title: "تم", key: "isUploaded" },
        { title: "إجراءات", key: "file", align: "start" },
        { key: "id" },
      ],
      headers: [
        {
          align: "start",
          key: "scientificPaperTitle",
          title: "عنوان الانتاج العلمي",
          sortable: false,
        },
        { title: "جهة النشر", key: "publisher" },
        { title: "تاريخ النشر", key: "dateOfpublishing" },
        { title: "إجراءات", key: "id" },
      ],
      colleges: [
        { id: 1, value: "كلية العلوم" },
        { id: 2, value: "كلية الهندسة" },
        { id: 3, value: "كلية الفنون" },
        { id: 4, value: "كلية اللغات" },
        { id: 5, value: "كلية الزراعة" },
        { id: 6, value: "كلية تقنية المعلومات" },
        { id: 7, value: "كلية الآداب" },
        { id: 8, value: "كلية الصيدلة" },
        { id: 9, value: "كلية الطب البشري" },
        { id: 10, value: "كلية الطب البيطري" },
        { id: 11, value: "كلية طب وجراحة الفم والأسنان" },
        { id: 12, value: "كلية التقنية الطبية" },
        { id: 13, value: "كلية الإقتصاد والعلوم السياسية" },
        { id: 14, value: "كلية التربية البدنية وعلوم الرياضة" },
        { id: 15, value: "كلية التربية/ قصر بن غشير" },
        { id: 16, value: "كلية التربية طرابلس" },
        { id: 17, value: "كلية التمريض" },
        { id: 18, value: "كلية التربية جنزور" },
        { id: 19, value: "كلية القانون" },
        { id: 20, value: "كلية العلوم الشرعية - تاجوراء" },
        { id: 21, value: "كلية العلوم الشرعية - سوق الجمعة" },
        { id: 22, value: "كلية الإقتصاد والإدارة تاجوراء" },
        { id: 23, value: "المرحلة التمهيدية" },
        { id: 24, value: "كلية الإعلام" },
      ],
      nationalityList: [
        { id: 1, value: "ليبي" },
        { id: 2, value: "فلسطيني" },
        { id: 3, value: "لبناني" },
        { id: 4, value: "سوري" },
        { id: 5, value: "أردني" },
        { id: 6, value: "سعودي" },
        { id: 7, value: "إماراتي" },
        { id: 8, value: "قطري" },
        { id: 9, value: "كويتي" },
        { id: 10, value: "عُماني" },
        { id: 11, value: "بحريني" },
        { id: 12, value: "مصري" },
        { id: 13, value: "تونسي" },
        { id: 14, value: "جزائري" },
        { id: 15, value: "مغربي" },
        { id: 16, value: "يمني" },
        { id: 17, value: "موريتاني" },
        { id: 18, value: "صومالي" },
        { id: 19, value: "جيبوتي" },
      ],
    };
  },
  computed: {
    ...mapState(useUsersStore, ["users"]),
    ...mapState(useUsersStore, ["scientificPaper"]),
    ...mapWritableState(useUsersStore, ["attachments"]),
    pageCount() {
      return Math.ceil(this.scientificPaper.length / this.itemsPerPage);
    },
  },
  methods: {
    ...mapActions(useUsersStore, ["deleteScientificPapers"]),
    deletePaper(id) {
      this.deleteScientificPapers(id);
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid)
        this.$router.push({
          name: "ApplicationAcadimecInfo",
          params: this.$route.params.id,
        });
    },
  },
};
</script>
