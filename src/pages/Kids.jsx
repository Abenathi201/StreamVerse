import React from 'react';
import { useState, useEffect } from 'react';

import { fetchData } from '../utils';
import Card from '../components/Card/Card';

const Kids = () => {
  const [kids, setKids] = useState([]);

  useEffect(() => {
    const fetchKids = async () => {
        try {
          const fetchedKids = await fetchData('/kids');          
          setKids(fetchedKids.results);
        } catch (error) {
          console.log("Failed to fetch kids", error.message)
        }
    };
    fetchKids();
  }, [])

  return (
    <div className="card-container flex justify-center space-x-12 flex-wrap gap-y-10">
      {kids.length > 0 ? (
        kids.map((kid) => (
          <Card key={kid.kids_id} media={kid} />
        ))
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default Kids;