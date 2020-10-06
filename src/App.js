import React from 'react';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Book from './components/pages/Book';
import Morpeth from './components/pages/Morpeth';
import Gosforth from './components/pages/Gosforth';
import Barbers from './components/pages/Barbers';
import Map from './components/layout/Map';

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
                <Route exact path='/book' component={Book} />
                <Route exact path='/book-morpeth' component={Morpeth} />
                <Route exact path='/book-gosforth' component={Gosforth} />
              </Switch>
            
        </div>
        <i id='banner-arrow' className='fas fa-3x fa-arrow-down'></i>
      </div>
      
    </Router>
  );
}

export default App;
