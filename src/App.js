import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import StateLinks from './components/StateLinks';
import RehabsByState from './components/RehabsByState';
import RehabsByCity from './components/RehabsByCity';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={StateLinks} />
                        <Route exact path="/rehabs/:state" component={RehabsByState} />
                        <Route exact path="/rehabs/:state/:city" component={RehabsByCity} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
