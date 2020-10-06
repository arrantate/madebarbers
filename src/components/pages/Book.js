import React from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
  return (
    <div className='content'>
      <h1>Book an appointment</h1>
      <Link to='/book-gosforth' className='location'>
        <i className='fas fa-cut' style={{ margin: '0 1rem 0 0' }}></i>
        Made Barbers - South Gosforth
      </Link>
      <Link to='/book-morpeth' className='location'>
        <i className='fas fa-cut' style={{ margin: '0 1rem 0 0' }}></i>
        The Iron Pencil - Morpeth
      </Link>
    </div>
  );
};

export default Book;
