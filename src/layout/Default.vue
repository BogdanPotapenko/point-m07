<template>
  <div>
    <app-header />
    <div class="main">
      <price />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
import Price from "../components/sections/Price.vue";
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding-top: 60px;
}
</style>
