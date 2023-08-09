// Utilities
import { defineStore } from "pinia";

export const useFacultyMembersStore = defineStore("FacultyMembers", {
  state: () => ({
    FacultyMembers: [
      {
        id: "1",
        firstName: "رضوان",
        fatherName: "علي",
        lastName: "حسين",
        email: "radwan@uot.edu.ly",
        nationality: 1,
        faculty: 6,
        department: 5,
        qualification: 2,
        currentDegree: 4,
        dateOfObtaining: null,
      },
      {
        id: "2",
        firstName: "الحرمين",
        fatherName: "محمد",
        lastName: "الحرمين",
        email: "haramin@uot.edu.ly",
        nationality: 1,
        faculty: 6,
        department: 5,
        qualification: 2,
        currentDegree: 4,
        dateOfObtaining: null,
      },
      {
        id: "3",
        firstName: "عبدالحميد",
        fatherName: "",
        lastName: "الواعر",
        email: "alwaer@uot.edu.ly",
        nationality: 1,
        faculty: 6,
        department: 5,
        qualification: 2,
        currentDegree: 4,
        dateOfObtaining: null,
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
});
