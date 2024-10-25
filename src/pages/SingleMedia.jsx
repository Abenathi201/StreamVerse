import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils';

const SingleMedia = ({ type }) => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const fetchedMedia = await fetchData(`/${type}/${id}`);
        console.log("Fetched Media: ", fetchedMedia);
        setMedia(fetchedMedia.results);
      } catch (error) {
        console.log("Failed to fetch media", error.message);
      }
    };
    fetchMedia();
  }, [id, type]);  

  if (!media) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl text-white font-bold ms-5 mx-2">{media.title}</h1>
      <img src={media.image_url} alt={media.title} />
    </div>
  );
};

export default SingleMedia;