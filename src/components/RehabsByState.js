import React, { Component } from 'react';
import axios from 'axios';
import STATES from '../helpers/states';
import CitiesList from './CitiesList';
import RehabsList from './RehabsList';
import loadingGif from '../images/loading.gif';

class RehabsByState extends Component {
    state = {
        errors: [],
        citiesLoading: false,
        listingsLoading: false,
        listings: [],
        cities: []
    }

componentDidMount() {
    // get state param from url
    const { state } = this.props.match.params;

    // start loading spinners
    this.setState({listingsLoading: true, citiesLoading: true});

    // axios call to samhsa api
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.thedrugbible.com/samhsa_api.php?type=state&state=${state.toLowerCase()}&rand=0&limit=20&area=250&types=all&categories=0`)

        .then((listings) => {
            this.setState({ listings: listings.data, listingsLoading: false }, () => {
                // loop through listings and get cities
                const allCities = this.state.listings.map( listing => listing.location_city );
                // sort cities alphabetically and remove duplicates
                const cities = allCities.sort().filter((item, pos, ary) => {
                    return !pos || item !== ary[pos - 1];
                });
                this.setState({ cities: cities, citiesLoading: false });
            });
        }).catch((error) => {
            console.log(error);
        });
}

    render() {
        const { state } = this.props.match.params;
        const { listings, cities } = this.state;
        return (
            <React.Fragment>
                <h2 className="my-5">Cities in {STATES[state]} with Substance Abuse Treatment Programs:</h2>
                <p className="lead">Select a City:</p>

                {this.state.citiesLoading && <img src={loadingGif} alt="Loading..." />}
                
                <CitiesList usState={state} cities={cities} />

                <h2 className="my-5">Substance Abuse Treatment Programs in {STATES[state]}</h2>

                {this.state.listingsLoading && <img src={loadingGif} alt="Loading..." />}
                
                <RehabsList listings={listings} />
            
            </React.Fragment>
        )
    }
}

export default RehabsByState;