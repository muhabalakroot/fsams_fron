<template>
  <TheH1>البيانات الأكاديمية</TheH1>

  <v-alert type="info">
    يمكنك الضعط على زر "حفظ" والخروج من النظام، ثم إكمال الطلب في وقت لاحق!
  </v-alert>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>المؤهل العلمي</TheTextFieldLable>
          <v-select
            v-model="users.qualification"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="['ماجيستير', 'دكتوراه']"
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
              'محاضر مساعد',
              'محاضر',
              'أستاذ مساعد',
              'أستاذ مشارك',
              'أستاذ',
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

      <v-divider></v-divider>

      <div align="left">
        <v-btn variant="text" class="mx-2"> حفظ </v-btn>
        <v-btn @click="validate"> حفظ واستمرار </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useUsersStore, ["users"]),
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid)
        this.$router.push({
          name: "ApplicationScientificPaper",
          params: this.$route.params.id,
        });
    },
  },
};
</script>
