import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div id='main-banner'>
        <div className='container'>
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
                happy Made Barbers UK Newcastle client's today for a haircut
                that is made for you. We have shops based in Gosforth and
                Gateshead - Newcastle.
              </p>
              <div style={{ textAlign: 'center', padding: '5rem 0 5.5rem 0' }}>
                <Link to='#' className='book-now'>
                  <i class='fas fa-cut' style={{ margin: '0 1rem 0 0' }}></i>
                  Book Now!
                </Link>
              </div>
            </div>
            <div className='column right'></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h3>Matthew Woodroffe, Owner</h3>
        <h4>MADE BARBERS</h4>
        <p>
          My mother was a hairdresser, i have 4 sisters, they cut hair. I Grew
          up in a salon all of my life. I’ve been involved in the industry of
          hair since I was born. We like to get to know who you are as a person,
          what you’ve been up-to. You get to know us as people you get a haircut
          that is going to suit you, suit your lifestyle, so that you walk out
          of this shop feeling like the best version of you. We dont want to be
          any barber, we want to be YOUR barber…
          <br />
          <br />
          And the banter is amazing
        </p>
      </div>
    </div>
  );
};

export default Home;
