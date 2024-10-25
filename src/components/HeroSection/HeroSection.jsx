import React from 'react';

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container">
       <div className="buttons flex items-center gap-10 justify-center align-middle">
            <button className="text-center font-bold text-2xl text-white"> Watch Now </button>
            <button className="text-center font-bold text-2xl text-white"> Watch Later </button>
       </div>

       <div className="movie-details">
            <h3 className="text-white text-4xl font-bold"> Avatar: The Way Of Water </h3>

          <div className="info flex">
              <button> Action </button>
              <button> Adventure </button>
              <button> Science Fiction </button>

            <div className="ratings flex items-center align-middle gap-5 m-2">
              <p> 2022 </p>
              <p> 3:12:00 </p>
              <p> 8.5 </p>
            </div>
          </div>

          <p className="font-medium text-lg text-white text-wrap">
          Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.
          </p>
       </div>

       <div className="slide-btns flex items-center gap-4">
          <div className="selected-btn"></div>
          <div className="slide-btn"></div>
          <div className="slide-btn"></div>
          <div className="slide-btn"></div>
       </div>
    </div>
  )
}

export default HeroSection