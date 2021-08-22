<template>
  <main class="container">
    <slot />
  </main>
</template>

<script>
export default {
  name: "container",
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
}
</style>
