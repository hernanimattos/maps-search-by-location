<template>
  <main class="container">
    <navigation />
    <slot />
  </main>
</template>

<script>
import Navigation from "./navigation";
export default {
  name: "container",

  components: {
    Navigation,
  },
};
</script>

<style>
.container {
  display: flex;
  max-width: 1350px;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  position: relative;
  height: 100vw;
}
</style>
