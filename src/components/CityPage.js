import React from 'react';
import RehabSearch from './RehabSearch';
import RehabsByCity from './RehabsByCity';

export default function CityPage({ match }) {
    const { city, state }  = match.params;
    return (
        <React.Fragment>
            <RehabSearch />
            <RehabsByCity state={state} city={city} />
        </React.Fragment>
    )
}
