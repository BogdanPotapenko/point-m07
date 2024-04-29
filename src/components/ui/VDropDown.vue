<template>
  <div class="drop-down" @click="active = !active">
    <div class="drop-down-header">
      <div class="drop-down-img"><img :src="service.img" alt="" /></div>
      <h3 class="drop-down-title">{{ service.title }}</h3>
      <button class="drop-down-dagger" :class="{ active: active }"></button>
    </div>
    <div class="drop-down-body body" :class="{ active: active }">
      <div class="body-content">
        <div
          class="body-content-row"
          v-for="(price, index) in service.prices"
          :key="index"
        >
          <span> {{ price.type }}</span>
          <span class="body-content-row-price">{{ price.price }} грн</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps<{
  service: any;
}>();

const active = ref(false);
</script>

<style lang="scss" scoped>
.drop-down {
  position: relative;
  width: 100%;
  cursor: pointer;

  &-header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 20px 12px 70px;
    border: solid 1px $primary;
    border-radius: 30px;
    background: $background;
  }
  &-img {
    position: absolute;
    z-index: 2;
    height: 60px;
    width: 60px;
    background: $background;
    border: solid 1px $primary;
    border-radius: 50%;
    left: -1px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-dagger {
    position: relative;
    margin-left: auto;
    margin-right: 0;
    width: 8px;
    height: 8px;
    background: none;

    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 8px;
      height: 1px;
      background: $primary;
      border-radius: 1px;
      transition-duration: 500ms;
    }

    &::after {
      right: 5px;
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
    &.active {
      &::after {
        transform: rotate(-45deg);
      }
      &::before {
        transform: rotate(45deg);
      }
    }
  }
  &-body {
    padding: 0px 20px;
    margin: 0px 20px 0px 45px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    max-height: 0;
    border: solid 1px $primary;
    border-top: none;
    border-radius: 0px 0px 20px 20px;
    background: $background;
    visibility: hidden;

    &.active {
      padding: 20px 20px;
      max-height: 800px;
      visibility: visible;

      .body-content {
        opacity: 1;
      }
    }

    .body-content {
      max-height: 750px;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      opacity: 0;
      overflow-y: auto;

      &-row {
        display: flex;
        justify-content: space-between;
        gap: calc(10px + (30 - 10) * ((100vw - 320px) / (1120)));
        padding: 10px 0;
        border-bottom: 1px solid $white;
        font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1120)));
        overflow-y: auto;
        &-price {
          text-wrap: nowrap;
        }
      }
    }
  }
}
</style>
