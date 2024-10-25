import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Animations from "./pages/Animations";
import Documentaries from "./pages/Documentaries";
import Kids from "./pages/Kids";
import Reality from "./pages/Reality";
import StandUp from "./pages/StandUp";
import Media from "./pages/Media";
import SingleMedia from "./pages/SingleMedia";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/movies/:id" element={<SingleMedia />} />
        <Route path="/user-profile/" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/documentaries" element={<Documentaries />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/reality" element={<Reality />} />
        <Route path="/standup" element={<StandUp />} />
      </Routes>
    </div>
  )
}

export default App;
