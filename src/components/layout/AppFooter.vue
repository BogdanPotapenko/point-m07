<template>
  <div id="location" class="footer">
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
      ></a>
    </GoogleMap>
    <div class="rights">
      <span>© 2024 POINT.M07 All rights reserved</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GoogleMap, CustomMarker } from "vue3-google-map";

const apiKey = import.meta.env.VITE_API_kEY;

const center = ref({ lat: 50.53573236551917, lng: 30.21061096980906 });

const styles = ref([
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d",
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
        color: "#0e1626",
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
  background: $background;

  .google-map {
    position: relative;
    width: 100%;
    height: 50vh;
    min-height: 300px;
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
      padding: 10px;
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
    max-width: 95px;
    position: absolute;
    bottom: 15px;
    right: 0;
    z-index: 3;
    background: $white;
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
