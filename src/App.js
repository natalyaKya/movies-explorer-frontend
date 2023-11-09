import './App.css';
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main/Main";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState("false")
  const location = useLocation();

  React.useEffect(() => {
    setIsBurgerOpen(false);
  }, [location]);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }
  return (
    <div className="App">
      <Navbar
        handleBurgerClick={handleBurgerClick}
        isBurgerOpen={isBurgerOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isAuthorized={true}
              handleBurgerClick={handleBurgerClick}
              isBurgerOpen={isBurgerOpen}
            />
          }
        />
        <Route
          path="/signup"
          element={<Register />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="/movies"
          element={<Movies
            isAuthorized={true}
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerOpen}
          />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies
            isAuthorized={true}
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerOpen}
          />}
        />
        <Route
          path="/profile"
          element={<Profile
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerOpen}
          />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
