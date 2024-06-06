<template>
  <div class="loader">
    <img
      class="loader-logo"
      src="/logo.png"
      alt="logo"
      width="200"
      height="auto"
    />
  </div>
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
  opacity: 0;
  visibility: hidden;
  animation: load 1s linear 0s;

  &-logo {
    max-width: 30vw;
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(100vw, -50%);
    animation: load-logo 0.5s linear 0s;
  }
}
@keyframes load {
  0% {
    visibility: visible;
    opacity: 1;
  }
  50% {
    visibility: visible;
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes load-logo {
  0% {
    transform: translate(100vw, -50%);
  }
  100% {
    transform: translate(-300px, -50%);
  }
}
</style>
