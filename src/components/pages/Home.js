import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Carousel from '../layout/Carousel';

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
          <Link to='/book' className='book-now'>
            <i
              className='fas fa-cut'
              style={{ margin: '0 1rem 0 0' }}
            ></i>
            Book Now!
          </Link>
          
        </div>
      </div>
      <div className='column right'>
      
        <div className='content'>
        <Carousel />
          <h2 style={{ color: 'var(--pink)', textAlign: 'center' }}>New Shop!</h2>
          <p>Made Barbers UK is teaming up with The Iron Pencil tattoo studio in Morpeth.</p>
          <p>We are setting up shop together to provide you with two top notch services.  We will be closing the gateshead shop but don't worry! The original Made Barbers in South Gosforth will still be open as usual.</p>
          <p>You can <Link to='/book' style={{textDecoration: 'underline'}}>book an appointment</Link> online, or by downloading the Boosky app.</p>
          
        </div>
        
      </div>

      
    </div>

    
    
  );
};

export default Home;
