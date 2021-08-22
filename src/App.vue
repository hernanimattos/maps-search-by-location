<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
html {
  font-family: "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button,
input,
select {
  outline: none;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
body {
  font-size: 1.4rem;
  line-height: 2rem;
}
</style>
