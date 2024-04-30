<template>
  <div class="loader"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  background-color: $background;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/img/logo.png");
  background-repeat: no-repeat;
  background-size: 200px;
  background-position-y: center;
  background-position-x: -250px;
  opacity: 0;
  visibility: hidden;
  animation: load 0.8s linear;
}
@keyframes load {
  0% {
    background-position-x: 100vw;
    visibility: visible;
    opacity: 1;
  }
  50% {
    background-position-x: -250px;
    opacity: 1;
  }
  100% {
    background-position-x: -250px;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
