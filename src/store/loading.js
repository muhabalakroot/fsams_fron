// Utilities
import { defineStore } from "pinia";

export const useAppicationsStore = defineStore("Appications", {
  state: () => ({
    applications: [
      {
        applicationId: "6009c0eee65f6dce28fb3e50",
        applicationType: "طلب ترقية ",
        createdAt: new Date().toLocaleDateString(),
        status: "جديد",
        isSubmited: "لا",
      },
    ],
  }),
  actions: {
    addApplication(newApplication) {
      this.applications.push(newApplication);
    },
  },
});
