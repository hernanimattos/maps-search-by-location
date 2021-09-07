<template>
  <article>
    <vueper-slides
      :bullets="false"
      fixed-height="5.4rem"
      class="no-shadow"
      :style="'background: #F7F7F7'"
      slide-image-inside
    >
      <template #arrow-left>
        <img src="../assets/images/icons/icon_seta_esquerda.svg" alt="" />
      </template>

      <template #arrow-right>
        <img src="../assets/images/icons/icon_seta_direita.svg" alt="" />
      </template>
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :style="'box-shadow:unset'"
        lazy
      />
    </vueper-slides>
  </article>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
  name: 'news-promotion-header',
  data: () => {
    const slides = [
      {
        title: `<img src=${require('../assets/images/logos/logo_nike_snkrs.svg')}>`,
        content: 'xablau',
      },
      {
        title: `<img src=${require('../assets/images/logos/logo_nike_snkrs.svg')}>`,
        content: 'xablau',
      },
      {
        title: 'xablau',
        content: 'xablau description',
      },
    ];

    return {
      slides,
    };
  },
  components: { VueperSlides, VueperSlide },
};
</script>

<style>
.vueperslides__arrows {
  color: var(--black);
}
.vueperslides__arrow--next {
  right: 2.5rem;
}

.vueperslides__arrow--prev {
  left: 2.5rem;
}
.vueperslides__arrow {
  background: var(--white);
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vueperslides__arrow svg {
  padding: unset;
  vertical-align: middle;
  stroke: currentColor;
  width: 2rem;
  stroke-width: 0;
}

.vueperslides__parallax-wrapper {
  height: 5rem;
}
.vueperslide__title img {
  width: 2rem;
}

/* .vueperslides__parallax-wrapper {
  box-shadow: unset;
} */
</style>
