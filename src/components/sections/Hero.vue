<template>
  <section id="hero" class="hero" :class="{ visible: backgroundVisible }">
    <span class="top"></span>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-content-title _anim-items">
          Відновіть блиск <br />
          свого автомобіля
        </h1>
        <span class="hero-content-text _anim-items"
          >Експертні послуги з деталізації, які вдосконалять зовнішній вигляд
          вашого автомобіля та підвищать його вартість. Довіряйте нам
          неперевершену якість.</span
        >
        <VButton
          @click="scrollToForm"
          class="hero-content-button _anim-items"
          value="отримати дзвінок"
        />
      </div>
    </div>
    <span class="bottom"></span>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import VButton from "../ui/VButton.vue";

const backgroundVisible = ref(true);

const callback = ref();

onMounted(() => {
  callback.value = document.getElementById("callback");
});
const scrollToForm = () => {
  if (callback.value) {
    const y = callback.value.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

window.addEventListener("scroll", () => {
  if (document.body.scrollHeight < window.scrollY + window.innerHeight + 100) {
    backgroundVisible.value = false;
  } else {
    backgroundVisible.value = true;
  }
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100lvh;
  padding: 0px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  overflow: hidden;

  &.visible {
    &::before {
      content: "";
      min-height: 100%;
      display: block;
      position: fixed;
      z-index: -1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url(/src/assets/img/background.jpg);
      background-color: black;
      background-position: top 0px center;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      opacity: 0.7;

      @media screen and (max-width: 1024px) {
        background: url(/src/assets/img/background-phone.jpg);
        background-color: black;
        background-position: top -200px center;
        background-size: 100% auto;
        background-repeat: no-repeat;
      }
      @media screen and (max-width: 768px) {
        background: url(/src/assets/img/background-phone.jpg);
        background-color: black;
        background-position: top 60px center;
        background-size: 100% auto;
        background-repeat: no-repeat;
      }
    }
  }

  & .top {
    width: 100%;
    position: fixed;
    left: 0;
    top: 58px;
    height: 50vh;
    background: linear-gradient(
      to bottom,
      $background 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  & .bottom {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 50vh;
    background: linear-gradient(to top, $background 0%, rgba(0, 0, 0, 0) 100%);
  }

  &-content {
    position: relative;
    z-index: 1;
    color: white;
    margin: 0 auto;
    min-height: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 30px;

    &-title {
      // color: white;
      display: block;
      transform: translate(0px, 120%);
      opacity: 0;
      transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
      -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
      font-weight: 400;

      &._active {
        transform: translate(0px, -20px);
        opacity: 1;
      }
    }
    &-text {
      font-size: calc(17px + (23 - 17) * ((100vw - 320px) / (1440 - 320)));
      line-height: 130%;
      font-weight: 400;
      display: block;
      transform: translate(0px, 120%);
      opacity: 0;
      transition: transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s;
      -webkit-transition: transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s;

      @media screen and (min-width: 1440px) {
        font-size: 23px;
      }

      &._active {
        transform: translate(0px, -20px);
        opacity: 1;
      }
    }
    &-button {
      max-width: 300px;
      margin: 0 auto;
      transform: translate(0px, 120%);
      opacity: 0;
      transition: transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s;
      -webkit-transition: transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s;

      &._active {
        transform: translate(0px, -20px);
        opacity: 1;
        margin-top: 10px;
      }
    }
  }
}
</style>
