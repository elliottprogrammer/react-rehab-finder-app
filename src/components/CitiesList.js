import React from 'react';
import { Link } from 'react-router-dom';

function CitiesList({usState, cities}) {
    console.log(usState);
    console.log(cities);
    return (
        <ul className="list-unstyled pb-5 row">
            {cities.map((city, index) => {
                return (
                    <li key={index} className="col-md-3">
                        <Link to={`/rehabs/${usState.toLowerCase()}/${city.replace(' ', '-').toLowerCase()}`}>
                            {city}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default CitiesList;
