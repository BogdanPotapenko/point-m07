<template>
  <label :for="label" class="input-container">
    <input
      :type="type"
      :id="label"
      :value="modelValue"
      :placeholder="label"
      @input="updateValue"
      class="input"
      :class="{
        'input-valid': modelValue.length,
        'input-error': modelValue.length && error,
      }"
    />

    <span v-if="error && modelValue.length" class="error">
      {{ error }}
    </span>
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
  error?: string;
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

  margin-bottom: 30px;
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
      opacity: 0.8;
    }

    &-error {
      border: 1px solid $error;
      color: $error;
    }

    &:focus {
      outline: none;
      opacity: 0.8;
    }
  }
  .error {
    position: absolute;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);
    bottom: -30px;
    color: $error;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
