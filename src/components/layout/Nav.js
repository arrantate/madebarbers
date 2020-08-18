import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='nav-link'>
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink to='/prices' className='nav-link'>
            Prices
          </NavLink>
        </li>
        <li>
          <NavLink to='/prices' className='nav-link'>
            Barbers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
