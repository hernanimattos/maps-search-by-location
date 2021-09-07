<template>
  <main class="search-result">
    <card-address
      v-for="map in mapsResult"
      :key="map.place_id"
      :title="'vaiq vai'"
      :distance="'1.0 km'"
      :address="'rua noumero 4444'"
    />
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('maps');

import CardAddress from '../components/CardAddress';

export default {
  name: 'search-result',
  computed: {
    ...mapState(['mapsResult']),
    // ...mapGetters(['calculateLatLng']),
  },

  methods: {
    // ...mapActions(['getMapsClosest']),
    // filterLocation() {
    //   const result = this.calculateLatLng.sort(
    //     (a, b) => a.distance_lat_long - b.distance_lat_long
    //   );
    //   console.log(result);
    // },
  },
  async mounted() {
    // await this.getMapsClosest();
    // this.filterLocation();
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
