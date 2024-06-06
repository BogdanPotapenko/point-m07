<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-body">
        <div class="about-body-content">
          <h2 class="about-body-content-title _anim-items">Про нас</h2>
          <p class="about-body-content-text _anim-items">
            Ласкаво просимо до Point.m07, провідної служби деталізації
            автомобілів в Україні. З пристрастю до досконалості ми прагнемо
            надати першокласні послуги з обробки деталей, щоб ваш автомобіль
            виглядав якнайкраще.
          </p>
          <p class="about-body-content-text _anim-items">
            Наша команда кваліфікованих професіоналів прагне досягти виняткових
            результатів, використовуючи новітні технології та високоякісні
            продукти. Довіртеся Point.m07 для всіх потреб вашого автомобіля.
          </p>
        </div>
        <img
          class="about-body-img _anim-items"
          src="/clean_car.jpg"
          alt="img"
          width="750"
          height="auto"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
  position: relative;
  padding: 60px calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
  background: $secondary;

  &-body {
    width: 100%;
    display: flex;
    gap: 50px;

    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }

    &-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 20px;

      padding: 30px 0;

      @media screen and (max-width: 1023px) {
        width: 80%;
        margin: 0 auto;
        padding: 0;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }

      &-title {
        text-align: center;
        margin-bottom: 10px;
        transform: translate(0px, 150%);
        opacity: 0;
        transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;
        -webkit-transition: transform 0.8s ease 0s, opacity 0.8s ease 0s;

        &._active {
          transform: translate(0px, 0px);
          opacity: 1;
        }
      }

      &-text {
        font-size: calc(14px + (22 - 14) * ((100vw - 320px) / (1440 - 320)));
        line-height: 130%;
        transform: translate(0px, 150%);
        opacity: 0;
        transition: transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s;
        -webkit-transition: transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s;

        &._active {
          transform: translate(0px, 0px);
          opacity: 1;
        }

        @media screen and (min-width: 1440px) {
          font-size: 22px;
        }
      }
    }

    &-img {
      display: block;
      width: 50%;
      opacity: 0;
      transition: opacity 0.8s ease 0.4s;
      -webkit-transition: opacity 0.8s ease 0.4s;

      &._active {
        opacity: 1;
      }

      @media screen and (max-width: 1023px) {
        width: 80%;
        margin: 0 auto;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }
}
</style>
