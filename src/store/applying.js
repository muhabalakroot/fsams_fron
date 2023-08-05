// Utilities
import { defineStore } from "pinia";

export const useApplyingStore = defineStore("Applyings", {
  state: () => ({
    applyings: [
      {
        applyingId: "1",
        applicationType: "طلب ترقية ربيع 2023",
        createdAt: "5/1/2023",
        submitedAt: "5/1/2023",
        status: "قيد المعالجة",
        isSubmited: "نعم",
        role: "department-head",
        firstName: "رضوان",
        fatherName: "عبد  الله",
        lastName: "حسين",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم هندسة البرمجيات",
        // degree: null,
        nationalNumber: "1200000457898",
        passport: null,
        qualification: "دكتوراه",
        generalMajor: "Exper Systems",
        exaxtMajor: "123456",
        univercity: "جامعة المرقب",
        country: "بريطانيا",
        city: "مانشيستر",
        dateOfObtaining: "2000-01-02",
        currentDegree: "أستاذ مشارك",
        promotoinDegreeNumber: "123456",
        degreeDateOfObtaing: "2022-05-18",
        dhNote: null,
        departmentMeetingMinutes: [],
        showenToDepartment: "",
        promotoinDegreeFile: [],
        scientificPaper: [
          {
            id: "1",
            scientificPaperTitle: "إختبار",
            publisher: "إختبار",
            publisherType: "إختبار",
            scientificPaperUrl: "إختبار",
            dateOfpublishing: "01-01-2000",
            scientificPaperNoNamesFile: [],
            acceptanceLetter: [],
          },
          {
            id: "2",
            scientificPaperTitle: "إختبار",
            publisher: "إختبار",
            publisherType: "إختبار",
            scientificPaperUrl: "إختبار",
            dateOfpublishing: "01-01-2000",
            scientificPaperNoNamesFile: [],
            acceptanceLetter: [],
          },
          {
            id: "3",
            scientificPaperTitle: "إختبار",
            publisher: "إختبار",
            publisherType: "إختبار",
            scientificPaperUrl: "إختبار",
            dateOfpublishing: "01-01-2000",
            scientificPaperNoNamesFile: [],
            acceptanceLetter: [],
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
        reviewers: [
          {
            id: 1,
            name: "الحرمين الحرمين",
            univercity: "جامعة طرابلس",
            degree: "أستاذ",
            generalMajor: "Expert Systems",
          },
        ],
      },
    ],
  }),
  actions: {
    deleteScientificPapers(paperId) {
      console.log(paperId);
      this.applyings[0].scientificPaper =
        this.applyings[0].scientificPaper.filter(
          (paper) => paper.id !== paperId
        );
    },
    addScientificPapers(newScientificPaper) {
      this.users[0].scientificPaper.push(newScientificPaper);
    },
  },
});
