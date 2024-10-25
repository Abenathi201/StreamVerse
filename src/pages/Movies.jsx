import { React, useState, useEffect } from 'react';

import { fetchData } from '../utils';
import Card from '../components/Card/Card';
import Filter from '../components/Filter/Filter';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
        try {
          const fetchedMovies = await fetchData('/movies');
          console.log("Movies: ", fetchedMovies.results);
          
          setMovies(fetchedMovies.results);
        } catch (error) {
          console.log("Failed to fetch movies", error.message)
        }
    };
    fetchMovies();
  }, [])

  return (
    <div>
      <Filter />
      <div className="card-container flex justify-center space-x-12 flex-wrap gap-y-10">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Card key={movie.movie_id} media={{ ...movie, type: 'movies' }} />
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default Movies;