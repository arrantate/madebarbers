import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div style={{ textAlign: 'center' }}>
        <img className='logo' src={logo} alt='logo'></img>
      </div>
      <h1>
        MADE BARBERS <br />
        UK - NEWCASTLE
      </h1>
      <h2>A CUT THAT MAKES YOU</h2>
      <p>
        A passion for barbering and customer service. Join the many happy Made
        Barbers UK Newcastle client's today for a haircut that is made for you.
        We have shops based in Gosforth and Gateshead - Newcastle.
      </p>
      <div style={{ textAlign: 'center', padding: '5rem 0 5.5rem 0' }}>
        <Link to='#' className='book-now'>
          <i className='fas fa-cut' style={{ margin: '0 1rem 0 0' }}></i>
          Book Now!
        </Link>
      </div>
    </div>
  );
};

export default Home;
