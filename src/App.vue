<template>
  <v-locale-provider rtl>
    <component :is="this.$route.meta.layout">
      <router-view />
    </component>
  </v-locale-provider>
</template>

<script setup>
//
</script>
