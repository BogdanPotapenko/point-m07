<template>
  <footer class="footer">
    <div id="contacts" class="contacts">
      <div class="container">
        <div class="contacts-content _anim-items">
          <div class="contacts-content-logo _anim-items">
            <img src="/logo.png" alt="logo" width="350" height="auto" />
          </div>
          <div class="contacts-content-info _anim-items">
            <h4>Point.m07</h4>
            <a
              class="contacts-link"
              to="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%AF%D0%B1%D0%BB%D1%83%D0%BD%D1%81%D1%8C%D0%BA%D0%B0,+99,+%D0%91%D1%83%D1%87%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08292/@50.5357801,30.2086798,17z/data=!3m1!4b1!4m6!3m5!1s0x472b319f10d42edb:0x14f13359e8a85e2e!8m2!3d50.5357801!4d30.2112547!16s%2Fg%2F11cpcjnxmz?entry=ttu"
              target="_blank"
              ><span>м. Буча, вул. Яблунська 99</span>
            </a>
            <p>Пн - Сб з 9:00 по 18:00</p>
            <p>Нд - вихідний</p>
          </div>
          <address class="contacts-content-contacts _anim-items">
            <h4>Контакти</h4>
            <a class="contacts-link" href="tel:0990000000" target="_blank"
              ><span>+390 (99) 000 00 00</span>
            </a>
            <a
              class="contacts-link"
              href="mailto:21bogdan09@gmail.com"
              target="_blank"
              ><span>sadasdasdasdgmail@gmail.com</span>
            </a>
            <div class="contacts-content-contacts-socials">
              <a
                href="https://www.instagram.com/point.m07/?igsh=OWhnZDlhd3RhaWF5"
                target="_blank"
              >
                <img
                  class="icon"
                  src="/src/assets/icons/instagram.svg"
                  alt="instagram"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </a>
              <a href="https://web.telegram.org/k/#@kofer999" target="_blank">
                <img
                  class="icon"
                  src="/src/assets/icons/telegram.svg"
                  alt="telegram"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </a>
            </div>
          </address>
        </div>
      </div>
    </div>
    <div class="background-wrapper">
      <div class="background"></div>
    </div>
    <GoogleMap
      :api-key="apiKey"
      class="google-map"
      :center="center"
      :zoom="13"
      :styles="styles"
      :zoomControl="false"
      :mapTypeControl="false"
      :scaleControl="false"
      :streetViewControl="false"
      :rotateControl="false"
      :fullscreenControl="false"
    >
      <CustomMarker
        :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }"
      >
        <div class="pulse"></div>
      </CustomMarker>

      <a
        class="google-map-link"
        href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%AF%D0%B1%D0%BB%D1%83%D0%BD%D1%81%D1%8C%D0%BA%D0%B0,+99,+%D0%91%D1%83%D1%87%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08292/@50.5357801,30.2086798,17z/data=!3m1!4b1!4m6!3m5!1s0x472b319f10d42edb:0x14f13359e8a85e2e!8m2!3d50.5357801!4d30.2112547!16s%2Fg%2F11cpcjnxmz?entry=ttu"
        target="_blank"
      >
      </a>
    </GoogleMap>
    <div class="rights">
      <span>© 2024 POINT.M07 All rights reserved</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GoogleMap, CustomMarker } from "vue3-google-map";

const apiKey = import.meta.env.VITE_API_MAP_KEY;

const center = ref({ lat: 50.53573236551917, lng: 30.21061096980906 });

const styles = ref([
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#0e1626",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1a3646",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#64779e",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#334e87",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6f9ba5",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3C7680",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#304a7d",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c6675",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#255763",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b0d5ce",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#3a4762",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 1;
  background: $background;

  .contacts {
    position: relative;
    z-index: 1;
    padding: 60px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));

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
        transform: translate(0px, 50%);
        opacity: 0;
        transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
        -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;

        &._active {
          transform: translate(0px, 0px);
          opacity: 1;
        }

        @media screen and (max-width: 767px) {
          max-width: 250px;
        }

        img {
          width: 100%;
          min-width: 200px;
          max-width: 350px;
          transform: scale(1.1);
        }
      }
      &-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;
        transform: translate(0px, 50%);
        opacity: 0;
        transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
        -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;

        &._active {
          transform: translate(0px, 0px);
          opacity: 1;
        }
      }

      &-contacts {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;
        word-wrap: break-word;
        transform: translate(0px, 50%);
        opacity: 0;
        transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
        -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
        font-style: normal;

        &._active {
          transform: translate(0px, 0px);
          opacity: 1;
        }

        @media screen and (max-width: 767px) {
          max-width: 100%;
          align-items: center;
        }

        &-socials {
          display: flex;
          gap: 10px;

          .icon {
            width: 40px;
            height: 40px;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }

    &-link {
      display: block;

      span {
        font-weight: 600;
      }

      &::after {
        content: "";
        display: block;
        width: 0px;
        height: 2px;
        background: $white;
        margin: 2px 0;
        transition-duration: 300ms;
        -webkit-transition-duration: 300ms;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }

  .google-map {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 50vh;
    min-height: 300px;
    overflow: hidden;

    &-link {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
    }

    .pulse {
      position: relative;
      text-align: center;
      padding: 7px;
      border-radius: 50%;
      background: #3d64ff;

      &::after,
      &::before {
        content: "";
        position: absolute;
        border: 2px solid #3d64ff;
        left: -15px;
        opacity: 0;
        right: -15px;
        top: -15px;
        bottom: -15px;
        border-radius: 50%;
        animation: pulse 2.5s linear infinite;
      }

      &::after {
        animation-delay: 1.25s;
      }
    }
  }
  .rights {
    position: absolute;
    bottom: 16px;
    right: 0;
    z-index: 3;
    padding: 0 5px;
    background: $white;
    opacity: 0.7;
    text-align: center;
    span {
      font-size: 10px;
      line-height: 10px;
      color: $black;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
