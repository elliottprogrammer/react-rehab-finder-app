import React, { Component } from 'react';
import axios from 'axios';
import STATES from '../helpers/states';
import { Link } from 'react-router-dom';
import RehabsList from './RehabsList';
import loadingGif from '../images/loading.gif';

class RehabsByCity extends Component {
    state = {
        errors: [],
        citiesLoading: false,
        listingsLoading: false,
        listings: [],
        cities: []
    }

    componentDidMount() {
        // get city, state param from url
        const { state, city } = this.props;


        // start loading spinners
        this.setState({listingsLoading: true, citiesLoading: true});

        // axios call to samhsa api (get Listings in City)
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.thedrugbible.com/samhsa_api.php?type=city&state=${state.toLowerCase()}&city=${encodeURIComponent(city.replace('-', ' ').toLowerCase())}&rand=0&limit=20&area=250&types=all&categories=0`)
            .then((listings) => {
                this.setState({ listings: listings.data, listingsLoading: false });
            }).catch((error) => {
                console.log(error);
            });
    }

    render(props) {
        const { state, city } = this.props;
        // uppercase city words
        const uiCity = city.replace(/\b\w/g, l => l.toUpperCase());
        const { listings } = this.state;
        return (
            <React.Fragment>
                <nav aria-label="breadcrumb" className="mt-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/rehabs/${state.toLowerCase()}`}>{STATES[state.toUpperCase()]}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{uiCity}</li>
                    </ol>
                </nav>
                <h2 className="my-5">Substance Abuse Treatment Programs in {uiCity}, {state.toUpperCase()}</h2>

                {this.state.listingsLoading && <img src={loadingGif} alt="Loading..." />}

                <RehabsList listings={listings} />

            </React.Fragment>
        )
    }
  
}

export default RehabsByCity;
