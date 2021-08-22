const axios = require("axios");
const Provider = require("./Provider");

class MapProvider extends Provider {
  constructor(axios, config) {
    super(axios, config);
    this.API_KEY = "AIzaSyBYunBUkNtW9tDejcOnyTHfbAZXjjnqrcc";
    console.log(this);
  }

  getStores() {
    return this._provider.get(
      `/textsearch/json?input=centauro&key=${this.API_KEY}`
    );
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
  teste: "hernani",
};

const mapContext = new MapProvider(axios, config);

exports.module = {
  mapContext,
};
