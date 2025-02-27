import React from 'react';
import { useParams, Link } from 'react-router';
import '../RestaurantDetails/RestaurantDetails.css';
import useRestaurantDetails from '../../utils/hooks/useRestauranDetails';

const RestaurantDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const { restaurant, loading, error, breadcrumbs } = useRestaurantDetails(slug);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!restaurant) return <p>No restaurant details available</p>;

    const basicInfo = restaurant.sections?.SECTION_BASIC_INFO;
    const contactInfo = restaurant.sections?.SECTION_RES_CONTACT;
    const highlights = restaurant.sections?.SECTION_RES_DETAILS?.HIGHLIGHTS?.highlights || [];
    const averageCost = restaurant.sections?.SECTION_RES_DETAILS?.CFT_DETAILS?.cfts || [];
    const menus = restaurant.sections?.SECTION_RES_DETAILS?.IMAGE_MENUS?.menus || [];
    const offers = restaurant.sections?.SECTION_DINING_OFFERS_V2?.offers || [];
    const reviews = restaurant.sections?.SECTION_REVIEW_HIGHLIGHTS?.entities || [];

    return (
        <div className="restaurant-details-page">
            {/* Breadcrumbs */}
            <nav className="breadcrumbs">
                {breadcrumbs.map((crumb, index) => (
                    <span key={index}>
                        <Link to={crumb.url} className="breadcrumb-link">
                            {crumb.title}
                        </Link>
                        {index < breadcrumbs.length - 1 && ' / '}
                    </span>
                ))}
            </nav>

            {/* Restaurant Details */}
            <h1>{basicInfo?.name || 'Restaurant Name'}</h1>
            {basicInfo?.res_thumb && (
                <img src={basicInfo.res_thumb} alt={basicInfo.name} className="restaurant-image" />
            )}

            <p>
                <strong>Location:</strong> {contactInfo?.address || 'Not Available'}
            </p>
            <p>
                <strong>Phone:</strong> {contactInfo?.phoneDetails?.phoneStr || 'Not Provided'}
            </p>

            {/* Cuisine */}
            <h2>Cuisine</h2>
            <ul>
                {basicInfo?.cuisine_string?.split(', ').map((cuisine, index) => (
                    <li key={index}>{cuisine}</li>
                ))}
            </ul>

            {/* Ratings */}
            <h2>Rating</h2>
            <p>
                <strong>Aggregate Rating:</strong> {basicInfo?.rating?.aggregate_rating || 'N/A'}
            </p>
            <p>
                <strong>Total Votes:</strong> {basicInfo?.rating?.votes || 0}
            </p>
            <p>
                <strong>Dining Rating:</strong>{' '}
                {basicInfo?.rating_new?.ratings?.DINING?.rating || 'N/A'} (
                {basicInfo?.rating_new?.ratings?.DINING?.reviewCount || 0} Reviews)
            </p>

            {/* Highlights */}
            <h2>Highlights</h2>
            <ul>
                {highlights.length > 0 ? (
                    highlights.map((highlight, index) => <li key={index}>{highlight.text}</li>)
                ) : (
                    <li>No highlights available</li>
                )}
            </ul>

            {/* Average Cost */}
            <h2>Average Cost</h2>
            {averageCost.length > 0 ? (
                averageCost.map((cost, index) => (
                    <p key={index}>
                        <strong>{cost.title}:</strong> {cost.subtitle}
                    </p>
                ))
            ) : (
                <p>No cost details available</p>
            )}

            {/* Menus */}
            <Link to={`/restaurant/${slug}/menu`} className="menu-link">
                <h2>Menus</h2>
            </Link>
            <div className="menu-container">
                {menus.length > 0 ? (
                    menus.map((menu, index) => (
                        <div key={index} className="menu-item">
                            <div className="menu-info">
                                <p>
                                    <strong>{menu.label}</strong>
                                </p>
                                <span>{menu.subtitle}</span>
                            </div>
                            <img src={menu.thumb} alt={menu.label} className="menu-thumbnail" />
                        </div>
                    ))
                ) : (
                    <p>No menus available</p>
                )}
            </div>

            {/* User Reviews */}
            <h2>User Reviews</h2>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <p key={index}>
                        <strong>{review.userName}:</strong> "{review.comment}"
                    </p>
                ))
            ) : (
                <p>No user reviews available.</p>
            )}

            {/* Offers */}
            <h2>Offers</h2>
            <ul>
                {offers.length > 0 ? (
                    offers.map((offer, index) => (
                        <li key={index}>
                            {offer.title}: {offer.subtitle}
                        </li>
                    ))
                ) : (
                    <li>No offers available</li>
                )}
            </ul>

            {/* Directions */}
            <h2>Directions</h2>
            {contactInfo?.latitude && contactInfo?.longitude ? (
                <p>
                    You can find the restaurant on the map{' '}
                    <a
                        href={`https://maps.zomato.com/php/staticmap?center=${contactInfo.latitude},${contactInfo.longitude}&zoom=16`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                </p>
            ) : (
                <p>Location map not available</p>
            )}
        </div>
    );
};

export default RestaurantDetails;
