<template>
  <TheH1>البيانات الشخصية</TheH1>
  <v-alert type="info">
    يمكن التعديل في البيانات الشخصية من هذه الصفحة.</v-alert
  >
  <v-container>
    <v-row>
      <v-col cols="4">
        <TheTextFieldLable>الاسم الأول</TheTextFieldLable>
        <v-text-field :readonly="editable" v-model="user.firstName">
        </v-text-field>
      </v-col>
      <v-col cols="4"
        ><TheTextFieldLable>الاسم الأب</TheTextFieldLable>
        <v-text-field :readonly="editable" v-model="user.fatherName">
        </v-text-field
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>اللقب</TheTextFieldLable>
        <v-text-field :readonly="editable" v-model="user.lastName">
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
          item-value="value"
          :items="colleges"
          :readonly="editable"
          v-model="user.faculty"
        >
        </v-select
      ></v-col>

      <!-- //كلية العلوم -->
      <v-col cols="4" v-if="user.faculty == 'كلية العلوم'"
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
          :readonly="editable"
          v-model="user.department"
        >
        </v-select
      ></v-col>

      <!-- //كلية الهندسة -->
      <v-col cols="4" v-if="user.faculty == 'كلية الهندسة'"
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
          :readonly="editable"
          v-model="user.department"
        >
        </v-select
      ></v-col>

      <!-- //كلية الفنون -->
      <v-col cols="4" v-if="user.faculty == 'كلية الفنون'"
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
          :readonly="editable"
          v-model="user.department"
        >
        </v-select
      ></v-col>

      <!-- //كلية اللغات -->
      <v-col cols="4" v-if="user.faculty == 'كلية اللغات'"
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
          :readonly="editable"
          v-model="user.department"
        >
        </v-select
      ></v-col>

      <!-- //كلية الزراعة -->
      <v-col cols="4" v-if="user.faculty == 'كلية الزراعة'"
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
          :readonly="editable"
          v-model="user.department"
        >
        </v-select
      ></v-col>

      <!-- كليتنا الغالية -->
      <v-col cols="4" v-if="user.faculty == 'كلية تقنية المعلومات'"
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
          :readonly="editable"
          v-model="user.department"
        >
        </v-select
      ></v-col>

      <v-col cols="4"
        ><TheTextFieldLable>المؤهل العلمي</TheTextFieldLable>
        <v-select
          v-model="user.qualification"
          :readonly="editable"
          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
          item-title="value"
          item-value="id"
          :items="['ماجيستير', 'دكتوراه']"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row> </v-row>
    <v-row>
      <v-col cols="4"
        ><TheTextFieldLable>الدرجة العلمية الحالية</TheTextFieldLable>
        <v-select
          :readonly="editable"
          v-model="user.currentDegree"
          item-title="value"
          item-value="id"
          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
          :items="[
            'محاضر مساعد',
            'محاضر',
            'أستاذ مساعد',
            'أستاذ مشارك',
            'أستاذ',
          ]"
        >
        </v-select
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>تاريخ الحصول عليها</TheTextFieldLable>
        <v-text-field
          :readonly="editable"
          v-model="user.promotionDegreeNumberDate"
        >
        </v-text-field
      ></v-col>
    </v-row>
    <div v-if="userRole == 'department-head'" align="left">
      <v-divider></v-divider>
      <v-btn
        v-if="!editable"
        @click="editable = !editable"
        variant="text"
        class="mx-2"
      >
        إلغاء
      </v-btn>
      <v-btn v-if="!editable" @click="editable = !editable" class="mx-2">
        حفظ
      </v-btn>
      <v-btn v-if="editable" @click="editable = !editable">تعديل</v-btn>
    </div>
  </v-container>
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
      user: {
        firstName: "رضوان",
        fatherName: "عبد الله",
        lastName: "حسين",
        currentDegree: "أستاذ مشارك",
        faculty: "كلية تقنيةالمعلومات",
        department: "قسم هندسة البرمجيات",
        qualification: "دكتوراه",
        promotionDegreeNumberDate: "2019-05-30",
      },
      editable: true,
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
  },
};
</script>
