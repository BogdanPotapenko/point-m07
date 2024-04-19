<template>
  <div class="wrapper">
    <app-header />
    <div class="main">
      <hero />
      <services />
      <price />
      <contacts />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
import Hero from "../components/sections/Hero.vue";
import Services from "../components/sections/Services.vue";
import Price from "../components/sections/Price.vue";
import Contacts from "../components/sections/Contacts.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  flex: 1 1 auto;
}
</style>
