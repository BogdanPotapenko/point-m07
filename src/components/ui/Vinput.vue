<template>
  <label :for="label" class="input-container">
    <input
      :oninput="oninput"
      :autocomplete="label"
      :id="label"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="updateValue"
      required
      class="input"
      :class="{
        'input-valid': modelValue.length,
      }"
    />
  </label>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

defineProps<{
  label: string;
  type: string;
  placeholder: string;
  modelValue: string;
  oninput?: string;
}>();

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  width: 100%;
  border-radius: 30px;
  background: $background;
  color: $white;

  .input {
    width: 100%;
    padding: 12px 20px;
    border: 1px solid $primary;
    border-radius: 30px;
    font-size: 16px;

    &::placeholder {
      font-size: 14px;
      color: inherit;
    }

    &-valid {
      padding: 11px 20px;
      border: 2px solid $primary;
    }
    &:focus {
      outline: none;
      padding: 11px 20px;
      border: 2px solid $primary;
    }
  }
}
</style>
