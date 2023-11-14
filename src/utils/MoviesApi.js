class Api {
  constructor(options) {
    this.options = options;
    this.baseUrl = this.options.baseUrl;
    this.headers = this.options.headers;
  }
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getMovies() {
    return fetch(this.baseUrl, {
      method: "GET",
      headers: this.headers,
    }).then((res) => this._checkStatus(res));
  }
}

export const MoviesApi = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
