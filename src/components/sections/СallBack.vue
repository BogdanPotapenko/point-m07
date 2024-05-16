<template>
  <section id="callback" class="callback">
    <div class="container">
      <call-form />
    </div>
  </section>
</template>

<script setup lang="ts">
import CallForm from "../domains/callback/CallForm.vue";
</script>

<style lang="scss" scoped>
.callback {
  position: relative;
  padding: 100px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  background: $background;
  background-image: url(/src/assets/icons/bg-form.svg);
  background-color: $white;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
    background-size: 150%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $background;
    opacity: 0.6;
  }
  .container {
    position: relative;
    z-index: 2;
  }
}
</style>
