import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import searchIcon from '../images/search-location-solid.svg';

class RehabSearch extends Component {
    state = {
        city: '',
        stabbr: '',
        redirectToCity: false,
        loading: false,
        error: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const zip = e.target.zip_code.value;
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.thedrugbible.com/samhsa_api.php?type=findzip&zip=${zip}`)
            .then((response) => {
                const city = response.data[0].location_city.replace(' ', '-').toLowerCase();
                const stabbr = response.data[0].location_state.toLowerCase();
                axios.get(`https://cors-anywhere.herokuapp.com/http://api.thedrugbible.com/samhsa_api.php?type=city&state=${stabbr}&city=${city}&rand=0&limit=20&area=250&types=all&categories=0`)
                .then((listings) => {
                    if(listings.data.errors) {
                        this.setState({error: 'I\'m sorry, we could not find any listings for that zip code. Please try another nearby zip code.'})
                    } else {
                        this.setState({ city, stabbr, errors: '', redirectToCity: true });
                    }
                    
                })
                
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { city, stabbr, redirectToCity, error } = this.state;
        const redirect = ( <Redirect to={`/rehabs/${stabbr}/${city}`} /> );
        const searchForm = (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h2 className="h2 text-uppercase font700 mb-1">Rehab Quick Search</h2>
                    <h3 className="600 mb-4 h5">Find a Rehab Center Today!</h3>
                    <p className="mb-3">Just enter your zip code to get started</p>
                    <form className="zip-search" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input type="text" name="zip_code" className={"form-control form-control-lg" + (error ? ' is-invalid' : '' )} placeholder="Enter Zip Code" aria-label="Enter Zip Code" />
                            <div className="input-group-append">
                                <button className="btn btn-lg btn-blue font700" type="submit">
                                    <span className="icon-search"><img src={searchIcon} alt="Search Icon"/></span> <span>SEARCH</span>
                                </button>
                            </div>
                            <div class="invalid-feedback">{error}</div>
                        </div>
                    </form>
                </div>
            </div>
        );
        
        return redirectToCity ? redirect : searchForm;
             

    }
}

export default RehabSearch;
