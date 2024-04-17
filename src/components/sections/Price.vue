<template>
  <section id="price" class="price">
    <div class="container">
      <h2 class="price-title">Price list</h2>
      <div class="price-list">
        <price-card
          tilte="полірування"
          :prices="[
            'Полірування авто - від 3000грн',
            'Полірування фар - від 500грн',
            'Полірування одного елементу - від 300грн',
          ]"
        />
        <price-card
          tilte="плівка"
          :prices="['Поклейка фар - від 1500грн']"
          warning="Поклейка авто в плівку і її ціна обговорюється при зустрічі або по телефону."
        />
        <price-card
          tilte="хімчистка"
          :prices="['Хімчистка авто - від 1000грн']"
          warning="Всі ціни обговорюються при огляді автомобіля, після цього авто береться
        в роботу."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PriceCard from "../domains/PriceList/PriceCard.vue";
</script>

<style lang="scss" scoped>
.price {
  padding: 0 calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));

  &-title {
    text-align: center;
  }
  &-list {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
