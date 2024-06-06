<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="services-title _anim-items">Наші послуги</h2>
      <div class="services-body">
        <service-card
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from "../domains/services/ServiceCard.vue";
import { useServices } from "../../composables/useServices";

const { data: services } = useServices();

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
    transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
    -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;

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
