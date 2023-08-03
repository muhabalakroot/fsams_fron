<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="bg-grey-lighten-1"></v-app-bar>

    <v-main style="background-color: #f7f7f7">
      <v-container class="h-100">
        <v-card><slot></slot></v-card>
      </v-container>
    </v-main>

    <FacultyMembeNavigationDrawer
      v-if="$route.meta.navigationDrawer == 'FacultyMember'"
    ></FacultyMembeNavigationDrawer>

    <FacultyMembeApplicationNavigationDrawer
      v-if="$route.meta.navigationDrawer == 'FacultyMemberApplication'"
    ></FacultyMembeApplicationNavigationDrawer>
    <TheFooter></TheFooter>
  </v-layout>
</template>
<script>
import FacultyMembeApplicationNavigationDrawer from "@/components/NavigationDrawer/FacultyMemberApplication.vue";
import FacultyMembeNavigationDrawer from "@/components/NavigationDrawer/FacultyMember.vue";
import TheFooter from "@/components/ui/Thefooter.vue";
export default {
  components: {
    TheFooter,
    FacultyMembeNavigationDrawer,
    FacultyMembeApplicationNavigationDrawer,
  },
  data() {
    return {
      name: "د. رضوان حسين",
    };
  },
};
</script>
