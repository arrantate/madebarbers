import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarouselGosforth from '../layout/CarouselGosforth';

import MapGosforth from '../layout/MapGosforth';

const Gosforth = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='content'>
      <h1>Made Barbers - South Gosforth</h1>

      <CarouselGosforth /><br />
      <iframe title="Booking" id="booksy" style={{ width: '100%', height: "500px", overflow: 'visible !important' }} src="https://booksy.com/en-gb/instant-experiences/widget/7616"></iframe>
      
      <MapGosforth />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Gosforth;
