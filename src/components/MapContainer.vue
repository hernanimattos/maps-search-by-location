<template>
  <div class="map-continer" id="map" ref="map"></div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('maps');

import { initMap } from '../provider/MapDraw';

export default {
  name: 'map-container',

  props: {
    icon: {
      type: String,
    },
  },

  computed: {
    ...mapState(['currentCoords', 'mapsResult']),
  },
  methods: {
    ...mapActions(['getCurrentCoords', 'getMapsClosest']),
  },

  async mounted() {
    await this.getMapsClosest();
    await this.getCurrentCoords();

    initMap(this, 12, this.icon);
  },
};
</script>

<style></style>
