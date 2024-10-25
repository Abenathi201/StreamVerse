import React from 'react';
import { useState, useEffect } from 'react';

import { fetchData } from '../utils';
import Card from '../components/Card/Card';

const Animations = () => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const fetchAnimations = async () => {
        try {
          const fetchedAnimations = await fetchData('/animations-anime');
          console.log(fetchedAnimations.results);
          
          
          setAnimations(fetchedAnimations.results);
        } catch (error) {
          console.log("Failed to fetch animations", error.message)
        }
    };
    fetchAnimations();
  }, [])

  return (
    <div className="card-container flex justify-center space-x-12 flex-wrap gap-y-10">
      {animations.length > 0 ? (
        animations.map((animation) => (
          <Card key={animation.animation_anime_id} media={animation} />
        ))
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default Animations;