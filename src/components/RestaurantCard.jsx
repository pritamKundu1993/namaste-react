const RestaurantCard = ({ restaurant }) => {
    const cuisines =
        restaurant?.subtitleData?.cuisines?.map((e) => e.name).join(', ') || 'No cuisine info';

    const deliveryTime =
        restaurant?.rating_new?.ratings?.DELIVERY?.bucketRatings?.buckets?.[0]?.title ||
        'Delivery time N/A';

    const locality = restaurant?.subtitleData?.locality?.text || 'Location not available';

    const proOffer = restaurant?.proOfferText || null;
    const goldOffer = restaurant?.gold?.offerValue || null;
    const offers = [proOffer, goldOffer].filter(Boolean).join(', ') || 'No offers available';

    return (
        <div className="restaurant-card">
            <img className="restaurant-image" alt={restaurant.name} src={restaurant.imageUrl} />
            <div className="restaurant-details">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-ratings">
                    ⭐ {restaurant?.rating?.aggregate_rating || 'N/A'}
                </p>
                <p className="restaurant-cuisines">😋{cuisines}</p>
                <p className="restaurant-area">🏠 {locality}</p>
                <p className="restaurant-offers">😄 {offers}</p>
                <p className="restaurant-delivery-time">🚗 {deliveryTime}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
