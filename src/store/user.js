// Utilities
import { defineStore } from "pinia";

export const useUsersStore = defineStore("Users", {
  state: () => ({
    users: [
      {
        firstName: null,
        fatherName: null,
        lastName: null,
        nationality: 1,
        faculty: null,
        department: null,
        degree: null,
        nationalNumber: null,
        passport: null,
        qualification: null,
        generalMajor: null,
        exaxtMajor: null,
        univercity: null,
        country: null,
        city: null,
        dateOfObtaining: null,
        currentDegree: null,
        promotoinDegreeNumber: null,
        degreeDateOfObtaing: null,
        promotoinDegreeFile: null,
        scientificPaper: [
          {
            id: 1,
            scientificPaperTitle: "إختبار",
            publisher: "إختبار",
            publisherType: "إختبار",
            scientificPaperUrl: "إختبار",
            dateOfpublishing: "01-01-2000",
            scientificPaperNoNamesFile: "إختبار",
            acceptanceLetter: "إختبار",
          },
        ],
      },
    ],
  }),
  getters: {
    scientificPaper() {
      const scientificPapers = [];
      this.users.forEach((user) => {
        user.scientificPaper.forEach((paper) => {
          scientificPapers.push(paper);
        });
      });
      return scientificPapers;
    },
  },
});