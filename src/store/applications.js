// Utilities
import { defineStore } from "pinia";

export const useAppicationsStore = defineStore("Appications", {
  state: () => ({
    applications: [
      {
        applicationType: "طلب ترقية ربيع 2023",
        createdAt: "5/1/2023",
        status: "قيد المعالجة",
        isSubmited: "نعم",
      },
      {
        applicationType: "طلب ترقية خريف 2019",
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
