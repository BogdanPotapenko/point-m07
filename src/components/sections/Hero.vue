<template>
  <section id="hero" class="hero">
    <div class="container">
      <h2 class="hero-title">About</h2>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero {
  padding: 0 calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  height: 1000px;

  &-title {
    text-align: center;
  }
}
</style>
