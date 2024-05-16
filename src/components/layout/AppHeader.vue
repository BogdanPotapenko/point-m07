<template>
  <header class="header" :class="{ 'header-scroll': header }">
    <div class="header-container">
      <div class="header-logo _anim-items">
        <a href="https://bogdanpotapenko.github.io/point-m07/">
          <img src="/src/assets/img/logo.png" alt=""
        /></a>
      </div>

      <div class="header-content">
        <div @click="showMenu = !showMenu" class="header-content-button">
          <div class="button-el" :class="{ show: showMenu }"></div>
        </div>

        <nav class="navbar _anim-items" :class="{ show: showMenu }">
          <ul class="navbar-list">
            <li>
              <a class="navbar-list-link" @click="scrollToSection(about)"
                >Про нас</a
              >
            </li>
            <li>
              <a class="navbar-list-link" @click="scrollToSection(services)"
                >Послуги</a
              >
            </li>
            <li>
              <a class="navbar-list-link" @click="scrollToSection(price)"
                >Ціни</a
              >
            </li>
            <li>
              <a class="navbar-list-link" @click="scrollToSection(contacts)"
                >Контакти</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const about = ref();
const services = ref();
const price = ref();
const contacts = ref();
const callback = ref();

const showMenu = ref(false);

const header = ref(false);

onMounted(() => {
  about.value = document.getElementById("about");
  services.value = document.getElementById("services");
  price.value = document.getElementById("price");
  callback.value = document.getElementById("callback");
  contacts.value = document.getElementById("contacts");
});

const scrollToSection = (el: HTMLElement) => {
  if (showMenu.value) showMenu.value = false;
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    header.value = false;
  } else if (header.value === false && window.scrollY > 0) {
    header.value = true;
  }
});

watch(showMenu, () => {
  if (showMenu.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: $background;
  padding: 0 calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 0;
    height: 1px;
    background: $primary;
    transition-duration: 500ms;
    -webkit-transition-duration: 500ms;
  }

  &-scroll {
    &::after {
      content: "";
      width: 100%;
    }
  }

  &-container {
    max-width: 1440px;
    margin: 0 auto;
    min-height: 60px;
    height: 60px;
    display: grid;
    gap: 15px;
    padding: 5px 0;
    align-items: center;
    grid-template-columns: auto 1fr;

    @media screen and (max-width: 767px) {
      grid-template-columns: auto auto;
    }
  }
  &-logo {
    height: 50px;
    position: relative;
    z-index: 11;

    transform: translate(0px, -20%);
    opacity: 0;
    transition: all 0.8s ease 0.4s;
    -webkit-transition: all 0.8s ease 0.4s;

    &._active {
      transform: translate(0px, 0px);
      opacity: 1;
    }

    img {
      width: auto;
      height: 100%;
    }
  }
  &-content {
    justify-self: end;

    &-button {
      display: none;

      @media screen and (max-width: 767px) {
        display: block;
        width: 30px;
        position: relative;
        z-index: 11;
        padding: 10px 0;
      }

      .button-el {
        width: 30px;
        height: 3px;
        transition-duration: 500ms;
        -webkit-transition-duration: 500ms;
        background: $white;
        border-radius: 2px;

        &::before,
        &::after {
          content: "";
          width: 30px;
          height: 3px;
          position: absolute;
          left: 0;
          border-radius: 2px;
          transition-duration: 500ms;
          -webkit-transition-duration: 500ms;
          background: $white;
        }

        &::before {
          top: 0;
        }
        &::after {
          bottom: 0;
        }

        &.show {
          transition-property: none;
          -webkit-transition-property: none;
          background: transparent;

          &::before,
          &::after {
            top: 50%;
            transform: translateY(50%);
            bottom: auto;
          }

          &::before {
            transform: rotate(-45deg);
          }
          &::after {
            transform: rotate(45deg);
          }
        }
      }
    }

    .navbar {
      @media screen and (min-width: 768px) {
        transform: translate(0px, -20%);
        opacity: 0;
        transition: transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s;
        -webkit-transition: transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s;

        &._active {
          transform: translate(0px, 0px);
          opacity: 1;
        }
      }
      @media screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 100%;
        padding: 100px 60px 30px 30px;
        overflow: auto;
        background: $secondary;
        transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;

        &.show {
          left: 0;
        }

        &::before {
          content: "";
          width: 100%;
          height: 60px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          background: $background;
        }
      }
      &-list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: end;
        column-gap: 60px;
        row-gap: 30px;
        font-size: 16px;
        line-height: 16px;
        text-transform: uppercase;

        @media screen and (max-width: 1440px) {
          column-gap: calc(30px + (60 - 30) * ((100vw - 768px) / (1440 - 768)));
        }

        @media screen and (max-width: 767px) {
          flex-direction: column;

          font-size: 30px;
          line-height: 30px;
        }
        &-link {
          display: block;
          margin: 3px 0;

          &::before,
          &::after {
            content: "";
            display: block;
            width: 0px;
            height: 1px;
            background: $white;
            margin: 2px 0;
            transition-duration: 300ms;
          }

          &:hover {
            &::before,
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
