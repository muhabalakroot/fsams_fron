<template>
  <TheH1>البيانات الشخصية</TheH1>

  <v-alert type="info">
    يمكنك الضعط على زر "حفظ" والخروج من النظام، ثم إكمال الطلب في وقت لاحق!
  </v-alert>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="3">
          <TheTextFieldLable
            >الاسم الأول<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.firstName"
          >
          </v-text-field>
        </v-col>
        <v-col cols="3"
          ><TheTextFieldLable
            >الاسم الأب<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.fatherName"
          >
          </v-text-field
        ></v-col>
        <v-col cols="3"
          ><TheTextFieldLable>الاسم الجد</TheTextFieldLable>
          <v-text-field v-model="user.grandeFatherName"> </v-text-field
        ></v-col>
        <v-col cols="3"
          ><TheTextFieldLable
            >اللقب<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.lastName"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="6"
          ><TheTextFieldLable
            >الكلية<span style="color: red">*</span></TheTextFieldLable
          >
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="value"
            :items="colleges"
            v-model="user.faculty"
          >
          </v-select
        ></v-col>

        <!-- //كلية العلوم -->
        <v-col cols="6" v-if="user.faculty == 'كلية العلوم'"
          ><TheTextFieldLable
            >القسم العلمي<span style="color: red">*</span></TheTextFieldLable
          >
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الهندسة -->
        <v-col cols="6" v-if="user.faculty == 'كلية الهندسة'"
          ><TheTextFieldLable
            >القسم العلمي<span style="color: red">*</span></TheTextFieldLable
          >
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الفنون -->
        <v-col cols="6" v-if="user.faculty == 'كلية الفنون'"
          ><TheTextFieldLable
            >القسم العلمي<span style="color: red">*</span></TheTextFieldLable
          >
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية اللغات -->
        <v-col cols="6" v-if="user.faculty == 'كلية اللغات'"
          ><TheTextFieldLable
            >القسم العلمي<span style="color: red">*</span></TheTextFieldLable
          >
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الزراعة -->
        <v-col cols="6" v-if="user.faculty == 'كلية الزراعة'"
          ><TheTextFieldLable
            >القسم العلمي<span style="color: red">*</span></TheTextFieldLable
          >
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- كليتنا الغالية -->
        <v-col cols="6" v-if="user.faculty == 'كلية تقنية المعلومات'"
          ><TheTextFieldLable
            >القسم العلمي<span style="color: red">*</span></TheTextFieldLable
          >
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
            v-model="user.department"
          >
          </v-select
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="6"
          ><TheTextFieldLable
            >الجنسية<span style="color: red">*</span></TheTextFieldLable
          >
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            v-model="user.nationality"
            :items="nationalityList"
          ></v-select
        ></v-col>

        <v-col cols="6" v-if="user.nationality == 1"
          ><TheTextFieldLable
            >الرقم الوطني<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.nationalNumber"
          >
          </v-text-field
        ></v-col>

        <v-col cols="6" v-if="user.nationality > 1 && user.nationality < 20"
          ><TheTextFieldLable>رقم جواز السفر</TheTextFieldLable>
          <v-text-field
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.passport"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <div align="left">
        <v-divider></v-divider>
        <v-btn
          :loading="isLoading"
          :disabled="isLoading"
          variant="text"
          class="mx-2"
          @click="save"
        >
          حفظ
        </v-btn>
        <v-btn
          @click="goToAcadimec"
          :loading="isLoadingAndGO"
          :disabled="isLoadingAndGO"
        >
          حفظ واستمرار
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { mapState } from "pinia";
import swal from "sweetalert";
export default {
  data() {
    return {
      isLoading: false,
      isLoadingAndGO: false,
      user: null,
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
    ...mapState(useApplyingStore, ["applyings"]),
  },
  methods: {
    async goToAcadimec() {
      const { valid } = await this.$refs.form.validate();
      this.isLoadingAndGO = true;
      setTimeout(() => {
        if (valid)
          this.$router.push({
            name: "ApplicationAcadimecInfo",
            params: this.$route.params.id,
          });
        this.isLoadingAndGO = false;
      }, 1500);
    },
    save() {
      this.isLoading = true;
      setTimeout(() => {
        swal({
          title: "تم الحفظ",
          icon: "success",
          button: null,
          timer: 1000,
        });
        this.isLoading = false;
      }, 1500);
    },
    initialize() {
      this.user = JSON.parse(localStorage.getItem("apply"));
    },
  },
  created() {
    this.initialize();
  },
};
</script>
