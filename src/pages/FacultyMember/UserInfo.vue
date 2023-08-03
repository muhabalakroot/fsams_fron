<template>
  <TheH1>البيانات الشخصية</TheH1>
  <v-alert type="info"
    >لا يمكن التعديل في البيانات الشخصية، في حالة وجود خطأ، الرجاء التواصل مع
    رئيس قسمك العلمي.</v-alert
  >
  <v-container>
    <v-row>
      <v-col cols="4">
        <TheTextFieldLable>الاسم الأول</TheTextFieldLable>
        <v-text-field readonly :value="user.firstName"> </v-text-field>
      </v-col>
      <v-col cols="4"
        ><TheTextFieldLable>الاسم الأب</TheTextFieldLable>
        <v-text-field readonly :value="user.fatherName"> </v-text-field
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>اللقب</TheTextFieldLable>
        <v-text-field readonly :value="user.lastName"> </v-text-field
      ></v-col>
    </v-row>
    <v-row> </v-row>
    <v-row>
      <v-col cols="4"
        ><TheTextFieldLable>الكلية</TheTextFieldLable>
        <v-text-field readonly :value="user.faculty"> </v-text-field
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
        <v-text-field readonly :value="user.department"> </v-text-field
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>المؤهل العلمي</TheTextFieldLable>
        <v-text-field readonly :value="user.degree"> </v-text-field
      ></v-col>
    </v-row>
    <v-row>
      <v-col cols="4"
        ><TheTextFieldLable>الدرجة العلمية</TheTextFieldLable>
        <v-text-field readonly :value="user.currentDegree"></v-text-field
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>تاريخ الحصول عليها</TheTextFieldLable>
        <v-text-field readonly :value="user.promotionDegreeNumberDate">
        </v-text-field
      ></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      user: {
        firstName: "رضوان",
        fatherName: "عبد الله",
        lastName: "حسين",
        currentDegree: "أستاذ مشارك",
        faculty: "كلية تقنيةالمعلومات",
        department: "قسم هندسة البرمجيات",
        degree: "دكتوراة",
        promotionDegreeNumberDate: "2019-05-30",
      },
    };
  },
};
</script>
