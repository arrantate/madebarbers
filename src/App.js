import React from 'react';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
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
      
      <div id='main-banner'>
      <Nav />
        <div className='container' style={{ paddingTop: '2.5rem' }}>
          
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/barbers' component={Barbers} />
              </Switch>
            
        </div>
        <i id='banner-arrow' className='fas fa-3x fa-arrow-down'></i>
      </div>
      <br />
      <div className='container introduction' style={{ padding: '0' }}>
        <div className='vertical-line'></div>
        <div id="nearcut" data-domain="https://iframe-12059.nearcut.com"></div>
        </div>
  
      
      
      
      <Map />
      <Introduction />
      
      <br />
    </Router>
  );
}

export default App;
