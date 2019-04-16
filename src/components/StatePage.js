import React from 'react';
import RehabSearch from './RehabSearch';
import RehabsByState from './RehabsByState';

export default function StatePage({match}) {
    const { state } = match.params;
    return (
        <React.Fragment>
            <RehabSearch />
            <RehabsByState state={state}/>
        </React.Fragment>
    )
}
