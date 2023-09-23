<template>
  <TheH1>البيانات الأكاديمية</TheH1>

  <v-alert type="info">
    يمكنك الضعط على زر "حفظ" والخروج من النظام، ثم إكمال الطلب في وقت لاحق!
  </v-alert>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="4">
          <TheTextFieldLable
            >المؤهل العلمي<span style="color: red">*</span></TheTextFieldLable
          >
          <v-select
            v-model="user.qualification"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="['ماجيستير', 'دكتوراه']"
          >
          </v-select>
        </v-col>
        <v-col cols="4"
          ><TheTextFieldLable
            >التخصص<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.generalMajor"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable
            >التخصص الدقيق<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.exaxtMajor"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable
            >الجامعة<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.univercity"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable
            >البلد<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.country"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable
            >المدينة<span style="color: red">*</span></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.city"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable
            >تاريخ الحصول عليه<span style="color: red"
              >*</span
            ></TheTextFieldLable
          >
          <v-text-field
            type="date"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.dateOfObtaining"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <v-row>
        <v-col cols="4">
          <TheTextFieldLable
            >الدرجة العلمية الحالية<span style="color: red"
              >*</span
            ></TheTextFieldLable
          >
          <v-select
            v-model="user.currentDegree"
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
          ><TheTextFieldLable
            >رقم قرار الترقية<span style="color: red"
              >*</span
            ></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.promotoinDegreeNumber"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable
            >تاريخ قرار الترقية<span style="color: red"
              >*</span
            ></TheTextFieldLable
          >
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            type="date"
            v-model="user.degreeDateOfObtaing"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable
            >قرار الترقية<span style="color: red">*</span></TheTextFieldLable
          >
          <v-file-input
            :rules="[
              (v) => !!v || 'هذا الحقل اجباري',
              (v) => (v && v.length > 0) || 'هذا الحقل اجباري',
            ]"
            hint="الرجاء رفع صورة من قرار الترقية"
            v-model="user.promotoinDegreeFile"
          ></v-file-input>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div align="left">
        <v-btn
          variant="text"
          color="error"
          class="mx-2"
          @click="goback"
          prepend-icon="mdi-chevron-right"
          >عودة
        </v-btn>

        <v-btn
          variant="text"
          class="mx-2"
          @click="save"
          :loading="isLoading"
          :disabled="isLoading"
        >
          حفظ
        </v-btn>
        <v-btn
          @click="validate"
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
      user: null,
      isLoading: false,
      isLoadingAndGO: false,
    };
  },
  computed: {
    ...mapState(useApplyingStore, ["applyings"]),
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      this.isLoadingAndGO = true;
      setTimeout(() => {
        if (valid)
          this.$router.push({
            name: "ApplicationScientificPaper",
            params: { id: this.$route.params.id },
          });
        this.isLoadingAndGO = false;
      }, 1500);
    },
    initialize() {
      this.user = this.applyings[0];
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

    goback() {
      this.$router.push({
        name: "ApplicationPersonaInfo",
        params: { id: this.$route.params.id },
      });
    },
  },
  created() {
    this.initialize();
  },
};
</script>
