import React from 'react';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Morpeth from './components/pages/Morpeth';
import Gosforth from './components/pages/Gosforth';
import Barbers from './components/pages/Barbers';

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
                <Route exact path='/book-morpeth/' component={Morpeth} />
                <Route exact path='/book-gosforth/' component={Gosforth} />
              </Switch>
            
        </div>
      </div>
      
    </Router>
  );
}

export default App;
