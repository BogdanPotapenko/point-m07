<template>
  <section id="hero" class="hero background">
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
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  padding: 0px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));

  &-content {
    position: relative;
    z-index: 2;
    color: white;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
