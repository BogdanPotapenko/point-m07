<template>
  <section id="price" class="price background">
    <div class="container">
      <div class="price-content">
        <price-card
          tilte="полірування"
          :prices="prices"
          warning="Поклейка авто в плівку і її ціна обговорюється при зустрічі або по телефону."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PriceCard from "../domains/PriceList/PriceCard.vue";

const prices = ref([
  {
    title: "полірування",
    text: [
      "Полірування авто - від 3000грн",
      "Полірування фар - від 500грн",
      "Полірування одного елементу - від 300грн",
    ],
  },
  {
    title: "плівка",
    text: ["Поклейка фар - від 1500грн"],
  },
  {
    title: "хімчистка",
    text: ["Хімчистка авто - від 1000грн"],
  },
]);
</script>

<style lang="scss" scoped>
.price {
  padding: 150px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));

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
