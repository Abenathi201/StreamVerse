import React from 'react';
import { useState, useEffect } from 'react';

import { fetchData } from '../utils';
import Card from '../components/Card/Card';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
        try {
          const fetchedSeries = await fetchData('/series');          
          setSeries(fetchedSeries.results);
        } catch (error) {
          console.log("Failed to fetch series", error.message)
        }
    };
    fetchSeries();
  }, [])

  return (
    <div className="card-container flex justify-center space-x-12 flex-wrap gap-y-10">
      {series.length > 0 ? (
        series.map((tvShow) => (
          <Card key={tvShow.series_id} media={tvShow} />
        ))
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default Series;