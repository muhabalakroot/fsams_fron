// Utilities
import { defineStore } from "pinia";

export const useApplyingStore = defineStore("Applyings", {
  state: () => ({
    applyings: [
      {
        applyingId: "6009c0eee65f6dce28fb3e42",
        applicationType: "طلب ترقية",
        createdAt: "2023-09-25",
        submitedAt: "2022-11-25",
        status: "قيد المعالجة",
        isSubmitedByFM: false,
        isSubmitedByDH: false,
        isSubmited: "نعم",
        role: "department-head",
        firstName: "رضوان",
        fatherName: "علي",
        grandeFatherName: "بلقاسم",
        lastName: "حسين",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم هندسة البرمجيات",
        // degree: null,
        nationalNumber: "119690457898",
        passport: null,
        qualification: "دكتوراه",
        generalMajor: " الذكاء الاصطناعي",
        exaxtMajor: "استخدام الذكاء الاصطناعي في التحكم بالأنظمة المركبة",
        univercity: " جامعة ستيرلنق",
        country: "بريطانيا",
        city: "اسكتالندا - قلاسكو",
        dateOfObtaining: "2008-01-01",
        currentDegree: "أستاذ مشارك",
        promotoinDegreeNumber: "123456",
        degreeDateOfObtaing: "2019-09-18",
        dhNote: " هنا يتم إدخال ملخص قرار مجلس القسم",
        dhNoteWhenFalse: null,
        departmentMeetingMinutes: [],
        showenToDepartment: "2023-09-25",
        promotoinDegreeFile: [],
        signedApplication: null,
        scientificPaper: [
          {
            id: "1",
            scientificPaperTitle:
              "Simulation of Leishmaniasis Epidemiology in Libya Using Agent Based Modelling",
            publisher: "ieeexplore",
            publisherType: "مجلية علمية عالمية",
            scientificPaperUrl: "ieeexplore",
            dateOfpublishing: "2019-10-01",
            scientificPaperNoNamesFile: [],
            acceptanceLetter: [],
          },
          {
            id: "2",
            scientificPaperTitle:
              "Agent Based Computing Technique for Epidemiological Disease Modelling",
            publisher: "ieeexplore",
            publisherType: "مجلية علمية عالمية",
            scientificPaperUrl: "ieeexplore",
            dateOfpublishing: "2020-04-15",
            scientificPaperNoNamesFile: [],
            acceptanceLetter: [],
          },
          {
            id: "3",
            scientificPaperTitle:
              "Applying Multiple Deep Learning Models for Antipersonal Landmines Recognition",
            publisher: "ieeexplore",
            publisherType: "مجلية علمية عالمية",
            scientificPaperUrl: "ieeexplore",
            dateOfpublishing: "2021-07-28",
            scientificPaperNoNamesFile: [],
            acceptanceLetter: [],
          },
          {
            id: "4",
            scientificPaperTitle:
              "Computing Metrics for Measuring User Experience on Libyan Food Industry Website..s",
            publisher: "ieeexplore",
            publisherType: "مجليى علمية عالمية",
            scientificPaperUrl: "ieeexplore",
            dateOfpublishing: "2022-05-11",
            scientificPaperNoNamesFile: [],
            acceptanceLetter: [],
          },
          {
            id: "5",
            scientificPaperTitle:
              "Applying Multiple Deep Learning Models for Antipersonal Landmines Recognition",
            publisher: "ieeexplore",
            publisherType: "مجلية علمية عالمية",
            scientificPaperUrl: "ieeexplore",
            dateOfpublishing: "2021-07-28",
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
            file: [],
          },
          {
            id: 2,
            name: "ملخص اطروحة الدكتوراه",
            description:
              "الرجاء رفع نسخة من عنوان وملخص اطروحة الدكتوراه، بدون أسماء.",
            file: [],
          },
          {
            id: 3,
            name: "السيرة الذاتية",
            description: "الرجاء رفع سيرة ذاتية حديثة",
            file: [],
          },
          {
            id: 4,
            name: " مباشرة العمل",
            description: "رفع صورة من رسالة مباشرة العمل للفصل الدراسي الحالي",
            file: [],
          },
          {
            id: 5,
            name: "نموذج إدراج الإنتاج العلمي",
            description: "رفع صورة من نموذج إدراج الإنتاج العلمي ",
            file: [],
          },
          {
            id: 6,
            name: "إقرار",
            description: "إقرار منك بصحة البيانات التي ذكرتها في هذا الطلب.",
            file: [],
          },
        ],
        reviewers: [
          {
            id: 1,
            name: "أسامة المرغني",
            univercity: "جامعة مصراتة",
            degree: "أستاذ",
            generalMajor: "هندسة برمجيات",
            reviewerPhone: "0911234567",
            reviewerEmail: "osama@gmail.com",
            typeOfPaper: [
              {
                value: "ورقة بحثية",
              },
              {
                value: "كتاب مرجعي",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
            ],
            publishedAt: [
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
            ],
            degreeOfRelevance: [
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "غير مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
            ],
            importance: [
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
            ],
            review: [
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
            ],
          },
          {
            id: 2,
            name: "أيمن مادي",
            univercity: "جامعة سبها",
            degree: "أستاذ مشارك",
            generalMajor: "تطوير برمجيات",
            reviewerPhone: "0911234567",
            reviewerEmail: "aymen@gmail.com",
            typeOfPaper: [
              {
                value: "ورقة بحثية",
              },
              {
                value: "كتاب مرجعي",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
            ],
            publishedAt: [
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
            ],
            degreeOfRelevance: [
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "غير مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
            ],
            importance: [
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
            ],
            review: [
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
            ],
          },
          {
            id: 3,
            name: "عزالدين شليبك",
            univercity: "جامعة النجم الساطع",
            degree: "أستاذ",
            generalMajor: "تقنيات إنترنت",
            reviewerPhone: "0911234567",
            reviewerEmail: "ezzedin@gmail.com",
            typeOfPaper: [
              {
                value: "ورقة بحثية",
              },
              {
                value: "كتاب مرجعي",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
            ],
            publishedAt: [
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
            ],
            degreeOfRelevance: [
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "غير مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
            ],
            importance: [
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
            ],
            review: [
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
            ],
          },
          {
            id: 4,
            name: "مؤيد العكاري",
            univercity: "جامعة قاريونس",
            degree: "أستاذ",
            generalMajor: "هندسة كبيوتر",
            reviewerPhone: "0911234567",
            reviewerEmail: "moayed@gmail.com",
            typeOfPaper: [
              {
                value: "ورقة بحثية",
              },
              {
                value: "كتاب مرجعي",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
            ],
            publishedAt: [
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
            ],
            degreeOfRelevance: [
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "غير مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
            ],
            importance: [
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
            ],
            review: [
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
            ],
          },
          {
            id: 5,
            name: "أسامة ساسي",
            univercity: "جامعة طرابلس",
            degree: "أستاذ",
            generalMajor: "تطوير برمجيات",
            reviewerPhone: "0911234567",
            reviewerEmail: "osamasasi@gmail.com",
            typeOfPaper: [
              {
                value: "ورقة بحثية",
              },
              {
                value: "كتاب مرجعي",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
              {
                value: "ورقة بحثية",
              },
            ],
            publishedAt: [
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
              {
                value: "مجلة علمية محلية",
              },
            ],
            degreeOfRelevance: [
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "غير مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
              {
                value: "مرتبط بالتخصص",
              },
            ],
            importance: [
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
              {
                value: "مهم",
              },
            ],
            review: [
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
              {
                value: "مقبول",
              },
            ],
          },
        ],
        isShowen: "true",
        isComplate: "true",
        isOkay: "true",
        numberOfDecisionToFormTheCommittee: "123456",
        dateOfTheDecisionToFormTheCommittee: "2023-08-28",
        promotionDegree: "أستاذ",
        noteFromReviewer: "",
        reviewerName: "أحمد محمد الاسطى",
        reviewerDegree: "أستاذ",
        placeOfWork: "جامعة قاريونس",
        bank: "مصرف الجمهورية",
        bankAccount: 12345678910,
        DHsubmitedAt: "2023-08-28",
        numberOfPapers: "5",
        facultyAffairsOfficeApprovel: "false",
        FAONotes:
          "ملاحظات يمكن لرئيس مكتب شؤون أعضاء هيئة التدريس بالكلية إضافتها.",
        signedFAOApplication: [],
        selectedReviewers: [],
        isShowenToFAA: true,
        FAAmeetingDate: "",
        formTheCommitteeIssuanceDate: "",
        formTheCommittee: "",
        formTheCommitteeFile: [],
        finelFAAMeeting: "",
        finelFAAMeetingDate: "",
        isSubmitedByFAA: false,
        isSubmitedByFAO: false,
      },
      // {
      //   applyingId: "1",
      //   applicationType: "طلب ترقية",
      //   createdAt: "2023-03-12",
      //   submitedAt: "2023-06-18",
      //   status: "قيد المعالجة",
      //   isSubmited: "نعم",
      //   role: "department-head",
      //   firstName: "محمود",
      //   fatherName: "",
      //   grandeFatherName: "",
      //   lastName: "الجديد",
      //   nationality: "ليبي",
      //   faculty: "كلية تقنية المعلومات",
      //   department: "قسم هندسة البرمجيات",
      //   // degree: null,
      //   nationalNumber: "1200000457898",
      //   passport: null,
      //   qualification: "دكتوراه",
      //   generalMajor: "Exper Systems",
      //   exaxtMajor: "123456",
      //   univercity: "جامعة المرقب",
      //   country: "بريطانيا",
      //   city: "مانشيستر",
      //   dateOfObtaining: "2000-01-02",
      //   currentDegree: "أستاذ مشارك",
      //   promotoinDegreeNumber: "123456",
      //   degreeDateOfObtaing: "2022-05-18",
      //   dhNote: null,
      //   departmentMeetingMinutes: [],
      //   showenToDepartment: "",
      //   promotoinDegreeFile: [],
      //   signedApplication: [],
      //   scientificPaper: [
      //     {
      //       id: "1",
      //       scientificPaperTitle: "إختبار",
      //       publisher: "إختبار",
      //       publisherType: "إختبار",
      //       scientificPaperUrl: "إختبار",
      //       dateOfpublishing: "01-01-2000",
      //       scientificPaperNoNamesFile: [],
      //       acceptanceLetter: [],
      //     },
      //     {
      //       id: "2",
      //       scientificPaperTitle: "إختبار",
      //       publisher: "إختبار",
      //       publisherType: "إختبار",
      //       scientificPaperUrl: "إختبار",
      //       dateOfpublishing: "01-01-2000",
      //       scientificPaperNoNamesFile: [],
      //       acceptanceLetter: [],
      //     },
      //     {
      //       id: "3",
      //       scientificPaperTitle: "إختبار",
      //       publisher: "إختبار",
      //       publisherType: "إختبار",
      //       scientificPaperUrl: "إختبار",
      //       dateOfpublishing: "01-01-2000",
      //       scientificPaperNoNamesFile: [],
      //       acceptanceLetter: [],
      //     },
      //   ],
      //   attachments: [
      //     {
      //       id: 1,
      //       name: "ملخص رسالة الماجستير",
      //       description:
      //         " الرجاء رفع صورة من عنوان وملخص رسالة الماجستير، بدون اسماء.",
      //       file: [],
      //     },
      //     {
      //       id: 2,
      //       name: "ملخص اطروحة الدكتوراه",
      //       description:
      //         "الرجاء رفع نسخة من عنوان وملخص اطروحة الدكتوراه، بدون أسماء.",
      //       file: [],
      //     },
      //     {
      //       id: 3,
      //       name: "السيرة الذاتية",
      //       description: "الرجاء رفع سيرة ذاتية حديثة",
      //       file: [],
      //     },
      //     {
      //       id: 4,
      //       name: " مباشرة العمل",
      //       description: "رفع صورة من رسالة مباشرة العمل للفصل الدراسي الحالي",
      //       file: [],
      //     },
      //     {
      //       id: 5,
      //       name: "نموذج إدراج الإنتاج العلمي",
      //       description: "رفع صورة من نموذج إدراج الإنتاج العلمي ",
      //       file: [],
      //     },
      //     {
      //       id: 6,
      //       name: "إقرار",
      //       description: "إقرار منك بصحة البيانات التي ذكرتها في هذا الطلب.",
      //       file: [],
      //     },
      //   ],
      //   reviewers: [
      //     {
      //       id: 1,
      //       name: "أسامة المرغني",
      //       univercity: "جامعة مصراتة",
      //       degree: "أستاذ",
      //       generalMajor: "هندسة برمجيات",
      //       typeOfPaper: [
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "كتاب مرجعي",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //       ],
      //       publishedAt: [
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //       ],
      //       degreeOfRelevance: [
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "غير مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //       ],
      //       importance: [
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //       ],
      //       review: [
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //       ],
      //     },
      //     {
      //       id: 2,
      //       name: "أيمن مادي",
      //       univercity: "جامعة سبها",
      //       degree: "أستاذ مشارك",
      //       generalMajor: "تطوير برمجيات",
      //       typeOfPaper: [
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "كتاب مرجعي",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //       ],
      //       publishedAt: [
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //       ],
      //       degreeOfRelevance: [
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "غير مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //       ],
      //       importance: [
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //       ],
      //       review: [
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //       ],
      //     },
      //     {
      //       id: 3,
      //       name: "عزالدين شليبك",
      //       univercity: "جامعة النجم الساطع",
      //       degree: "أستاذ",
      //       generalMajor: "تقنيات إنترنت",
      //       typeOfPaper: [
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "كتاب مرجعي",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //       ],
      //       publishedAt: [
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //       ],
      //       degreeOfRelevance: [
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "غير مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //       ],
      //       importance: [
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //       ],
      //       review: [
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //       ],
      //     },
      //     {
      //       id: 4,
      //       name: "مؤيد العكاري",
      //       univercity: "جامعة قاريونس",
      //       degree: "أستاذ",
      //       generalMajor: "هندسة كبيوتر",
      //       typeOfPaper: [
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "كتاب مرجعي",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //       ],
      //       publishedAt: [
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //       ],
      //       degreeOfRelevance: [
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "غير مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //       ],
      //       importance: [
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //       ],
      //       review: [
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //       ],
      //     },
      //     {
      //       id: 5,
      //       name: "أسامة ساسي",
      //       univercity: "جامعة طرابلس",
      //       degree: "أستاذ",
      //       generalMajor: "تطوير برمجيات",
      //       typeOfPaper: [
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "كتاب مرجعي",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //         {
      //           value: "ورقة بحثية",
      //         },
      //       ],
      //       publishedAt: [
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //         {
      //           value: "مجلة علمية محلية",
      //         },
      //       ],
      //       degreeOfRelevance: [
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "غير مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //         {
      //           value: "مرتبط بالتخصص",
      //         },
      //       ],
      //       importance: [
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //         {
      //           value: "مهم",
      //         },
      //       ],
      //       review: [
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //         {
      //           value: "مقبول",
      //         },
      //       ],
      //     },
      //   ],
      //   isShowen: "true",
      //   isComplate: 'عدم مطابقة"',
      //   isOkay: "عدم الموافقة",
      //   numberOfDecisionToFormTheCommittee: "123456",
      //   dateOfTheDecisionToFormTheCommittee: "2023-08-28",
      //   promotionDegree: "أستاذ",
      //   noteFromReviewer: "",
      //   reviewerName: "أحمد محمد الاسطى",
      //   reviewerDegree: "أستاذ",
      //   placeOfWork: "جامعة قاريونس",
      //   bank: "مصرف الجمهورية",
      //   bankAccount: 12345678910,
      //   DHsubmitedAt: "2023-08-28",
      //   numberOfPapers: "5",
      //   facultyAffairsOfficeApprovel: "false",
      //   FAONotes:
      //     "ملاحظات يمكن لرئيس مكتب شؤون أعضاء هيئة التدريس بالكلية إضافتها.",
      //   signedFAOApplication: [],
      //   selectedReviewers: [],
      //   isShowenToFAA: true,
      //   FAAmeetingDate: "",
      //   formTheCommitteeIssuanceDate: "",
      //   formTheCommittee: "",
      //   formTheCommitteeFile: [],
      //   finelFAAMeeting: "",
      //   finelFAAMeetingDate: "",
      //   isSubmitedByFAA: false,
      //   isSubmitedByFAO: false,
      // },
      // {
      //   applyingId: "3",
      //   applicationType: "طلب ترقية",
      //   createdAt: "2023-07-05",
      //   submitedAt: "2023-06-18",
      //   status: "قيد المعالجة",
      //   isSubmited: "نعم",
      //   role: "department-head",
      //   firstName: "إدريس",
      //   fatherName: "",
      //   grandeFatherName: "",
      //   lastName: "غميض",
      //   nationality: "ليبي",
      //   faculty: "كلية تقنية المعلومات",
      //   department: "قسم الشبكات",
      //   // degree: null,
      //   nationalNumber: "1200000457898",
      //   passport: null,
      //   qualification: "دكتوراه",
      //   generalMajor: "Exper Systems",
      //   exaxtMajor: "123456",
      //   currentDegree: "أستاذ مشارك",
      // },
      // {
      //   applyingId: "4",
      //   applicationType: "طلب ترقية",
      //   createdAt: "2023-06-26",
      //   submitedAt: "2023-06-18",
      //   status: "قيد المعالجة",
      //   isSubmited: "نعم",
      //   role: "department-head",
      //   firstName: "عبدالسلام",
      //   fatherName: "",
      //   grandeFatherName: "",
      //   lastName: "الشريف",
      //   nationality: "ليبي",
      //   faculty: "كلية تقنية المعلومات",
      //   department: "قسم نظم المعلومات",
      //   // degree: null,
      //   currentDegree: "أستاذ مشارك",
      // },
    ],
  }),
  actions: {
    addToLocal() {
      localStorage.setItem("apply", JSON.stringify(this.applyings[0]));
    },
    updateApplying(newApplying) {
      localStorage.removeItem("apply");
      localStorage.setItem("apply", JSON.stringify(newApplying));
      this.applyings[0] = newApplying;
    },
    updateAfterFM() {
      const x = JSON.parse(localStorage.getItem("apply"));
      x.isSubmitedByFM = true;
      console.log("in FM");
      console.log(x);
      localStorage.removeItem("apply");
      localStorage.setItem("apply", JSON.stringify(x));
    },
    updateAfterDH() {
      console.log("in DH");
      const x = JSON.parse(localStorage.getItem("apply"));
      x.isSubmitedByDH = true;
      localStorage.removeItem("apply");
      localStorage.setItem("apply", JSON.stringify(x));
    },
    addAttachment(index, file) {
      this.applyings.attachments[index].file = file;
    },
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
    addSselectedReviewers(selectedReviewer) {
      this.applyings[0].selectedReviewers.push(selectedReviewer);
    },
  },
});
