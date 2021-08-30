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
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('maps');

import CardAddress from '../components/CardAddress';

export default {
  name: 'search-result',
  computed: {
    ...mapState(['mapsResult']),
  },

  methods: {
    ...mapActions(['getMapsClosest']),
  },
  async mounted() {
    await this.getMapsClosest();
  },
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
