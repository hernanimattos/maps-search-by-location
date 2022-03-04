<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import { ApplicationInsights } from '@microsoft/applicationinsights-web'

export default {
  name: 'App',
  beforeCreate: () => {

    const appInsights = new ApplicationInsights({ config: {
  instrumentationKey: '3c56c89f-43e0-4de0-9971-900ab2f3a2e1',
  enableAutoRouteTracking: true
  /* ...Other Configuration Options... */
} });
console.log(appInsights)
appInsights.loadAppInsights();
appInsights.trackPageView(); 
  }
  }

</script>

<style>
:root {
  --black: #000;
  --white: #fff;
  --gutter: 1.6rem;
  --border-field-form: #d6d6d6;
  --bg-gray: #f7f7f7;
  --gray: #737373;
}
html {
  font-family: 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
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
  color: #000;
}
body {
  font-size: 1.4rem;
  line-height: 2rem;
  color: var(--black);
}

.pdb-1rem {
  padding-bottom: 1rem;
}
</style>
