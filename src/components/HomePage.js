import React from 'react';
import RehabSearch from '../components/RehabSearch';
import StateLinks from '../components/StateLinks';

export default function HomePage() {
  return (
    <React.Fragment>
        <RehabSearch />
        <StateLinks />
    </React.Fragment>
  )
}
