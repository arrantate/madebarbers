import React from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
  return (
    <div className='content'>
      <h1>Choose a shop</h1>
      <Link to="/book-morpeth">The Iron Pencil - Morpeth</Link><br />
      <Link to="/book-gosforth">Made Barbers - South Gosforth</Link>
    </div>
  );
};

export default Book;
