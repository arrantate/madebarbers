import React from 'react';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Barbers from './components/pages/Barbers';
import Map from './components/layout/Map';
import Widget from './components/Widget';

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

                <Route exact path='/widget' component={Widget} />
              </Switch>
            
        </div>
        <i id='banner-arrow' className='fas fa-3x fa-arrow-down'></i>
      </div>
      <br />
      <div className='container introduction' style={{ padding: '0' }}>
        <div className='vertical-line'></div>
        <iframe id="booksy" style={{ width: '100%', height: "100vh", overflow: 'visible !important' }} src="https://booksy.com/en-gb/instant-experiences/widget/7616"></iframe>
        </div>
  
      
      
      <Map />

      <br />
    </Router>
  );
}

export default App;
