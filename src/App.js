import './App.css';
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import ProtectedRoute from "./components/ProtectedRouter/ProtectedRoute";
import Main from "./components/Main/Main";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { MoviesApi } from './utils/MoviesApi';
import { MainApi } from './utils/MainApi';
import { errors } from './utils/errors'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(localStorage.getItem('search') ?? '');
  const [querySave, setQuerySave] = useState('')
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState(JSON.parse(localStorage.getItem('movies')) ?? []);
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [disableInputProfile, setDisableInputProfile] = useState(true);
  const [infoToolTip, setInfoToolTip] = useState(false)
  const [like, setLike] = useState(false);
  const [firstVisitUser, setFirstVisitUser] = useState(true)

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setError('')
    setDisableInputProfile(true)
    if (loggedIn) {
      getSaveMovies()
    }
  }, [location.pathname]);

  useEffect(() => {
    handleTokenCheck()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getMovies()
  }, [])

  const handleBurgerClick = () => {
    setIsBurgerOpen(prev => !prev)
  }
  function handleBackPage() {
    navigate(-1)
    handleTokenCheck()
  }

  // Авторизация пользователя
  function loginUser(data) {
    MainApi.authorization(data)
      .then(() => {
        setLoggedIn(true)
        handleTokenCheck()
      })
      .catch((err) => setError(errors(err)))
  }

  function registerUser(data) {
    MainApi.register(data)
      .then(() => loginUser(data))
      .catch((err) => setError(errors(err)))
  }

  function getSaveMovies() {
    MainApi.getSaveMovies()
      .then((savedFilms) => setSavedMovies(savedFilms))
      .catch(err => console.log(`Ошибка ${err}`))
  }

  function handleTokenCheck() {
    MainApi.checkToken()
      .then(res => {
        getSaveMovies()
        setLoggedIn(true)
        setCurrentUser(res)
        navigate(location.pathname === '/signin' || location.pathname === '/signup' ? '/movies' : location.pathname, { replace: true })
      })
      .catch(() => setLoggedIn(false));
  }

  function logout() {
    MainApi.logout()
      .then(() => {
        setFirstVisitUser(true)
        setLoggedIn(false)
        navigate("/")
        localStorage.clear()
        setSavedMovies([])
        setSearchMovie([])
      })
      .catch(err => console.log(err))
  }

  // Фильмы

  function getMovies() {
    MoviesApi.getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function searchMovies(query) {
    setFirstVisitUser(false)
    if (query.length) {
      setError('')
      setSearchMovie(movies.filter((item) => {
        return item.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(query.toLowerCase())
      }))
    } else {
      setError('Нужно ввести ключевое слово')
    }
  }
  function searchMoviesSavePage(movies, search) {
    setFirstVisitUser(false)
    if (search) {
      setError('')
      return movies.filter(item => {
        return item.nameRU.toLowerCase().includes(search.toLowerCase())
          || item.nameEN.toLowerCase().includes(search.toLowerCase())
      })
    } else {
      setError('Нужно ввести ключевое слово')
      return movies
    }
  }

  function handleSaveMovie(movie) {
    MainApi.saveMovie(movie)
      .then((newCard) => {
        setSavedMovies([...savedMovies, newCard])
        setLike(false)
      })
      .catch(err => {
        setLike(false)
        console.log(err)
      })
  }

  function handleDislike(id) {
    const deleteFilm = savedMovies.find(item => item._id === id)
    MainApi.deleteMovie(id)
      .then(() => setSavedMovies((prev) => prev.filter((movie) => movie.movieId !== deleteFilm.movieId)))
      .catch(err => console.log(err))
  }

  function checkLike(id) {
    return savedMovies.some(item => item.movieId === id)
  }

  function handleDislikeMoviePage(id) {
    const deleteFilm = savedMovies.find(item => item.movieId === id)
    handleDislike(deleteFilm._id)
  }

  // Профиль

  function updateProfile(userInfo) {
    MainApi.updateProfile(userInfo)
      .then(res => {
        setError('Успешно!')
        setInfoToolTip(true)
        setDisableInputProfile(true)
        setCurrentUser({ ...currentUser, name: res.name, email: res.email })
      })
      .catch(err => {
        setDisableInputProfile(false)
        setError(errors(err))
        setInfoToolTip(true)
      })
  }
  function renderBtn() {
    setDisableInputProfile((prev) => !prev)
  }
  function closePopup() {
    setInfoToolTip(false)
  }
  ///////////////////////////////////////////////
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Navbar
          isAuthorized={loggedIn}
          handleBurgerClick={handleBurgerClick}
          isBurgerOpen={isBurgerOpen} />
        <Routes>
          <Route
            path="*"
            element={<PageNotFound onBack={handleBackPage} />}
          />
          <Route
            path="/"
            element={
              <Main
                isAuthorized={loggedIn}
                handleBurgerClick={handleBurgerClick}
                isBurgerOpen={isBurgerOpen}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                loggedIn={!loggedIn}
                element={
                  <Register
                    error={error}
                    register={registerUser}
                  />
                }
              />}
          />
          <Route
            path="/signin"
            element={<ProtectedRoute
              loggedIn={!loggedIn}
              element={
                <Login
                  error={error}
                  login={loginUser} />
              }
            />}
          />
          <Route
            path="/movies"
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={
                <Movies
                  handleBurgerClick={handleBurgerClick}
                  isBurgerOpen={isBurgerOpen}
                  query={query}
                  isAuthorized={true}
                  onSearch={searchMovies}
                  movies={searchMovie}
                  isLoading={isLoading}
                  setQuery={setQuery}
                  onSave={handleSaveMovie}
                  onDisLike={handleDislikeMoviePage}
                  onCkeck={checkLike}
                  like={like}
                  error={error}
                  firstVisit={firstVisitUser}
                />
              }
            />}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={
                <SavedMovies
                  handleBurgerClick={handleBurgerClick}
                  isBurgerOpen={isBurgerOpen}
                  query={querySave}
                  onSearch={searchMoviesSavePage}
                  setQuery={setQuerySave}
                  like={like}
                  isAuthorized={loggedIn}
                  movies={savedMovies}
                  onSave={handleSaveMovie}
                  onDisLike={handleDislike}
                  onCkeck={checkLike}
                  setSavedMovie={setSavedMovies}
                  error={error}
                  firstVisit={firstVisitUser}
                  getSaveMovies={getSaveMovies}
                // handleBurgerClick={handleBurgerClick}
                // isBurgerOpen={isBurgerOpen}
                />
              }
            />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={
                  <Profile
                    handleBurgerClick={handleBurgerClick}
                    isBurgerOpen={isBurgerOpen}
                    logout={logout}
                    onUpdate={updateProfile}
                    onRender={renderBtn}
                    isOpen={infoToolTip}
                    onClose={closePopup}
                    message={error}
                    disableInput={disableInputProfile}
                  />
                }
              />}
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
