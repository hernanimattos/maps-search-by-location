class Provider {
  constructor(axios, config) {
    this._axios = axios;
    this.config(config);
  }

  set axios(axios) {
    this._axios = axios;
  }

  get axios() {
    return this._axios;
  }

  get provider() {
    return this._provider;
  }

  set provider(provider) {
    return (this._provider = provider);
  }

  config({ url, ...rest }) {
    this._provider = this._axios.create({
      baseURL: url,
      ...rest,
    });
  }

  get(url) {
    return this._axios.get(url);
  }

  post({ url, body }) {
    return this._axios.post(url, body);
  }
}

module.exports = Provider;
