import React, { Component } from 'react';
import searchIcon from '../images/search-location-solid.svg';

export default class RehabSearch extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h2 className="h2 text-uppercase font700 mb-1">Rehab Quick Search</h2>
                    <h3 className="600 mb-4 h5">Find a Rehab Center Today!</h3>
                    <p className="mb-3">Just enter your zip code to get started</p>
                    <form className="zip-search">
                        <div className="input-group">
                            <input type="text" name="zipsearch_zip_code" className="form-control form-control-lg" placeholder="Enter Zip Code" aria-label="Enter Zip Code" />
                            <div className="input-group-append">
                                <button className="btn btn-lg btn-blue font700" type="submit">
                                    <span className="icon-search"><img src={searchIcon} alt="Search Icon"/></span> <span>SEARCH</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
