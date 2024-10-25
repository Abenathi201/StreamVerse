import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils';

const SingleMedia = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchData(`/movies/${id}`);
        const data = await response.json();
        console.log(data);
        
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>No movie found.</div>;
  }

  return (
    <div className="single-movie">
      <h1>{movie.title}</h1>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.description}</p>
    </div>
  );
}

export default SingleMedia;