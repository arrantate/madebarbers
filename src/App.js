import React from 'react';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking';
import BookSouthG from './components/pages/BookSouthG';
import BookGateshead from './components/pages/BookGateshead';
import Barbers from './components/pages/Barbers';
import logo from './components/images/logo.png';
import Introduction from './components/layout/Introduction';
import Map from './components/layout/Map';
import { Link } from 'react-router-dom';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <div id='main-banner'>
        <div className='container' style={{ paddingTop: '2.5rem' }}>
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
                is made for you. We have shops based in Gosforth and Gateshead -
                Newcastle.
              </p>
              <div style={{ textAlign: 'center', padding: '5rem 0 5.5rem 0' }}>
                <Link to='/booking' className='book-now'>
                  <i
                    className='fas fa-cut'
                    style={{ margin: '0 1rem 0 0' }}
                  ></i>
                  Book Now!
                </Link>
              </div>
            </div>
            <div className='column right'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/booking' component={Booking} />
                <Route
                  exact
                  path='/book-south-gosforth'
                  component={BookSouthG}
                />
                <Route exact path='/book-gateshead' component={BookGateshead} />
                <Route exact path='/barbers' component={Barbers} />
              </Switch>
            </div>
          </div>
        </div>
        <i id='banner-arrow' className='fas fa-3x fa-arrow-down'></i>
      </div>
      <Introduction />
      <Map />
      <br />
    </Router>
  );
}

export default App;
