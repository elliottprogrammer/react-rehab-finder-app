import React from 'react';
import STATES from '../helpers/states';
import { Link } from 'react-router-dom';
import usBg from '../images/usa.svg';

function StateLinks() {
    return (
        <div className="us-bg">
            <img src={usBg} alt="US Map" className="img-fluid"/>
            <div className="location-list state-list">
                <h2 className="my-5">Or Select a State:</h2>
                <ul className="list-unstyled row">
                    {Object.keys(STATES).map((abbrev) => {
                        return <li className="col-md-3 col-6" key={abbrev}><Link to={`/rehabs/${abbrev}`}>{STATES[abbrev]}</Link></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default StateLinks;
