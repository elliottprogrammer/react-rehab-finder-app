import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import StateLinks from './StateLinks';
import RehabsByState from './RehabsByState';
import RehabsByCity from './RehabsByCity';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/" component={StateLinks} />
          <Route exact path="/rehabs/:state" component={RehabsByState} />
          <Route exact path="/rehabs/:state/:city" component={RehabsByCity} />
        </Switch>

      </div>
    );
  }
}

export default App;
