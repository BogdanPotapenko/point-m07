<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <h2 class="contacts-title">Contacts</h2>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contacts {
  padding: 0 calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  height: 1000px;

  &-title {
    text-align: center;
  }
}
</style>
