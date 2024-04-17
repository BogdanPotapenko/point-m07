<template>
  <div class="card">
    <h3 class="card-tilte">{{ tilte }}</h3>
    <div class="card-prices">
      <div v-for="(price, i) in prices" :key="i">
        <p>{{ price }}</p>
      </div>
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
  tilte: string;
  prices: string[];
  warning?: string;
}>();
</script>

<style lang="scss" scoped>
.card {
  max-width: 250px;
  background: #6f6f6f80;
  text-align: center;
  padding: 35px 25px;
  color: $white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &-tilte {
    text-transform: uppercase;
    padding-bottom: 10px;
    border-bottom: solid 2px $primary;
  }
  &-prices {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: solid 2px $primary;
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
