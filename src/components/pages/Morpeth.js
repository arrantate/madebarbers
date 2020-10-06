import React from 'react';
import { Link } from 'react-router-dom';
import CarouselMorpeth from '../layout/CarouselMorpeth';

import MapMorpeth from '../layout/MapMorpeth'

const Morpeth = () => {
  return (
    <div className='content'>
      <h1>The Iron Pencil - Morpeth</h1>
      <CarouselMorpeth /><br />
      <iframe title="Booking" id="booksy" style={{ width: '100%', height: "500px", overflow: 'visible !important' }} src="https://booksy.com/en-gb/instant-experiences/widget/38328"></iframe>
      <MapMorpeth />
      <Link to="/">Back</Link>
      
    </div>
  );
};

export default Morpeth;
