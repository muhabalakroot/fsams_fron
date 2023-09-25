// Utilities
import { defineStore } from "pinia";

export const useFacultyMembersStore = defineStore("FacultyMembers", {
  state: () => ({
    FacultyMembers: [
      {
        id: "1",
        firstName: "رضوان",
        fatherName: "علي",
        grandeFatherName: "بلقاسم",
        lastName: "حسين",
        email: "radwan@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية تقينة المعلومات",
        department: "قسم هندسة البرمجيات",
        qualification: "دكتوراه",
        currentDegree: "أستاذ مشارك",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "2",
        firstName: "الحرمين",
        fatherName: "محمد",
        grandeFatherName: "",

        lastName: "الحرمين",
        email: "haramin@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم هندسة البرمجيات",
        qualification: "دكتوراه",
        currentDegree: "أستاذ",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "3",
        firstName: "عبدالحميد",
        fatherName: "",
        grandeFatherName: "",

        lastName: "الواعر",
        email: "alwaer@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم هندسة البرمجيات",
        qualification: "دكتوراه",
        currentDegree: "أستاذ مساعد",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "4",
        firstName: "مروة",
        fatherName: "نوري",
        grandeFatherName: "",

        lastName: "صولة",
        email: "solla@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم هندسة البرمجيات",
        qualification: "ماجستير",
        currentDegree: "أستاذ مساعد",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "5",
        firstName: "حنان",
        fatherName: "",
        grandeFatherName: "",

        lastName: "الداقيز",
        email: "hanan@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم نظم المعلومات",
        qualification: "دكتوراه",
        currentDegree: "أستاذ",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "6",
        firstName: "ادريس",
        fatherName: "",
        grandeFatherName: "",

        lastName: "غميض",
        email: "edris@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية تقنية المعلومات",
        department: "قسم الشبكات",
        qualification: "دكتوراه",
        currentDegree: "أستاذ مشارك",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "7",
        firstName: "جمال",
        fatherName: "",
        grandeFatherName: "",

        lastName: "اندير",
        email: "jamal@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية العلوم",
        department: "قسم الإحصاء",
        qualification: "دكتوراه",
        currentDegree: "أستاذ مشارك",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "8",
        firstName: "السايح",
        fatherName: "",
        grandeFatherName: "",

        lastName: "الهباشي",
        email: "alsayeh@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية الهندسة",
        department: "قسم الهندسية الكهربائية والإلكترونية",
        qualification: "دكتوراه",
        currentDegree: "أستاذ",
        dateOfObtaining: "2019-02-28",
      },
      {
        id: "9",
        firstName: "مختار",
        fatherName: "",
        grandeFatherName: "",

        lastName: "العالم",
        email: "mokhtar@uot.edu.ly",
        nationality: "ليبي",
        faculty: "كلية الزراعة",
        department: "قسم التربة والمياه",
        qualification: "دكتوراه",
        currentDegree: "أستاذ",
        dateOfObtaining: "2019-02-28",
      },
    ],
  }),
  actions: {
    crudChange(newFData) {
      console.log(this.FacultyMembers);
      this.FacultyMembers = newFData;
      console.log(this.FacultyMembers);
    },
  },
  getters: {
    itDepartment() {
      return this.FacultyMembers.filter(
        (member) => member.department === "قسم هندسة البرمجيات"
      );
    },
  },
});
