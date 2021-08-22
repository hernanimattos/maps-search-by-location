<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/images/logo_nike.svg" alt="" />
    </div>
    <div class="nav-bag">
      <img src="../assets/images/icon_sacola.svg" alt="" />
    </div>
    <nav class="nav-navigation">
      <div class="nav-icon">
        <div class="nav-icon--open" v-on:click="hendleClickMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="nav-paths" v-bind:class="{ open: open }">
        <ul>
          <li v-for="(item, i) in menu" :key="`${i}-${item}`">
            <router-link :to="item.to">
              <span>{{ item.path }}</span
              ><img src="../assets/images/icon_seta_direita.svg" alt=""
            /></router-link>
          </li>
        </ul>
        <div class="nav-icon--close" v-on:click="hendleClickMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="#FFF"
              d="M17.448 19.333a1.333 1.333 0 101.885-1.885L11.886 10l7.447-7.448A1.333 1.333 0 1017.448.667L10 8.114 2.552.667A1.333 1.333 0 10.667 2.552L8.114 10 .667 17.448a1.333 1.333 0 101.885 1.885L10 11.886l7.448 7.447z"
            />
          </svg>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data: () => {
    const menu = [
      {
        path: "home",
        to: "/",
      },
      {
        path: "home",
        to: "/",
      },
      {
        path: "home",
        to: "/",
      },
    ];
    return {
      open: false,
      menu,
    };
  },
  methods: {
    hendleClickMenu() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  padding: 2.3rem;
  align-items: center;
  position: relative;
  background-color: #39888c;
}

.nav .logo {
  width: 3.7rem;
}

.nav .logo img {
  width: 100%;
}

.nav-bag {
  margin-left: auto;
  padding-right: 2.3rem;
}

.nav-navigation ul {
  display: flex;
  flex-direction: column;
}

.nav-icon {
  cursor: pointer;
}

.nav-icon span {
  display: block;
  border-bottom: black 2px solid;
  width: 2rem;
  margin-bottom: 0.6rem;
}

.nav-paths {
  position: absolute;
  left: -100%;
  background-color: rgb(0, 0, 0, 60%);
  top: 0;
  width: 100%;
  display: flex;
  transition: 0.5s;
}

.nav-paths.open {
  left: 0;
}

.nav-paths ul {
  padding: 2.3rem;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.nav-paths li a span {
  /* display: block; */
}
.nav-paths li a {
  display: flex;
  padding: 1.5rem 0 1.5rem 0;
  text-decoration: none;
  width: 100%;
  flex-direction: row;
  widows: 100%;
  /* padding: 1.1rem 0 1.1rem 0; */
  /* cursor: pointer; */
}
.nav-paths li a span {
  display: block;
}
.nav-paths li a img {
  margin-left: auto;
  /* width: 20px; */
}

.nav-icon--close {
  padding: 2.3rem;
  width: 300px;
  position: relative;
  cursor: pointer;
}

.nav-icon--close svg {
  position: absolute;
  right: 2.3rem;
}
</style>
