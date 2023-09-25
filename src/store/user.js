// Utilities
import { defineStore } from "pinia";
import { mapActions } from "pinia";
import { useApplyingStore } from "./applying";
import { useAppicationsStore } from "./applications";

export const useUsersStore = defineStore("Users", {
  state: () => ({
    users: [],
  }),
  getters: {
    userRole() {
      return JSON.parse(localStorage.getItem("user")).role;
    },
  },
  actions: {
    ...mapActions(useApplyingStore, ["addToLocal"]),
    ...mapActions(useAppicationsStore, ["addToLocalStorage"]),

    login(email, password) {
      console.log(email, password);
      if (email == "r@uot.edu.ly") {
        this.users = [
          {
            role: "faculty-member",
            role_ar: "عضو هيئة تدريس",
            firstName: "رضوان",
            fatherName: "علي",
            lastName: "حسين",
            nationality: "ليبي",
            faculty: "كلية تقنية المعلومات",
            department: "قسم هندسة البرمجيات",
            degree: "أستاذ مشارك",
            nationalNumber: null,
            passport: null,
            qualification: "دكتوراه",
            generalMajor: null,
            exaxtMajor: null,
            univercity: null,
            country: null,
            city: null,
            dateOfObtaining: null,
            currentDegree: null,
            promotoinDegreeNumber: 123456,
            degreeDateOfObtaing: "2018-11-25",
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
                description:
                  "رفع صورة من رسالة مباشرة العمل للفصل الدراسي الحالي",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
              {
                id: 5,
                name: "إقرار",
                description:
                  "إقرار منك بصحة البيانات التي ذكرتها في هذا الطلب.",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
            ],
          },
        ];
        if (JSON.parse(localStorage.getItem("apply")).length == 0)
          this.addToLocal();
        if (JSON.parse(localStorage.getItem("application")).length == 0)
          this.addToLocalStorage();

        localStorage.setItem("user", JSON.stringify(this.users[0]));
      } else if (email == "m@uot.edu.ly") {
        this.users = [
          {
            role: "department-head",
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
                description:
                  "رفع صورة من رسالة مباشرة العمل للفصل الدراسي الحالي",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
              {
                id: 5,
                name: "إقرار",
                description:
                  "إقرار منك بصحة البيانات التي ذكرتها في هذا الطلب.",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
            ],
          },
        ];
        localStorage.setItem("user", JSON.stringify(this.users[0]));
      } else if (email == "h@uot.edu.ly") {
        this.users = [
          {
            role: "faculty-affairs-office",
            role_ar: "مكتب شؤون أعضاء هيئة التدريس",
            firstName: "حنان",
            fatherName: "الطاهر",
            lastName: "الداقيز",
            nationality: "ليبي",
            faculty: "كلية تقنية المعلومات",
            department: "قسم نظم المعلومات",
            degree: "أستاذ",
            nationalNumber: null,
            passport: null,
            qualification: "دكتوراه",
            generalMajor: null,
            exaxtMajor: null,
            univercity: null,
            country: null,
            city: null,
            dateOfObtaining: null,
            currentDegree: "أستاذ",
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
                description:
                  "رفع صورة من رسالة مباشرة العمل للفصل الدراسي الحالي",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
              {
                id: 5,
                name: "إقرار",
                description:
                  "إقرار منك بصحة البيانات التي ذكرتها في هذا الطلب.",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
            ],
          },
        ];
        localStorage.setItem("user", JSON.stringify(this.users[0]));
      } else if (email == "s@uot.edu.ly") {
        this.users = [
          {
            role: "faculty-affairs-administration",
            role_ar: "إدارة شؤون أعضاء هيئة التدريس",
            firstName: "السائح",
            fatherName: "محمد",
            lastName: "الهباشي",
            nationality: "ليبي",
            faculty: "كلية الهندسة",
            department: "قسم الهندسة الكهربائية والالكترونية",
            degree: "أستاذ",
            nationalNumber: null,
            passport: null,
            qualification: "دكتوراه",
            generalMajor: null,
            exaxtMajor: null,
            univercity: null,
            country: null,
            city: null,
            dateOfObtaining: null,
            currentDegree: "أستاذ",
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
                description:
                  "رفع صورة من رسالة مباشرة العمل للفصل الدراسي الحالي",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
              {
                id: 5,
                name: "إقرار",
                description:
                  "إقرار منك بصحة البيانات التي ذكرتها في هذا الطلب.",
                isUploaded: "mdi-check-circle",
                file: ["a"],
              },
            ],
          },
        ];
        localStorage.setItem("user", JSON.stringify(this.users[0]));
      }
    },
  },
});
