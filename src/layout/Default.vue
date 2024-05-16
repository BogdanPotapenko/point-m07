<template>
  <div class="wrapper">
    <app-loader />
    <app-header />
    <div class="main">
      <hero />
      <about />
      <services />
      <price />
      <call-back />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppLoader from "../components/layout/AppLoader.vue";
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
import Hero from "../components/sections/Hero.vue";
import About from "../components/sections/About.vue";
import Services from "../components/sections/Services.vue";
import Price from "../components/sections/Price.vue";
import CallBack from "../components/sections/СallBack.vue";
import { onMounted } from "vue";

onMounted(() => {
  const animItems: NodeListOf<Element> =
    document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.clientHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          window.scrollY > animItemOffset - animItemPoint &&
          window.scrollY < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          // animItem.classList.remove("_active");
        }
      }
    }
    function offset(el: Element) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
      animOnScroll();
    }, 800);
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
  background: $background;
}
</style>
