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
  authorization(data) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    }).then(res => this._checkStatus(res))
  }
  register(data) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => this._checkStatus(res))
  }
  checkToken() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
      credentials: 'include',
    }).then(res => this._checkStatus(res))
  }
  logout() {
    return fetch(`${this.baseUrl}/signout`, {
      method: "GET",
      headers: this.headers,
      credentials: 'include',
    }).then(res => this._checkStatus(res))
  }
  updateProfile(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(res => this._checkStatus(res))
  }
  saveMovie(data) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(res => this._checkStatus(res))
  }
  deleteMovie(id) {
    return fetch(`${this.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._checkStatus(res))
  }
  getSaveMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then(res => this._checkStatus(res))
  }
}

export const MainApi = new Api({
  baseUrl: "https://api.projectkya.nomoredomainsrocks.ru",
  headers: {
    "Content-Type": "application/json",
  },
});
