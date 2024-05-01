<template>
  <section id="call" class="call">
    <div class="container">
      <h2 class="call-title">ОТРИМАЙТЕ КОНСУЛЬТАЦІЮ</h2>
      <form class="call-form" @submit.prevent="onSubmit">
        <Vinput label="name" type="text" placeholder="Iмя" v-model="name" />
        <Vinput
          label="phone"
          type="text"
          placeholder="Телефон"
          v-model="phone"
          oninput="this.value=this.value.replace(/[^0-9]/g,'')"
        />
        <VButton value="відправити" />
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VButton from "../ui/VButton.vue";
import Vinput from "../ui/Vinput.vue";

const name = ref("");
const phone = ref("");

const token = import.meta.env.VITE_API_BOT_KEY;
const chaiId = "-4171691665";

const onSubmit = async () => {
  const formData = `Імя: ${name.value} %0AТелефон: ${phone.value}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chaiId}&text=${formData}`,
      {
        method: "POST",
      }
    );
    const result = await response.json();
    if (result.ok) {
      name.value = "";
      phone.value = "";
    }
  } catch (e) {
    console.log(e);
  }
};
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
