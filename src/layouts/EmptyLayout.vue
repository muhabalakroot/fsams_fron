<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="bg-grey-lighten-1"></v-app-bar>
    <v-main style="background-color: #f7f7f7">
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
    <v-footer app class="bg-grey-lighten-1" height="64px"
      ><div class="text-center w-100">
        <strong>جامعة طرابلس</strong> - {{ new Date().getFullYear() }}
      </div></v-footer
    >
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      name: "د. رضوان حسين",
    };
  },
};
</script>
