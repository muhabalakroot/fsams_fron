<template>
  <div>
    <v-card
      :loading="isLoading"
      class="mx-auto pa-12 py-8"
      elevation="8"
      max-width="450px"
      rounded="lg"
    >
      <div class="text-h6 pa-2 pr-0">إعادة تعيين كلمة المرور</div>
      <v-alert type="info" variant="tonal" class="text-subtitle-2">
        إذا نسيت كلمة المرور الخاصة بك ، فيمكنك طلب كلمة مرور جديدة عبر إدخال
        البريد الجامعي أدناه.
      </v-alert>
      <div class="text-subtitle-1 text-medium-emphasis pt-4">
        البريد الجامعي
      </div>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        density="compact"
        placeholder="example@uot.edu.ly"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-btn
        block
        class="mb-6"
        color="blue"
        size="large"
        prepend-icon="mdi-lock-reset"
        @click="isLoading = true"
      >
        إعادة تعيين كلمة المرور
      </v-btn>
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
  }),
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
  },
};
</script>
