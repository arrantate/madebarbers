import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <div className='content'>
      <h1>Where is best for you?</h1>
      <Link to='/book-south-gosforth' className='location'>
        <i className='fas fa-cut' style={{ margin: '0 1rem 0 0' }}></i>
        SOUTH GOSFORTH
      </Link>
      <br />
      <Link to='/book-gateshead' className='location'>
        <i className='fas fa-cut' style={{ margin: '0 1rem 0 0' }}></i>
        GATESHEAD
      </Link>
    </div>
  );
};

export default Booking;
