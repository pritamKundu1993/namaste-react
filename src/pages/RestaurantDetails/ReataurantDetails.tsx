import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import '../RestaurantDetails/RestaurantDetails.css';

const RestaurantDetails = () => {
    const { slug } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    console.log(slug);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await fetch(
                    `https://www.zomato.com/webroutes/getPage?page_url=/kolkata/${slug}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch restaurant details');
                }
                const data = await response.json();
                setRestaurant(data?.page_data);
                setBreadcrumbs(data?.page_data?.sections?.SECTION_BREADCRUMBS || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurantDetails();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!restaurant) return <p>No restaurant details available</p>;

    const basicInfo = restaurant?.sections?.SECTION_BASIC_INFO;
    const contactInfo = restaurant?.sections?.SECTION_RES_CONTACT;
    const highlights = restaurant?.sections?.SECTION_RES_DETAILS?.HIGHLIGHTS?.highlights || [];
    const averageCost = restaurant?.sections?.SECTION_RES_DETAILS?.CFT_DETAILS?.cfts || [];
    const menus = restaurant?.sections?.SECTION_RES_DETAILS?.IMAGE_MENUS?.menus || [];
    const offers = restaurant?.sections?.SECTION_DINING_OFFERS_V2?.offers || [];
    const reviews = restaurant?.sections?.SECTION_REVIEW_HIGHLIGHTS?.entities || [];

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
                <img
                    src={basicInfo?.res_thumb}
                    alt={basicInfo?.name || 'Restaurant'}
                    className="restaurant-image"
                />
            )}

            <p>
                <strong>Location:</strong> {contactInfo?.address || 'Not Available'}
            </p>
            <p>
                <strong>Zip Code:</strong> {contactInfo?.zipcode || 'N/A'}
            </p>
            <p>
                <strong>Phone:</strong> {contactInfo?.phoneDetails?.phoneStr || 'Not Provided'}
            </p>
            <p>
                <strong>Website:</strong>{' '}
                {basicInfo?.canonicalUrl ? (
                    <a
                        href={basicInfo?.canonicalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit restaurant's Zomato page"
                    >
                        {basicInfo?.name} on Zomato
                    </a>
                ) : (
                    'N/A'
                )}
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
            <p>
                <strong>Delivery Rating:</strong> Not applicable
            </p>

            {/* Operating Hours */}
            <h2>Operating Hours</h2>
            <p>
                <strong>Today:</strong> {basicInfo?.timing?.timing_desc || 'Not Available'}
            </p>
            <p>
                <strong>Status:</strong> {basicInfo?.res_status_text || 'Unknown'}
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
            <h2>Menus</h2>
            <ul>
                {menus.length > 0 ? (
                    menus.map((menu, index) => (
                        <li key={index}>
                            {menu.label} ({menu.subtitle})
                        </li>
                    ))
                ) : (
                    <li>No menus available</li>
                )}
            </ul>

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
                        href={`https://maps.zomato.com/php/staticmap?center=${contactInfo?.latitude},${contactInfo?.longitude}&zoom=16`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View restaurant location on Zomato maps"
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
