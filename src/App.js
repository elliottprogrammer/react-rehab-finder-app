import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RehabsByState from './components/RehabsByState';
import RehabsByCity from './components/RehabsByCity';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <nav className="navbar navbar-dark bg-blue">
                            <span className="navbar-brand mb-0 h1">Rehab Finder</span>
                        </nav>
                    </div>
                </header>
                
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/rehabs/:state" component={RehabsByState} />
                        <Route exact path="/rehabs/:state/:city" component={RehabsByCity} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
