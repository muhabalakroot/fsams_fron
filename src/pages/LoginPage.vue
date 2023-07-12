<template>
  <div>
    <v-card
      :loading="isLoading"
      class="mx-auto pa-12 py-8"
      elevation="8"
      max-width="750"
      rounded="lg"
    >
      <v-row>
        <v-col cols="6">
          <div class="text-subtitle-1 text-medium-emphasis">البريد الجامعي</div>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            density="compact"
            placeholder="example@uot.edu.ly"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            كلمة المرور

            <a
              class="text-caption text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              هل نسيت كلمة المرور؟</a
            >
          </div>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="أدخل كلمة المرور"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-card class="mb-6" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
              تحذير: بعد 3 محاولات تسجيل دخول فاشلة متتالية سيتم قفل حسابك
              مؤقتًا لمدة ثلاث ساعات. إذا كان يجب عليك تسجيل الدخول الآن ، يمكنك
              انقر أيضًا على "هل نسيت كلمة مرور تسجيل الدخول؟" أدناه لإعادة
              تعيين كلمة مرور تسجيل الدخول.
            </v-card-text>
          </v-card>

          <v-btn
            block
            class="mb-6"
            color="blue"
            size="large"
            prepend-icon="mdi-login-variant"
            @click="isLoading = true"
          >
            تسجيل الدخول
          </v-btn></v-col
        >
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
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
  },
};
</script>
