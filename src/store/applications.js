// Utilities
import { defineStore } from "pinia";
import { mapActions } from "pinia";
import { useApplyingStore } from "./applying";

export const useAppicationsStore = defineStore("Appications", {
  state: () => ({
    applications: [
      // {
      //   applicationId: "1",
      //   applicationType: "طلب ترقية",
      //   createdAt: "9/23/2023",
      //   status: "قيد المعالجة",
      //   isSubmited: "نعم",
      // },
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
    ...mapActions(useApplyingStore, ["updateAfterFM", "updateAfterDH"]),
    addToLocalStorage() {
      localStorage.setItem("application", JSON.stringify(this.applications));
    },
    updateApplication(newApplication) {
      localStorage.removeItem("application");
      localStorage.setItem("application", JSON.stringify(newApplication));
      this.applyings[0] = newApplication;
    },
    addApplication(newApplication) {
      this.applications.push(newApplication);
    },
    updateAfterSubmit() {
      console.log("from app");
      this.applications[0].isSubmited = "نعم";
      this.applications[0].status = "قيد المعالجة";
      localStorage.removeItem("application");
      localStorage.setItem("application", JSON.stringify(this.applications));
      this.updateAfterFM();
      this.updateAfterDH();
    },
  },
});
