import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils';

const SingleMedia = () => {
  const { id } = useParams(); // Get the media_id from the URL
  const [movie, setMovie] = useState(null); // State to hold movie data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchData(`/movies/${id}`); // Adjust the API endpoint to fetch the movie details
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
    return <div>Loading...</div>; // Display loading state
  }

  if (!movie) {
    return <div>No movie found.</div>; // Handle case where no movie is found
  }

  return (
    <div className="single-movie">
      <h1>{movie.title}</h1>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.description}</p>
      {/* <p>Rating: {movie.rating}</p> */}
      {/* Add more details as needed */}
    </div>
  );
}

export default SingleMedia;