<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="services-title _anim-items">Наші послуги</h2>
      <div class="services-body">
        <service-card
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ServiceCard from "../domains/services/ServiceCard.vue";

const services = ref([
  {
    title: "полірування",
    img: "plies_ceramic.jpg",
    prices: [
      { type: "Полірування авто", price: 3000 },
      { type: "Полірування фар", price: 500 },
      { type: "Полірування одного елементу", price: 300 },
    ],
  },
  {
    title: "плівка",
    img: "polishing_car.jpg",
    prices: [{ type: "Поклейка фар", price: 1500 }],
  },
  {
    title: "хімчистка",
    img: "spraying_car.jpg",
    prices: [{ type: "Хімчистка авто", price: 1000 }],
  },
]);

window.addEventListener("scroll", () => {
  if (document.querySelectorAll(".service-card")) {
    function _() {
      let e = document.querySelectorAll(".service-card");
      window.screen.width > 319 &&
        e.forEach((e) => {
          let s = e.getBoundingClientRect().top;
          if (s < window.screen.height / 2 && s > -50) {
            e.classList.add("hover");
          } else {
            e.classList.remove("hover");
          }
        });
    }
    document.addEventListener("scroll", _),
      window.addEventListener("resize", _);
  }
});
</script>

<style lang="scss" scoped>
.services {
  position: relative;
  padding: 60px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  background: $background;

  &-title {
    text-align: center;
    margin-bottom: 30px;
    transform: translate(0px, 150%);
    opacity: 0;
    transition: all 0.8s ease 0s;
    -webkit-transition: all 0.8s ease 0s;

    &._active {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
  &-body {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>
