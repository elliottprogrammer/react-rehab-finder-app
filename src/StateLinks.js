import React from 'react';
import STATES from './states';
import { Link } from 'react-router-dom';

function StateLinks() {
  return (
    <div className="container">
        <h2 className="my-5">Select a State:</h2>
        <ul className="list-unstyled row">
            {Object.keys(STATES).map((abbrev) => {
                return <li className="col-md-3"><Link to={`/rehabs/${abbrev}`}>{STATES[abbrev]}</Link></li>
            })}
        </ul>
      
    </div>
  )
}

export default StateLinks;
