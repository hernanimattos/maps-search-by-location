import Vue from 'vue';
import Vuex from 'vuex';
import {
  getDataNavigator,
  getStoresWithDetails,
} from '../provider/MapProvider';

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
        setMapsResult(state, results) {
          state.mapsResult = results;
        },
      },
      actions: {
        // eslint-disable-next-line no-unused-vars
        async getMapsClosest({ commit }, _) {
          const { coords } = await getDataNavigator();

          const { latitude, longitude } = coords;
          const location = `${latitude}, ${longitude}`;
          const { result } = await getStoresWithDetails({
            query: 'centauro',
            location,
            rankby: '',
          });

          commit('setMapsResult', result);
        },

        // eslint-disable-next-line no-unused-vars
        async getCurrentCoords({ commit }, _) {
          const { coords } = await getDataNavigator();

          const { latitude: lat, longitude: lng } = coords;
          commit('setCurrentLocation', { lat, lng });
        },
      },
    },
  },
});

// const coords = [
//   { name: 'paulista', coords: [-23.5639655, -46.6538915] },
//   { name: 'terracota', coords: [-23.6263889, -46.5805525] },
//   { name: 'abc', coords: [-23.6686446, -46.5343465] },
//   { name: 'rotary', coords: [-23.7234191, -46.5423886] },
// ];

// "lat": -23.5656141,
//         "lng": -46.50276059999999

// const d = coords.map((coord) =>{

//   const [lat, log] = coord.coords;
//   const lt = lat - (-23.641905610087875)
//   const lg = log - (-46.57490065425626)
//   const result = Math.pow(lt, 2) + Math.pow(lg, 2)

//   return {
//     ...coord,
//     result: Math.pow(result,2)  };

// }).sort((a,b)=>a.result - b.result)

// // .filter((n) => n <= location)
// console.log(d)
