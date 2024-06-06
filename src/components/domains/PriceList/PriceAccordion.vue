<template>
  <div class="accordion">
    <div class="accordion-header" @click="active = !active">
      <div class="accordion-img">
        <img :src="service.icon" :alt="service.title" width="58" height="58" />
      </div>
      <h3 class="accordion-title">{{ service.title }}</h3>
      <button
        class="accordion-dagger"
        :aria-label="service.title"
        :class="{ active: active }"
      ></button>
    </div>
    <div class="accordion-body body" :class="{ active: active }">
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
.accordion {
  position: relative;
  max-width: 1000px;
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

    @media screen and (min-width: 1024px) {
      &:hover {
        .accordion-img {
          img {
            transform: scale(1.2);
          }
        }
      }
    }
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
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.4s;
      -webkit-transition: all 0.4s;
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
      transition: all 0.5s;
      -webkit-transition: all 0.5s;
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
    margin: -1px 25px 0px 45px;
    max-height: 0;
    border: solid 1px $primary;
    border-top: none;
    border-radius: 0px 0px 20px 20px;
    background: $background;
    visibility: hidden;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    overflow: hidden;

    &.active {
      max-height: 600px;
      visibility: visible;
      transition: all 1s;
      -webkit-transition: all 1s;

      .body-content {
        opacity: 1;
      }
    }

    .body-content {
      padding: 20px;
      max-height: 750px;
      transition: opacity 0.5s;
      -webkit-transition: opacity 0.5s;
      opacity: 0;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }

      &-row {
        display: flex;
        justify-content: space-between;
        gap: calc(10px + (30 - 10) * ((100vw - 320px) / (1120)));
        padding: 10px 0;
        border-bottom: 1px solid $white;
        font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1120)));
        overflow-y: auto;

        @media screen and (min-width: 1440px) {
          font-size: 20px;
        }

        &-price {
          text-wrap: nowrap;
        }
      }
    }
  }
}
</style>
