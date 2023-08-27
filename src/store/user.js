// Utilities
import { defineStore } from "pinia";

export const useUsersStore = defineStore("Users", {
  state: () => ({
    users: [
      {
        role: "faculty-affairs-office",
        role_ar: "رئيس قسم علمي",
        firstName: "مروة",
        fatherName: "نوري",
        lastName: "صولة",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم هندسة البرمجيات",
        degree: "أستاذ مساعد",
        nationalNumber: null,
        passport: null,
        qualification: "ماجيستير",
        generalMajor: null,
        exaxtMajor: null,
        univercity: null,
        country: null,
        city: null,
        dateOfObtaining: null,
        currentDegree: null,
        promotoinDegreeNumber: null,
        degreeDateOfObtaing: null,
        promotoinDegreeFile: [],
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
        attachments: [
          {
            id: 1,
            name: "ملخص رسالة الماجستير",
            description:
              " الرجاء رفع صورة من عنوان وملخص رسالة الماجستير، بدون اسماء.",
            isUploaded: "mdi-check-circle",
            file: ["a"],
          },
          {
            id: 2,
            name: "ملخص اطروحة الدكتوراه",
            description:
              "الرجاء رفع نسخة من عنوان وملخص اطروحة الدكتوراه، بدون أسماء.",
            isUploaded: "mdi-check-circle",
            file: ["a"],
          },
          {
            id: 3,
            name: "السيرة الذاتية",
            description: "الرجاء رفع سيرة ذاتية حديثة",
            isUploaded: "mdi-check-circle",
            file: ["a"],
          },
          {
            id: 4,
            name: " مباشرة العمل",
            description: "رفع صورة من رسالة مباشرة العمل للفصل الدراسي الحالي",
            isUploaded: "mdi-check-circle",
            file: ["a"],
          },
          {
            id: 5,
            name: "إقرار",
            description: "إقرار منك بصحة البيانات التي ذكرتها في هذا الطلب.",
            isUploaded: "mdi-check-circle",
            file: ["a"],
          },
        ],
      },
    ],
  }),
  getters: {
    userRole() {
      return this.users[0].role;
    },
  },
});
