<template>
  <button class="button" :aria-label="value" :disabled="disabled">
    <span> {{ value }}</span>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  value: string;
  disabled?: boolean;
}>();
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  padding: 12px 20px;
  background: $background;
  border: 1px solid $primary;
  border-radius: 30px;
  color: $white;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    background-color: $primary;
    color: $background;
  }

  &:disabled {
    background-color: $gray100;
    color: $gray200;
    cursor: default;
  }
}
</style>
