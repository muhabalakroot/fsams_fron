<template>
  <div>
    <v-card
      :loading="isLoading"
      :disabled="isLoading"
      class="mx-auto pa-6 py-5"
      elevation="8"
      max-width="750"
      rounded="lg"
    >
      <v-row>
        <v-col cols="6">
          <v-form ref="form">
            <TheTextFieldLable>البريد الجامعي</TheTextFieldLable>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              placeholder="example@uot.edu.ly"
              prepend-inner-icon="mdi-email-outline"
              required
            ></v-text-field>

            <TheTextFieldLable
              class="d-flex align-center justify-space-between"
            >
              كلمة المرور

              <a
                class="text-caption text-decoration-none text-blue"
                href="\forgotpassword"
                rel="noopener noreferrer"
                target="_blank"
              >
                هل نسيت كلمة المرور؟</a
              >
            </TheTextFieldLable>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              placeholder="أدخل كلمة المرور"
              prepend-inner-icon="mdi-lock-outline"
              @click:append-inner="visible = !visible"
              required
            ></v-text-field>

            <v-card class="mb-6 pa-2" color="surface-variant" variant="tonal">
              <v-card-text class="text-medium-emphasis text-caption">
                تحذير: بعد 3 محاولات تسجيل دخول فاشلة متتالية سيتم قفل حسابك
                مؤقتًا لمدة ثلاث ساعات. إذا كان يجب عليك تسجيل الدخول الآن ،
                يمكنك انقر أيضًا على "هل نسيت كلمة مرور؟" لإعادة تعيين كلمة مرور
                وتسجيل الدخول.
              </v-card-text>
            </v-card>

            <v-btn
              block
              class="mb-6"
              color="blue"
              size="large"
              prepend-icon="mdi-login-variant"
              @click="validate"
            >
              تسجيل الدخول
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="6" class="d-flex justify-center"
          ><v-img
            class="mx-auto"
            max-width="228"
            src="@/assets/uot_logo.png"
          ></v-img
        ></v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { useUsersStore } from "@/store/user";
import { useApplyingStore } from "@/store/applying";
import { useAppicationsStore } from "@/store/applications";
export default {
  data: () => ({
    isLoading: false,
    visible: false,
    email: "",
    emailRules: [
      (v) => !!v || "يجب ادخال البريد الجامعي",
      (v) => (v && /^[^@]+@uot.edu.ly$/.test(v)) || "البريد الجامعي غير صحيح",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "يجب ادخال كلمة المرور",
      (v) =>
        v.length >= 8 || "يجب أن تكون كلمة المرور متكونة من 8 حروف أو أكثر",
    ],
  }),
  methods: {
    ...mapActions(useUsersStore, ["login"]),
    async validate() {
      // window.open("/src/assets/uot_logo.png", "_blank");
      const { valid } = await this.$refs.form.validate();

      this.login(this.email, this.password);
      if (valid) {
        this.isLoading = true;
        setTimeout(() => {
          this.$router.push({ name: "Main" });
          this.isLoading = false;
        }, 2000);
      }
    },
    file() {},
  },
};
</script>
