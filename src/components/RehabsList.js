import React from 'react';
import listingPlaceholderImage from '../images/listing-placeholder.svg';

function RehabsList({listings}) {
  return (
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
  )
}

export default RehabsList;
