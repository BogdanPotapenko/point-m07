<template>
  <section id="price" class="price">
    <div class="container">
      <h2 class="price-title _anim-items">Наші ціни</h2>
      <div class="price-content _anim-items">
        <price-accordion
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PriceAccordion from "../domains/PriceList/PriceAccordion.vue";
import { useServices } from "../../composables/useServices";

const { data: services } = useServices();
</script>

<style lang="scss" scoped>
.price {
  position: relative;
  padding: 200px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));

  @media screen and (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 160px;
  }

  &::before,
  &::after {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    z-index: -1;
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
  &-title {
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
    transform: translate(0px, 120%);
    opacity: 0;
    transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
    -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;

    &._active {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  &-content {
    position: relative;
    z-index: 1;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    overflow-x: hidden;

    .accordion {
      transform: translate(50%, 0px);
      opacity: 0;
    }

    &._active {
      .accordion {
        transform: translate(0px, 0px);
        opacity: 1;

        @for $var from 1 to 15 {
          $delay: $var * 0.2;
          &:nth-child(#{$var}) {
            @if $var==1 {
              transition: all 0.8s ease 0s;
              -webkit-transition: all 0.8s ease 0s;
            } @else {
              transition: all 0.8s ease #{$delay + s};
              -webkit-transition: all 0.8s ease #{$delay + s};
            }
          }
        }
      }
    }
  }
}
</style>
