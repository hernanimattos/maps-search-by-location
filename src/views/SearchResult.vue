<template>
  <main class="search-result">
    <card-address
      :title="'vaiq vai'"
      :distance="'1.0 km'"
      :address="'rua noumero 4444'"
    />
  </main>
</template>

<script>
import CardAddress from '../components/CardAddress';
export default {
  name: 'search-result',
  components: {
    CardAddress,
  },
};
</script>

<style>
.search-result {
  padding: 1.6rem;
}
</style>
