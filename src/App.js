import React from 'react';
import Home from './components/pages/Home.js';
import Nav from './components/layout/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Nav />
    </Router>
  );
}

export default App;
