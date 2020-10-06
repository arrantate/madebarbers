import React from 'react';
import { Link } from 'react-router-dom';

const Morpeth = () => {
  return (
    <div className='content'>
      <h1>The Iron Pencil - Morpeth</h1>
      <iframe title="Booking" id="booksy" style={{ width: '100%', height: "500px", overflow: 'visible !important' }} src="https://booksy.com/en-gb/instant-experiences/widget/38328"></iframe>
      <Link to="/book">Back</Link>
    </div>
  );
};

export default Morpeth;
