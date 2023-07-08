<template>
  <div class="text-h3 ma-5">تسجيل الدخول</div>
  <v-alert type="info" class="ma-2" variant="tonal" border="start"
    >لتسجيل الدخول، من فضلك أدخل البريد الجامعي وكلمة المرور.</v-alert
  >
  <v-form ref="form" class="my-7 mx-2">
    <v-text-field
      class="my-4"
      max-width="200px"
      variant="outlined"
      v-model="email"
      :rules="emailRules"
      label="البريد الجامعي"
      placeholder="example@uot.edu.ly"
      type="email"
      required
    ></v-text-field>

    <v-text-field
      class="my-3"
      max-width="200px"
      variant="outlined"
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="كلمة المرور"
      type="password"
      required
    ></v-text-field>

    <v-btn @click="validate"> تسجيل الدخول </v-btn>

    <div class="ma-2">
      هل نسيت <strong style="color: darkcyan">كلمة المرور؟</strong>
    </div>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "يجب ادخال البريد الجامعي",
      (v) => (v && /^[^@]+@uot.edu.ly$/.test(v)) || "البريد الجامعي غير صحيح",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "يجب ادخال كلمة المرور",
      (v) => v.length > 8 || "يجب أن تكون كلمة المرور متكونة من 8 حروف أو أكثر",
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
