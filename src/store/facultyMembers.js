// Utilities
import { defineStore } from "pinia";

export const useFacultyMembersStore = defineStore("FacultyMembers", {
  state: () => ({
    FacultyMembers: [
      {
        id: "1",
        firstName: "رضوان",
        fatherName: "عبد  الله",
        lastName: "حسين",
        email: null,
        nationality: 1,
        faculty: 6,
        department: 5,
        qualification: 2,
        currentDegree: 4,
        dateOfObtaining: null,
      },
      {
        id: "2",
        firstName: "رضوان",
        fatherName: "عبد  الله",
        lastName: "حسين",
        email: null,
        nationality: 1,
        faculty: 6,
        department: 5,
        qualification: 2,
        currentDegree: 4,
        dateOfObtaining: null,
      },
      {
        id: "3",
        firstName: "رضوان",
        fatherName: "عبد  الله",
        lastName: "حسين",
        email: null,
        nationality: 1,
        faculty: 6,
        department: 5,
        qualification: 2,
        currentDegree: 4,
        dateOfObtaining: null,
      },
    ],
  }),
});
