import React from 'react';
import { useNavigate } from 'react-router';
import withOfferBadge from './WithOfferBadge';

const RestaurantCard = ({ restaurant }) => {
    const navigate = useNavigate();

    const extractUrlKey = (url: string) => {
        return url.replace(/^https:\/\/www\.zomato\.com\/kolkata\//, '').split('?')[0];
    };

    const handleClick = () => {
        const urlKey = extractUrlKey(restaurant.url);
        navigate(`/restaurant/${urlKey}`);
    };

    const cuisines =
        restaurant?.subtitleData?.cuisines?.map((e) => e.name).join(', ') || 'No cuisine info';

    const locality = restaurant?.subtitleData?.locality?.text || 'Location not available';

    return (
        <div className="restaurant-card" onClick={handleClick}>
            {/* This will now be placed BELOW the image & badge */}
            <div className="restaurant-details">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-ratings">
                    ⭐ {restaurant?.rating?.aggregate_rating || 'N/A'}
                </p>
                <p className="restaurant-cuisines">😋 {cuisines}</p>
                <p className="restaurant-area">🏠 {locality}</p>
            </div>
        </div>
    );
};

// Export wrapped component
export default withOfferBadge(RestaurantCard);
