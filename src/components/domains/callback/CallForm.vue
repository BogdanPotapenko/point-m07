<template>
  <div class="cell-form _anim-items">
    <div class="form-submited" :class="{ submited: formSubmited }">
      <h3 class="form-title">ЗАПИТ НАДІСЛАНО</h3>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </div>
    <form
      class="form"
      :class="{ submited: formSubmited }"
      @submit.prevent="onSubmit"
    >
      <h3 class="form-title _anim-items">ОТРИМАЙТЕ КОНСУЛЬТАЦІЮ</h3>
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
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import VButton from "../../ui/VButton.vue";
import Vinput from "../../ui/Vinput.vue";

const name = ref("");
const phone = ref("");

const formSubmited = ref(false);

const token = import.meta.env.VITE_API_BOT_KEY;
const chatId = "-4171691665";

const onSubmit = async () => {
  const formData = `Імя: ${name.value} %0AТелефон: ${phone.value}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${formData}`,
      {
        method: "POST",
      }
    );
    const result = await response.json();
    if (result.ok) {
      formSubmited.value = true;
      name.value = "";
      phone.value = "";
    } else {
      alert("Щось пішло не так. " + "Помилка: " + result.error_code);
    }
  } catch (e) {
    alert("Щось пішло не так. " + "Помилка: " + e);
  }
};

watch(formSubmited, () => {
  if (formSubmited.value) {
    setTimeout(() => (formSubmited.value = false), 3000);
  }
});
</script>

<style lang="scss" scoped>
.cell-form {
  max-width: 500px;
  margin: 0 auto;
  background-color: $background;
  position: relative;

  transform: scale(0);
  opacity: 0;
  transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
  -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;

  &._active {
    transform: scale(1);
    opacity: 1;
  }

  .form-submited {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease 0.1s;
    -webkit-transition: all 0.5s ease 0.1s;

    &.submited {
      opacity: 1;
      visibility: visible;

      svg path {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 0.5s ease 0.6s;
        -webkit-transition: stroke-dashoffset 0.5s ease 0.6s;
      }
    }
    svg {
      width: 120px;
      border: solid 1px $primary;
      border-radius: 100%;

      path {
        stroke-width: 3;
        stroke: $primary;
        stroke-dasharray: 34;
        stroke-dashoffset: 34;
        stroke-linecap: round;
        transition: stroke-dashoffset 0s ease 0.5s;
        -webkit-transition: stroke-dashoffset 0s ease 0.5s;
      }
    }
    &-button {
      max-width: 300px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(20px + (50 - 20) * ((100vw - 320px) / (1440 - 320)));
    padding: 50px calc(30px + (60 - 30) * ((100vw - 320px) / (1440 - 320)));
    opacity: 1;
    transition: opacity 0.5s ease 0.1s;
    -webkit-transition: opacity 0.5s ease 0.1s;

    @media screen and (min-width: 1440px) {
      padding: 50px;
      gap: 50px;
    }

    &.submited {
      opacity: 0;
    }

    &-title {
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
