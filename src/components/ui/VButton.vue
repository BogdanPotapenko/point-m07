<template>
  <button class="button" :disabled="disabled">{{ value }}</button>
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
  transition: all 0.4s;

  &:hover {
    background: $primary;
    color: $background;
  }

  &:disabled {
    background: $gray100;
    color: $gray200;
    cursor: default;
  }
}
</style>
