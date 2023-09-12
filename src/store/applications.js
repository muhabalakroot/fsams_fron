// Utilities
import { defineStore } from "pinia";

export const useAppicationsStore = defineStore("Appications", {
  state: () => ({
    applications: [
      {
        applicationId: "1",
        applicationType: "طلب ترقية",
        createdAt: "5/1/2023",
        status: "قيد المعالجة",
        isSubmited: "نعم",
      },
      {
        applicationId: "2",
        applicationType: "طلب ترقية",
        createdAt: "5/8/2019",
        status: "مرفوض",
        isSubmited: "نعم",
      },
    ],
  }),
  actions: {
    addApplication(newApplication) {
      this.applications.push(newApplication);
    },
  },
});
