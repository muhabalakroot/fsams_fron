<template>
  <TheH1>الأوراق العليمة</TheH1>

  <v-alert type="warning">
    الانتاج العليمي يجب أن يكون صادر بعد تاريخ أخر ترقية. ويجب أيضاً أن لا يكون
    مستل من رسالة الماجيستير أو أطروحة الدكتوره.
  </v-alert>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>نوع الائنتاج العلمي</TheTextFieldLable>
          <!-- <v-select
            v-model="user.qualification"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="[
              { id: 1, value: 'ماجيستير' },
              { id: 2, value: 'دكتوراه' },
            ]"
          >
          </v-select> -->
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.generalMajor"
          >
          </v-text-field>
        </v-col>
        <v-col cols="4"
          ><TheTextFieldLable>جهة النشر</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.generalMajor"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>نوع جهة النشر</TheTextFieldLable>
          <v-select
            v-model="user.qualification"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="[
              { id: 1, value: 'مجلة علمية محلية' },
              { id: 2, value: 'مجلة علمية عالمية' },
              { id: 3, value: 'مؤتمر علمي محلي' },
              { id: 4, value: 'مؤتمر علمي عالمي' },
            ]"
          >
          </v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>رابط موقع نشر الإنتاج العلمي</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.univercity"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>تاريخ النشر</TheTextFieldLable>
          <v-text-field
            type="date"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.country"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>المدينة</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.city"
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
            v-model="user.univercity"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>الدرجة العلمية الحالية</TheTextFieldLable>
          <v-select
            v-model="user.qualification"
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
            v-model="user.generalMajor"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>تاريخ قرار الترقية</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            type="date"
            v-model="user.exaxtMajor"
          >
          </v-text-field
        ></v-col>
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
export default {
  data() {
    return {
      user: {
        qualification: null,
      },
    };
  },
  methods: {
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
