<template>
  <section id="hero" class="hero">
    <span class="top"></span>
    <div class="container">
      <div class="hero-content">
        <h1>Point.m07</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tempore voluptatibus recusandae cum eligendi dolore, et dolores
          ratione sed unde magnam quaerat ipsa cupiditate odio! Corporis amet
          laborum quod eligendi.
        </p>
      </div>
    </div>
    <span class="bottom"></span>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  background-attachment: inherit;
  background-size: cover;
  background-color: rgba(51, 54, 68, 0.5);
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: "";
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    background: url(/src/assets/img/hero.jpg) no-repeat 50%;
    background-size: cover;
  }

  & .top {
    content: "";
    width: 100%;
    position: fixed;
    left: 0;
    top: 58px;
    height: 50vh;
    background: linear-gradient(
      to bottom,
      rgba(51, 54, 68, 1) 0%,
      rgba(51, 54, 68, 0) 100%
    );
  }

  & .bottom {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 50vh;
    background: linear-gradient(
      to top,
      rgba(51, 54, 68, 1) 0%,
      rgba(51, 54, 68, 0) 100%
    );
  }

  &-content {
    position: relative;
    z-index: 1;
    color: white;
    margin-top: -5vh;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
