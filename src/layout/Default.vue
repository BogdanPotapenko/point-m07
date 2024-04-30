<template>
  <div class="wrapper">
    <app-loader />
    <app-header />
    <div class="main">
      <hero />
      <services />
      <price />
      <call />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppLoader from "../components/layout/AppLoader.vue";
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
import Hero from "../components/sections/Hero.vue";
import Services from "../components/sections/Services.vue";
import Price from "../components/sections/Price.vue";
import Call from "../components/sections/Call.vue";
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
  position: relative;
  z-index: 1;
  background: $background;
  overflow: hidden;
}
</style>
