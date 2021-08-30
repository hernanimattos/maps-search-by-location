const axios = require('axios');
const Provider = require('./Provider');

class MapProvider extends Provider {
  constructor(axios, config) {
    super(axios, config);
    this.API_KEY = 'AIzaSyBYunBUkNtW9tDejcOnyTHfbAZXjjnqrcc';
  }

  async getClosestsStores({ location }) {
    return await this._provider.get(`/textsearch/json?key=${this.API_KEY}`, {
      params: {
        query: 'centauro',
        location,
        rankby: 'distance',
      },
    });
  }

  getDataNavigator() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  config({ url, ...rest }) {
    this._provider = this._axios.create({
      baseURL: url,
      ...rest,
    });
  }
}

const config = {
  url: `https://maps.googleapis.com/maps/api/place`,
};

const mapContext = new MapProvider(axios, config);

module.exports = {
  mapContext,
};
