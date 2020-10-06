import React from 'react';
import { Link } from 'react-router-dom';

const Gosforth = () => {
  return (
    <div className='content'>
      <h1>Made Barbers - South Gosforth</h1>
      <iframe title="Booking" id="booksy" style={{ width: '100%', height: "500px", overflow: 'visible !important' }} src="https://booksy.com/en-gb/instant-experiences/widget/7616"></iframe>
      <Link to="/book">Back</Link>
    </div>
  );
};

export default Gosforth;
