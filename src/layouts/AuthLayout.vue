<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="bg-grey-lighten-1"></v-app-bar>

    <v-main style="background-color: #f7f7f7">
      <v-container class="h-100">
        <v-card><slot></slot></v-card>
      </v-container>
    </v-main>

    <FacultyMembeNavigationDrawer
      v-if="userRole == 'faculty-member'"
    ></FacultyMembeNavigationDrawer>

    <FacultyMembeApplicationNavigationDrawer
      v-if="userRole == 'faculty-member'"
    ></FacultyMembeApplicationNavigationDrawer>
    <DepartmentHead v-if="userRole == 'department-head'"></DepartmentHead>
    <TheFooter></TheFooter>
  </v-layout>
</template>
<script>
import DepartmentHead from "@/components/NavigationDrawer/DepartmentHead.vue";
import FacultyMembeApplicationNavigationDrawer from "@/components/NavigationDrawer/FacultyMemberApplication.vue";
import FacultyMembeNavigationDrawer from "@/components/NavigationDrawer/FacultyMember.vue";
import TheFooter from "@/components/ui/Thefooter.vue";

import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";
export default {
  components: {
    TheFooter,
    FacultyMembeNavigationDrawer,
    FacultyMembeApplicationNavigationDrawer,
    DepartmentHead,
  },
  data() {
    return {
      name: "د. رضوان حسين",
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
  },
};
</script>
