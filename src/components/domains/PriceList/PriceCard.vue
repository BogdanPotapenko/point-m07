<template>
  <div class="card">
    <h2 class="card-title">Price list</h2>
    <div class="card-content" v-for="(price, i) in prices" :key="i">
      <h3 class="card-content-title">{{ price.title }}</h3>
      <p v-for="(text, i) in price.text" :key="i">{{ text }}</p>
    </div>

    <div v-if="warning" class="card-warning">
      <h4>Увага!</h4>
      <p>
        {{ warning }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  prices: any;
  warning?: string;
}>();
</script>

<style lang="scss" scoped>
.card {
  max-width: 100%;
  background: #6f6f6f;
  text-align: center;
  padding: 35px 25px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 10px;

    &-title {
      max-width: 100%;
      text-transform: uppercase;
      padding-top: 10px;
      border-top: solid 2px $primary;
    }
  }
  &-warning {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: solid 2px $primary;
  }
}
</style>
