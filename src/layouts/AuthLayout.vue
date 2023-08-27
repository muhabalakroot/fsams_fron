<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="bg-grey-lighten-1"></v-app-bar>

    <v-main style="background-color: #f7f7f7">
      <v-container class="h-100">
        <v-card><slot></slot></v-card>
      </v-container>
    </v-main>

    <FacultyMembeNavigationDrawer
      v-if="
        userRole == 'faculty-member' &&
        $route.name !== 'ApplicationPersonaInfo' &&
        $route.name !== 'ApplicationAcadimecInfo' &&
        $route.name !== 'ApplicationScientificPaper' &&
        $route.name !== 'ApplicationAttachment' &&
        $route.name !== 'ApplicationReview'
      "
    ></FacultyMembeNavigationDrawer>

    <DepartmentHead
      v-else-if="
        userRole == 'department-head' &&
        $route.name !== 'ApplicationPersonaInfo' &&
        $route.name !== 'ApplicationAcadimecInfo' &&
        $route.name !== 'ApplicationScientificPaper' &&
        $route.name !== 'ApplicationAttachment'
      "
    ></DepartmentHead>

    <FacultyAffairsOffice
      v-else-if="
        userRole == 'faculty-affairs-office' &&
        $route.name !== 'ApplicationPersonaInfo' &&
        $route.name !== 'ApplicationAcadimecInfo' &&
        $route.name !== 'ApplicationScientificPaper' &&
        $route.name !== 'ApplicationAttachment'
      "
    ></FacultyAffairsOffice>

    <FacultyMembeApplicationNavigationDrawer
      v-else-if="
        userRole == 'faculty-member' ||
        userRole == 'department-head' ||
        userRole == 'faculty-affairs-office' ||
        ($route.name !== 'ApplicationManagement' &&
          $route.name !== 'Main' &&
          $route.name !== 'FacultyMembersManagment' &&
          $route.name !== 'UserInfo')
      "
    ></FacultyMembeApplicationNavigationDrawer>
    <TheFooter></TheFooter>
  </v-layout>
</template>
<script>
import DepartmentHead from "@/components/NavigationDrawer/DepartmentHead.vue";
import FacultyMembeApplicationNavigationDrawer from "@/components/NavigationDrawer/FacultyMemberApplication.vue";
import FacultyMembeNavigationDrawer from "@/components/NavigationDrawer/FacultyMember.vue";
import FacultyAffairsOffice from "@/components/NavigationDrawer/FacultyAffairsOffice.vue";
import TheFooter from "@/components/ui/Thefooter.vue";

import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";
export default {
  components: {
    TheFooter,
    FacultyMembeNavigationDrawer,
    FacultyMembeApplicationNavigationDrawer,
    DepartmentHead,
    FacultyAffairsOffice,
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
