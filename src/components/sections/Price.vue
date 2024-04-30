<template>
  <section id="price" class="price">
    <div class="container">
      <div class="price-content">
        <v-accordion
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
import VAccordion from "../ui/VAccordion.vue";

const services = ref([
  {
    title: "полірування",
    img: "poliruvanna.png",
    prices: [
      { type: "Полірування авто", price: 3000 },
      { type: "Полірування фар", price: 500 },
      { type: "Полірування одного елементу", price: 300 },
    ],
  },
  {
    title: "плівка",
    img: "plivka.png",
    prices: [{ type: "Поклейка фар", price: 1500 }],
  },
  {
    title: "хімчистка",
    img: "optika.png",
    prices: [{ type: "Хімчистка авто", price: 1000 }],
  },
]);
</script>

<style lang="scss" scoped>
.price {
  position: relative;
  padding: 200px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));

  &::before,
  &::after {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
  }

  &::before {
    content: "";
    top: -1px;
    background: linear-gradient(
      to bottom,
      $background 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &::after {
    content: "";
    bottom: -1px;
    background: linear-gradient(to top, $background 0%, rgba(0, 0, 0, 0) 100%);
  }

  &-content {
    position: relative;
    z-index: 1;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
