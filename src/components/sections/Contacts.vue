<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <div class="contacts-content">
        <div class="contacts-content-logo">
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div class="contacts-content-info">
          <h5>Point.m07</h5>
          <a
            class="contacts-link"
            href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%AF%D0%B1%D0%BB%D1%83%D0%BD%D1%81%D1%8C%D0%BA%D0%B0,+99,+%D0%91%D1%83%D1%87%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08292/@50.5357801,30.2086798,17z/data=!3m1!4b1!4m6!3m5!1s0x472b319f10d42edb:0x14f13359e8a85e2e!8m2!3d50.5357801!4d30.2112547!16s%2Fg%2F11cpcjnxmz?entry=ttu"
            target="_blank"
            ><strong>м. Буча, вул. Яблунська 99</strong></a
          >
          <p>Пн - Сб з 9:00 по 18:00</p>
          <p>Нд - вихідний</p>
        </div>
        <div class="contacts-content-contacts">
          <h5>Контакти</h5>
          <a class="contacts-link" href="tel:0990000000" target="_blank"
            ><strong>+390 (99) 000 00 00</strong></a
          >
          <a
            class="contacts-link"
            href="mailto:21bogdan09@gmail.com"
            target="_blank"
            ><strong>sadasdasdasdgmail@gmail.com</strong></a
          >
          <div class="contacts-content-contacts-socials">
            <a
              href="https://www.instagram.com/point.m07/?igsh=OWhnZDlhd3RhaWF5"
              target="_blank"
            >
              <img class="icon" src="/src/assets/icons/instagram.svg" alt=""
            /></a>
            <a href="https://web.telegram.org/k/#@kofer999" target="_blank">
              <img class="icon" src="/src/assets/icons/telegram.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contacts {
  position: relative;
  padding: 60px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  background: $background;

  &-content {
    display: flex;
    justify-content: space-around;
    gap: 20px;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &-logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 30%;
      @media screen and (max-width: 767px) {
        max-width: 250px;
      }

      img {
        width: 100%;
        min-width: 20px;
        max-width: 350px;
        transform: scale(1.1);
      }
    }
    &-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 30px;
    }
    &-contacts {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 30px;
      word-wrap: break-word;

      @media screen and (max-width: 767px) {
        max-width: 100%;
        align-items: center;
      }

      &-socials {
        display: flex;
        gap: 10px;

        a {
          :hover {
            transform: scale(1.2);
          }
        }
        .icon {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  &-link {
    display: block;
    width: fit-content;

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
      &::after {
        width: 100%;
      }
    }
  }
}
</style>
