import React from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import Trending from '../components/Trending/Trending';
import LatestMovies from '../components/LatestMovies/LatestMovies';
import LatestSeries from '../components/LatestSeries/LatestSeries';
import Recommended from '../components/Recommended/Recommended';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Trending />
      <LatestMovies />
      <LatestSeries />
      <Recommended />
    </div>
  )
}

export default Home;
