<template>
  <section class="search">
    <h3 class="title">Lojas</h3>
    <form @submit="getSearch">
      <div class="field">
        <label class="field-label">
          <span class="icon-search"> </span>

          <input
            type="search"
            name="search"
            placeholder="Buscar por coordenada"
            v-model="search"
          />
        </label>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'search',
  data: () => ({
    search: '',
  }),
  methods: {
    getSearch() {
      console.log(this.data);
    },
  },
};
</script>

<style scoped>
.search {
  text-align: center;
}

.search .title {
  margin-bottom: calc(var(--gutter) * 2);
  margin-top: calc(var(--gutter) * 2);
  display: block;
  font-weight: 500;
  font-size: calc(var(--gutter) * 2);
}

.search input {
  border: solid 1px var(--border-field-form);
  padding: 1.8rem 1.8rem 1.8rem 4rem;
  border-radius: 30px;
  width: 100%;
  font-size: var(--gutter);
  font-weight: 400;
}

.icon-search {
  background-image: url('../assets/images/icons/icon_lupa.svg');
  background-repeat: no-repeat;
  width: var(--gutter);
  height: var(--gutter);
  top: 2rem;
  position: absolute;
  left: 1rem;
  left: 1.5rem;
}

.field-label {
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 2rem;
}
</style>
