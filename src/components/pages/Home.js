import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='row'>
      <div className='column left'>
        <div style={{ textAlign: 'center' }}>
          <img className='logo' src={logo} alt='logo'></img>
        </div>
        <h1>
          MADE BARBERS <br />
          UK - NEWCASTLE
        </h1>
        <h2>A CUT THAT MAKES YOU</h2>
        <p>
          A passion for barbering and customer service. Join the many
          happy Made Barbers UK Newcastle clients today for a haircut that
          is made for you. We have shops based in South Gosforth and Morpeth -
          Newcastle.
        </p>
        <div style={{ textAlign: 'center', padding: '5rem 0 5.5rem 0' }}>
          <a href='#nearcut' className='book-now'>
            <i
              className='fas fa-cut'
              style={{ margin: '0 1rem 0 0' }}
            ></i>
            Book Now!
          </a>
        </div>
      </div>
      <div className='column right'>
        <div className='content'>
          <h2 style={{ color: 'var(--pink)', textAlign: 'center' }}>News!</h2>
          <p>Made Barbers UK is teaming up with The Iron Pencil tattoo studio in Morpeth.</p>
          <p>We are setting up shop together to provide you with two top notch services.  We will be closing the gateshead shop but don't worry! The original Made Barbers in South Gosforth will still be open as usual.</p>
          <p>You can <a href='#nearcut' style={{textDecoration: 'underline'}}>book an appointment</a> in either of our shops either online or using the mobile app.</p>
        
        </div>
      </div>
    </div>

    
    
  );
};

export default Home;
