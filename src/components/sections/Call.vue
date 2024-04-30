<template>
  <section id="call" class="call">
    <div class="container">
      <h2 class="call-title">ОТРИМАЙТЕ КОНСУЛЬТАЦІЮ</h2>
      <form class="call-form" @submit.prevent="onSubmit">
        <Vinput label="name" type="text" placeholder="імя" v-model="name" />
        <Vinput
          label="phone"
          type="number"
          placeholder="Телефон"
          v-model="phone"
        />
        <VButton value="відправити" :disabled="!buttonDisabled" />
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import VButton from "../ui/VButton.vue";
import Vinput from "../ui/Vinput.vue";

const name = ref("");
const phone = ref("");

const onSubmit = async () => {
  const formData = { name: "", phone: "" };

  formData.name = name.value;
  formData.phone = phone.value;

  try {
    await console.log(formData);
    name.value = "";
    phone.value = "";
  } catch (e) {
    console.log(e);
  }
};

const buttonDisabled = computed(
  () => name.value.length >= 1 && phone.value.length >= 10
);
</script>

<style lang="scss" scoped>
.call {
  position: relative;
  padding: 60px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  background: $background;

  &-title {
    text-align: center;
    padding-bottom: 30px;
  }
  &-form {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: calc(20px + (50 - 20) * ((100vw - 320px) / (1440 - 320)));
    border: solid 1px $primary;
    border-radius: 20px;

    @media screen and (min-width: 1440px) {
      padding: 50px;
    }
  }
}
</style>
