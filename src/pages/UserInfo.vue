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
    <v-row> </v-row>
    <v-row>
      <v-col cols="4"
        ><TheTextFieldLable>الكلية</TheTextFieldLable>
        <v-text-field :readonly="editable" v-model="user.faculty">
        </v-text-field
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
        <v-text-field :readonly="editable" v-model="user.department">
        </v-text-field
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable>المؤهل العلمي</TheTextFieldLable>
        <v-text-field :readonly="editable" v-model="user.degree"> </v-text-field
      ></v-col>
    </v-row>
    <v-row>
      <v-col cols="4"
        ><TheTextFieldLable>الدرجة العلمية</TheTextFieldLable>
        <v-text-field
          :readonly="editable"
          v-model="user.currentDegree"
        ></v-text-field
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
      <v-btn v-if="!editable" class="mx-2"> حفظ </v-btn>
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
      editable: true,
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
  },
};
</script>
