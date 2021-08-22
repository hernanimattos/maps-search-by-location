<template>
  <section class="search">
    <h3 class="title">Lojas</h3>
    <form>
      <div class="field">
        <label class="field-label">
          <span class="icon-search"> </span>

          <input
            type="search"
            name="search"
            placeholder="Buscar por coordenada"
          />
        </label>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "search",
};
</script>

<style scoped>
.search {
  text-align: center;
}

.search .title {
  margin-bottom: 3.2rem;
  margin-top: 3.2rem;
  display: block;
  font-weight: 500;
  font-size: 3.2rem;
}

.search input {
  border: solid 1px #d6d6d6;
  padding: 1.8rem 1.8rem 1.8rem 4rem;
  border-radius: 30px;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
}

.icon-search {
  background-image: url("../assets/images/icon_lupa.svg");
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
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
