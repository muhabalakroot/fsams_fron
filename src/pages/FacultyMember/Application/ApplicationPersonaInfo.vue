<template>
  <TheH1>البيانات الشخصية</TheH1>

  <v-alert type="info">
    يمكنك الضعط على زر "حفظ" والخروج من النظام، ثم إكمال الطلب في وقت لاحق!
  </v-alert>
  <v-form ref="form">
    <v-container>
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
        <v-col cols="6"
          ><TheTextFieldLable>الكلية</TheTextFieldLable>
          <v-select
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="colleges"
            v-model="users.faculty"
          >
          </v-select
        ></v-col>

        <!-- //كلية العلوم -->
        <v-col cols="6" v-if="users.faculty == 1"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
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
        <v-col cols="6" v-if="users.faculty == 2"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
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
        <v-col cols="6" v-if="users.faculty == 3"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
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
        <v-col cols="6" v-if="users.faculty == 4"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
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
        <v-col cols="6" v-if="users.faculty == 5"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
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
        <v-col cols="6" v-if="users.faculty == 6"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
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

        <v-col cols="6"
          ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
          <v-select
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            :items="['لا يوجد أقسام بالوقت الحالي']"
            v-model="users.department"
          >
          </v-select
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="6"
          ><TheTextFieldLable>الجنسية</TheTextFieldLable>
          <v-select
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            v-model="users.nationality"
            :items="nationalityList"
          ></v-select
        ></v-col>

        <v-col cols="6" v-if="users.nationality == 1"
          ><TheTextFieldLable>الرقم الوطني</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.nationalNumber"
          >
          </v-text-field
        ></v-col>

        <v-col cols="6" v-if="users.nationality > 1 && users.nationality < 20"
          ><TheTextFieldLable>رقم جواز السفر</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="users.passport"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <div align="left">
        <v-divider></v-divider>
        <v-btn variant="text" class="mx-2"> حفظ </v-btn>
        <v-btn @click="goToAcadimec"> حفظ واستمرار </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";
export default {
  data() {
    return {
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
  },
  methods: {
    async goToAcadimec() {
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
