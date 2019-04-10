import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import STATES from './states';
import listingPlaceholderImage from './images/listing-placeholder.svg';

class RehabsByState extends Component {
  state = {
    loading: false,
    listings: [],
    cities: []
  }

  componentDidMount() {

    // get state param from url
    const { state } = this.props.match.params;
    // axios call to samhsa api
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.thedrugbible.com/samhsa_api.php?type=state&state=${state.toLowerCase()}&rand=0&limit=20&area=250&types=all&categories=0`)
    .then((listings) => {
      console.log(listings.data);
      this.setState({ listings: listings.data }, () => {
        // loop through listings and get cities
        const allCities = this.state.listings.map( listing => listing.location_city );
        const cities = allCities.sort().filter((item, pos, ary) => {
          return !pos || item !== ary[pos - 1];
        });
        this.setState({ cities: cities });
      });
    });

  }

  render() {
    const { state } = this.props.match.params;
    const { listings } = this.state;
    return (
      <div className="container">
        <h2 className="my-5">Cities in {STATES[state]} with Substance Abuse Treatment Programs:</h2>
        <p className="lead">Select a City:</p>
        <ul className="list-unstyled row">
          {this.state.cities.map((city, index) => {
            return <li key={index} className="col-md-3"><Link to={`/rehabs/${state.toLowerCase()}/${city.replace(' ', '-').toLowerCase()}`}>{city}</Link></li>
          })}
        </ul>
        <h2 className="my-5">Substance Abuse Treatment Programs in {STATES[state]}</h2>
        <div className="row">
          {listings.map((listing) => {
            return (
              <div key={listing.id} className="col-md-6">
                <article className="listing-card">
                  <div className="listing-card__header">
                    <div className="listing-card__img">
                      <img src={listingPlaceholderImage} alt={listing.name1}/>
                    </div>
                    <div className="listing-card__title">
                      <h3 className="listing-card__name mb10">{listing.name1}</h3>
                      <address className="indent-under">
                        {listing.location_street1}<br/>
                        {listing.location_city}, {listing.location_state} {listing.location_zip}<br/>
                        {listing.phone}<br/>
                        {listing.website}
                      </address>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default RehabsByState;