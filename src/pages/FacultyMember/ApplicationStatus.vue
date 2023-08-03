<template>
  <TheH1>حالة طلبك</TheH1>
  <v-alert type="info"
    >لا يمكن التعديل في البيانات الشخصية، في حالة وجود خطأ، الرجاء التواصل مع
    رئيس قسمك العلمي.</v-alert
  >
  <v-container>
    <v-stepper alt-labels hide-actions :items="['Step 1', 'Step 2', 'Step 3']">
      <template v-slot:item.1>
        <v-card title="Step One" flat>...</v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Step Two" flat>...</v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Step Three" flat>...</v-card>
      </template>
    </v-stepper>
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
