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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="12"
          fill="none"
          viewBox="0 0 6 12"
        >
          <path
            fill="#1A1A1A"
            fill-rule="evenodd"
            d="M.333 6.002c0 .167.063.32.165.436l3.992 4.658a.665.665 0 001.177-.43.664.664 0 00-.16-.433L1.877 6l3.625-4.228A.667.667 0 104.494.9l-4 4.666-.004.005a.664.664 0 00-.156.425v.006z"
            clip-rule="evenodd"
          />
        </svg>
      </template>

      <template #arrow-right>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="12"
          fill="none"
          viewBox="0 0 6 12"
        >
          <path
            fill="#1A1A1A"
            fill-rule="evenodd"
            d="M5.667 6.002c0 .167-.062.32-.164.436L1.51 11.096a.665.665 0 01-1.177-.43c0-.165.06-.316.161-.433L4.122 6 .498 1.772A.667.667 0 111.507.9l4 4.666.003.005a.664.664 0 01.157.425v.006z"
            clip-rule="evenodd"
          />
        </svg>
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
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "news-promotion-header",
  data: () => {
    const slides = [
      {
        title: `<img src=${require("../assets/images/logo_nike_snkrs.svg")}>`,
        content: "xablau",
      },
      {
        title: `<img src=${require("../assets/images/logo_nike_snkrs.svg")}>`,
        content: "xablau",
      },
      {
        title: "xablau",
        content: "xablau description",
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
  color: #0a0000;
}
.vueperslides__arrow--next {
  right: 2.5rem;
}

.vueperslides__arrow--prev {
  left: 2.5rem;
}
.vueperslides__arrow {
  background: #ffffff;
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
