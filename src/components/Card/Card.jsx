import React from 'react';
import { Link } from 'react-router-dom';

import "./Card.css";

const Card = ({ media }) => {
  return (
    <div className="card">
        <div className="img">
          <Link to={`movies/${media.media_id}`}>
            <img src={media.image_url} alt={media.title} />
          </Link>
        </div>

        <div className="mov-details flex justify-between my-2">
            <h5 className="text-base text-white font-semibold"> {media.title} </h5>

            <div className="flex justify-between gap-3">
                <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> 3:12:00 </p>
            </div>
        </div>
    </div>    
  )
}

export default Card;