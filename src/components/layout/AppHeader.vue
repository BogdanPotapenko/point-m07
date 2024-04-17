<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo">POINT.M07</div>

      <div class="header-content">
        <div @click="activeMenu = !activeMenu" class="header-content-button">
          <div class="button-el" :class="{ active: activeMenu }"></div>
        </div>

        <nav class="header-content-navbar" :class="{ active: activeMenu }">
          <ul class="header-content-navbar-list">
            <li>
              <a class="link" @click="click(about)">About</a>
            </li>
            <li>
              <a class="link" @click="click(services)">Services</a>
            </li>
            <li>
              <a class="link" @click="click(price)">Price</a>
            </li>
            <li>
              <a class="link" @click="click(contacts)">Contacts</a>
            </li>
            <li>
              <a class="link" @click="click(locations)">Locations</a>
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
const locations = ref();

const activeMenu = ref(false);

onMounted(() => {
  about.value = document.getElementById("about");
  services.value = document.getElementById("services");
  price.value = document.getElementById("price");
  contacts.value = document.getElementById("contacts");
  locations.value = document.getElementById("locations");
});

const click = (el: HTMLElement) => {
  if (activeMenu.value) activeMenu.value = false;
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

watch(activeMenu, () => {
  if (activeMenu.value) {
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
  background: #464957;
  padding: 0 60px;

  &-container {
    max-width: 1440px;
    margin: 0 auto;
    min-height: 60px;
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
    position: relative;
    z-index: 11;
    color: $white;
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
        height: 4px;
        transition-duration: 500ms;
        background: $white;

        &::before,
        &::after {
          content: "";
          width: 30px;
          height: 4px;
          position: absolute;
          left: 0;
          transition-duration: 500ms;
          background: $white;
        }

        &::before {
          top: 0;
        }
        &::after {
          bottom: 0;
        }

        &.active {
          transition-property: none;
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

    &-navbar {
      @media screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 100%;
        padding: 100px 60px 30px 30px;
        overflow: auto;
        background: $background;
        transition-duration: 500ms;

        &.active {
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
          background: #464957;
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
        .link {
          display: block;
          color: $white;
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
