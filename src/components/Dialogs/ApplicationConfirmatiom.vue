<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="error" v-bind="props" class="ma-4"> إرسال </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5"> هل تريد تسليم الطلب؟ </v-card-title>
        <v-card-text
          >عند تسليمك للطلب لم تتمكن من التعديل عليه إلا بإذن رئيس قسمك
          العلمي!</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false"> إلغاء </v-btn>
          <v-btn color="error" @click="submit"> تسليم </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    submit() {
      this.dialog = false;
      this.$router.push({ name: "ApplicationSubmited" });
    },
  },
};
</script>
