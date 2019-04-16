import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import StatePage from './components/StatePage';
import CityPage from './components/CityPage';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <nav className="navbar navbar-dark bg-blue">
                            <span className="navbar-brand mb-0 h1"><Link to="/">Rehab Finder</Link></span>
                        </nav>
                    </div>
                </header>
                
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/rehabs/:state" component={StatePage} />
                        <Route exact path="/rehabs/:state/:city" component={CityPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
