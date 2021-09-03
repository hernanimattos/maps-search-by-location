const axios = require('axios');

const axiosInstance = ({ baseURL, params }) => {
  return axios.create({
    baseURL,
    ...params,
  });
};

const mapContext = axiosInstance({
  baseURL: 'https://maps.googleapis.com/maps/api/place',
});

export async function getStores({ query, location, rankby }) {
  return await mapContext.get(`/textsearch/json`, {
    params: {
      query,
      location,
      rankby,
      key: 'AIzaSyBYunBUkNtW9tDejcOnyTHfbAZXjjnqrcc',
    },
  });
}

export async function getDataNavigator() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getStoresWithDetails({ query, location, rankby }) {
  try {
    const data = getStores({ query, location, rankby });
    const { results } = data;

    const storeDetails = results.map(async (store) => {
      const { place_id } = store;

      const { data } = await getDetails({ id: place_id });
      const { result } = data;
      const { opening_hours } = result;

      return {
        ...store,
        opening_hours,
      };
    });

    return Promise.all(storeDetails);
  } catch (error) {
    console.log('erro in getStoresWithDetails:', error);
  }
}

export async function getDetails({ id, fields = [] }) {
  try {
    return await mapContext.get(`/details/json?place_id=${id}`, {
      params: {
        fields: [...fields].join(''),
        key: 'AIzaSyBYunBUkNtW9tDejcOnyTHfbAZXjjnqrcc',
      },
    });
  } catch (error) {
    console.log('erro in getDetails:', error);
  }
}

export async function orderByNearStores(
  locations = [],
  { lat: currentLat, lng: curretLng }
) {
  try {
    const closestStores = locations
      .map((loc) => {
        const { geometry } = loc;
        const { location } = geometry;
        const { lat, lng } = location;

        const result =
          Math.pow(lat - currentLat, 2) + Math.pow(lng - curretLng, 2);

        return {
          ...loc,
          distance: result,
        };
      })
      .sort((a, b) => a.distance - b.distance);

    return closestStores;
  } catch (error) {
    console.log('erro in orderByNearStores:', error);
  }
}
