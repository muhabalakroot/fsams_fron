<template>
  <div>
    <v-card
      :loading="isLoading"
      class="mx-auto pa-12 py-8"
      elevation="8"
      max-width="450px"
      rounded="lg"
    >
      <div class="text-h6 pa-2 pr-0">تسجيل الدخول</div>
      <v-alert type="success"> الرجاء أدخل كلمة المرور الجديد </v-alert>

      <div class="text-subtitle-1 text-medium-emphasis pt-4">
        كلمة المرور الجديدة
      </div>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="أدخل كلمة المرور الجديدة"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">تأكيد كلمة المرور</div>

      <v-text-field
        v-model="passwordConfirm"
        :rules="passwordConfirmRules"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="أعد إدخال كلمة المرور "
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        block
        class="mb-6"
        color="blue"
        size="large"
        prepend-icon="mdi-login-variant"
        @click="isLoading = true"
      >
        تسجيل الدخول
      </v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    isLoading: false,
    visible: false,
    password: "",
    passwordRules: [
      (v) => !!v || "يجب ادخال كلمة المرور",
      (v) =>
        v.length >= 8 || "يجب أن تكون كلمة المرور متكونة من 8 حروف أو أكثر",
    ],
    passwordConfirm: "",
    passwordConfirmRules: [
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
