import React from 'react';

const withOfferBadge = (WrappedComponent) => {
    return (props) => {
        const { restaurant } = props;

        const proOffer = restaurant?.proOfferText || null;
        const goldOffer = restaurant?.gold?.offerValue || null;
        const offers = [proOffer, goldOffer].filter(Boolean).join(', ');

        return (
            <div className="wrapper">
                {/* Image + Badge */}
                <div className="restaurant-image-container">
                    <img
                        className="restaurant-card-image"
                        alt={restaurant.name}
                        src={restaurant.imageUrl}
                    />

                    {offers && (
                        <div className="offer-badge">
                            <img
                                src="https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png"
                                alt="Zomato Walkin"
                                className="offer-icon"
                            />
                            <div className="offer-text">
                                Flat <b>{offers}</b>
                            </div>
                        </div>
                    )}
                </div>

                {/* Render the actual card details here */}
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withOfferBadge;
