import React from 'react';
import { useState, useEffect } from 'react';

import { fetchData } from '../utils';
import Card from '../components/Card/Card';

const Documentaries= () => {
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    const fetchDocumentaries = async () => {
        try {
          const fetchedDocumentaries = await fetchData('/documentaries');          
          setDocumentaries(fetchedDocumentaries.results);
        } catch (error) {
          console.log("Failed to fetch documentaries", error.message)
        }
    };
    fetchDocumentaries();
  }, [])

  return (
    <div className="card-container flex justify-center space-x-12 flex-wrap gap-y-10">
      {documentaries.length > 0 ? (
        documentaries.map((documentary) => (
          <Card key={documentary.documentaries_id} media={documentary} />
        ))
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default Documentaries;