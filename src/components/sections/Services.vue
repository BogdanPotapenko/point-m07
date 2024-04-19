<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="services-title">Services</h2>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.services {
  position: relative;
  padding: 60px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  height: 1000px;
  background: $background;

  &-title {
    text-align: center;
  }
}
</style>
