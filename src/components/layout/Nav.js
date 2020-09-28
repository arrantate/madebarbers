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
          <NavLink to='/barbers' className='nav-link'>
            Barbers
          </NavLink>
        </li>      
      </ul>
    </nav>
  );
};

export default Nav;
