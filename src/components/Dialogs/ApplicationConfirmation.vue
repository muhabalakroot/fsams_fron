<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <v-btn
          v-if="
            userRole == 'faculty-member' ||
            userRole == 'department-head' ||
            userRole == 'faculty-affairs-office'
          "
          color="error"
          v-bind="props"
          class="ma-4"
        >
          إرسال
        </v-btn>
        <v-btn v-else color="error" v-bind="props" class="ma-4"> تسليم </v-btn>
      </template>
      <v-card>
        <v-card-title v-if="userRole == 'faculty-member'" class="text-h5">
          هل تريد تسليم الطلب؟
        </v-card-title>
        <!-- <v-card-title v-if="userRole == 'department-head'" class="text-h5">
          هل تريد تسليم؟
        </v-card-title> -->
        <v-card-text v-if="userRole == 'faculty-member'"
          >عند تسليمك للطلب لم تتمكن من التعديل عليه إلا بإذن رئيس قسمك
          العلمي!</v-card-text
        >
        <v-card-title v-else class="text-h5"> هل تريد تسليم؟ </v-card-title>
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
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
  },
  methods: {
    submit() {
      this.dialog = false;
      this.$router.push({ name: "ApplicationSubmited" });
    },
  },
};
</script>
