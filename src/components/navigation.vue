<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/images/logos/logo_nike.svg" alt="" />
    </div>
    <div class="nav-bag">
      <img src="../assets/images/icons/icon_sacola.svg" alt="" />
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
              ><svg
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
            </router-link>
          </li>
        </ul>
        <div class="nav-icon--close">
          <span v-on:click="hendleClickMenu">
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
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data: () => {
    const menu = [
      {
        path: 'Home',
        to: '/',
      },
      {
        path: 'Home',
        to: '/',
      },
      {
        path: 'Home',
        to: '/',
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
  z-index: 11;
}

.nav .logo {
  width: 3.7rem;
}

.nav .logo img {
  width: 100%;
}

.nav-bag {
  margin-left: auto;
  padding-right: 2.9rem;
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
  border-bottom: var(--black) 2px solid;
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
  height: 100vh;
}

.nav-paths.open {
  left: 0;
}

.nav-paths ul {
  background-color: var(--white);
  width: 100%;
  display: flex;
  giflex-direction: column;
}
.nav-paths li {
  padding-left: 2.3rem;
  padding-right: 2.3rem;
}

.nav-paths li a {
  display: flex;
  padding: 1.5rem 0 1.5rem 0;
  text-decoration: none;
  width: 100%;
  flex-direction: row;
  font-size: 1.6rem;
  color: var(--black);
  align-items: baseline;
}
.nav-paths li:hover {
  background-color: rgb(0, 0, 0, 60%);
  transition: 0.5s;
}

.nav-paths li:hover svg path,
.nav-paths li:hover a {
  color: rgba(250, 248, 248);
  fill: var(--white);
  transition: 0.5s;
}

.nav-paths li a span {
  display: block;
}
.nav-paths li a svg {
  margin-left: auto;
}

.nav-icon--close {
  padding: 2.3rem;
  width: 100px;
  position: relative;
  cursor: pointer;
}

.nav-icon--close svg {
  position: absolute;
  right: 2.3rem;
}
</style>
