import Vue from 'vue';
import Vuex from 'vuex';
import { mapContext } from '../provider/MapProvider';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    maps: {
      namespaced: true,
      state: {
        mapsResult: [],
        currentCoords: {
          lat: 0,
          lng: 0,
        },
      },
      mutations: {
        setCurrentLocation(state, location) {
          state.currentCoords = { ...location };
        },
        setMapsResult(state, { results }) {
          state.mapsResult = results;
        },
      },
      actions: {
        // eslint-disable-next-line no-unused-vars
        async getMapsClosest({ commit }, _) {
          const { coords } = await mapContext.getDataNavigator();
          const { latitude, longitude } = coords;
          const location = `${latitude}, ${longitude}`;
          const { data } = await mapContext.getClosestsStores({ location });

          commit('setMapsResult', data);
        },

        // eslint-disable-next-line no-unused-vars
        async getCurrentCoords({ commit }, _) {
          const { coords } = await mapContext.getDataNavigator();
          const { latitude: lat, longitude: lng } = coords;
          commit('setCurrentLocation', { lat, lng });
        },
      },
    },
  },
});
