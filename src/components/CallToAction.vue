<template>
  <article class="call-to-action">
    <slot name="top" v-html="top">
      <h3 class="top">{{ top }}</h3>
    </slot>

    <slot name="description" v-html="description">
      <div class="description">{{ description }}</div>
    </slot>

    <slot name="bottom" v-html="bottom">
      <input type="button" :value="bottom" />
    </slot>
  </article>
</template>

<script>
export default {
  name: "call-to-action",

  props: {
    top: {
      type: String,
      default: "texto para o top ",
    },
    description: {
      type: String,
      default: "Espaco para descricao ",
    },
    bottom: {
      type: String,
      default: "description ",
    },
  },
};
</script>

<style>
.call-to-action {
  text-align: center;
  color: var(--black);
  padding: 7.2rem 2.3rem 6.4rem 2.3rem;
  padding-bottom: 6.4rem;
  background-color: var(--bg-gray);
}

.call-to-action .top {
  font-size: 2.4rem;
  margin: 2.4rem 0 2.4rem 0;
}

.call-to-action .description {
  line-height: 2.4rem;
  font-size: 1.6rem;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
}

.title {
  font-weight: 500;
  line-height: 3.4rem;
}

.text-description {
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 3rem;
}

.call-to-action input {
  color: var(--white);
  background-color: var(--black);
  padding: 1.6rem 2.4rem 1.6rem 2.4rem;
  border-radius: 30px;
  font-size: 1.6rem;
  font-weight: 700;
}
</style>
