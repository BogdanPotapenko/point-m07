<template>
  <figure class="service-card">
    <figcaption class="service-card-content">
      <h3 class="service-card-title">{{ service.title }}</h3>
    </figcaption>

    <img class="service-card-img" :src="service.img" :alt="service.title" />
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  service: any;
}>();
</script>

<style lang="scss" scoped>
.service-card {
  position: relative;
  margin: 10px;
  max-width: 1000px;
  width: 100%;
  color: $white;
  text-align: left;
  background-color: $background;
  font-size: 16px;

  & * {
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
  }

  &-img {
    position: relative;
    width: 100%;
    vertical-align: top;
  }

  &-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    padding: calc(5% + (100 - 5) * ((100vw - 320px) / (1440 - 320)));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: auto;

    @media screen and (min-width: 1440px) {
      padding: 200px;
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
      background-color: $primary;
      z-index: 1;
      -webkit-transition: all 0.4s ease-in;
      transition: all 0.4s ease-in;
      opacity: 0.8;
      width: 1px;
      height: 0;
    }
    &:before {
      right: 0;
      top: 0;
    }
    &:after {
      left: 0;
      bottom: 0;
    }
  }

  &-title {
    font-weight: 700;
    text-transform: uppercase;
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    background-color: $primary;
    z-index: 1;
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
    opacity: 0.8;
  }
  &:before,
  &:after {
    height: 1px;
    width: 0%;
  }
  &:before {
    top: 0;
    left: 0;
  }
  &:after {
    bottom: 0;
    right: 0;
  }
  &.hover {
    .service-card-img {
      opacity: 0.2;
      transform: scale(0.9);
    }

    .service-card-content {
      opacity: 1;

      &:before,
      &:after {
        opacity: 0.2;
        height: 100%;
      }
    }

    &:before,
    &:after {
      width: 100%;
    }

    &:before,
    &:after {
      opacity: 0.2;
    }
  }
}
</style>
