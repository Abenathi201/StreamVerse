import React from 'react';

import './Filter.css';

const Filter = () => {
  return (
    <div className="flex flex-col justify-start gap-5 mb-10 ms-2">
      <h1 className="text-2xl text-white font-bold ms-5 mx-2">Movies</h1>

      <div className="flex ms-5 gap-2">
        <select className="genre">
          <option value="">Genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
        </select>
    
        <select className="country">
          <option value="">Country</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
          <option value="south-africa">South Africa</option>
        </select>
    
        <select className="rating">
          <option value="">Rating</option>
          <option value="g">G</option>
          <option value="pg">PG</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;