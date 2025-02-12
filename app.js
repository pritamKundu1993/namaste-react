import React from 'react';
import { createRoot } from 'react-dom/client';

const restaurantsData = [
    {
        id: '1452',
        name: 'Subway',
        cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/8128f326-6b35-4f7a-974c-877ecf602826_1452.JPG',
        locality: 'Bull Temple Road',
        areaName: 'Basavanagudi',
        costForTwo: '₹350 for two',
        cuisines: ['Sandwich', 'Salads', 'Wrap', 'Healthy Food'],
        avgRating: 4.3,
        parentId: '2',
        avgRatingString: '4.3',
        totalRatingsString: '19K+',
        sla: {
            deliveryTime: 27,
            lastMileTravel: 2.8,
            serviceability: 'SERVICEABLE',
            slaString: '25-30 mins',
            lastMileTravelString: '2.8 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-13 02:00:00',
            opened: true,
        },
        badges: {
            imageBadges: [
                {
                    imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                    description: 'Delivery!',
                },
            ],
        },
    },
    {
        id: '484182',
        name: 'California Burrito',
        cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/e78fa71a-63ab-4d68-9bd3-391f36675b17_484182.jpg',
        locality: 'Gandhi Bazaar',
        areaName: 'Gandhi Bazaar',
        costForTwo: '₹250 for two',
        cuisines: [
            'Mexican',
            'American',
            'Salads',
            'Continental',
            'Keto',
            'Healthy Food',
            'Beverages',
            'Snacks',
            'Desserts',
            'Fast Food',
        ],
        avgRating: 4.6,
        parentId: '1252',
        avgRatingString: '4.6',
        totalRatingsString: '7.5K+',
        sla: {
            deliveryTime: 21,
            lastMileTravel: 2.1,
            serviceability: 'SERVICEABLE',
            slaString: '20-25 mins',
            lastMileTravelString: '2.1 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-13 01:00:00',
            opened: true,
        },
        badges: {
            textExtendedBadges: [
                {
                    iconId: 'guiltfree/GF_Logo_android_3x',
                    shortDescription: 'options available',
                    fontColor: '#7E808C',
                },
            ],
        },
    },
    {
        id: '103788',
        name: 'Starbucks Coffee',
        cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/2/10/cab33c3a-182b-4b9b-b578-3a720d15dda0_103788.JPG',
        locality: 'Malleshwaram',
        areaName: 'Malleshwaram',
        costForTwo: '₹400 for two',
        cuisines: ['Beverages', 'Cafe', 'Snacks', 'Desserts', 'Bakery', 'Ice Cream'],
        avgRating: 4.4,
        parentId: '195515',
        avgRatingString: '4.4',
        totalRatingsString: '1.0K+',
        sla: {
            deliveryTime: 52,
            lastMileTravel: 4.2,
            serviceability: 'SERVICEABLE',
            slaString: '50-55 mins',
            lastMileTravelString: '4.2 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-12 23:59:00',
            opened: true,
        },
        badges: {
            textExtendedBadges: [
                {
                    iconId: 'guiltfree/GF_Logo_android_3x',
                    shortDescription: 'options available',
                    fontColor: '#7E808C',
                },
            ],
        },
    },
    {
        id: '415734',
        name: 'Chaayos Chai+Snacks=Relax',
        cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_415734.JPG',
        locality: 'Sampige Road',
        areaName: 'Malleshwaram',
        costForTwo: '₹250 for two',
        cuisines: [
            'Beverages',
            'Chaat',
            'Snacks',
            'Bakery',
            'Street Food',
            'healthy',
            'Home Food',
            'Maharashtrian',
            'Italian',
            'Desserts',
        ],
        avgRating: 4.6,
        parentId: '281782',
        avgRatingString: '4.6',
        totalRatingsString: '1.0K+',
        sla: {
            deliveryTime: 36,
            lastMileTravel: 4.2,
            serviceability: 'SERVICEABLE',
            slaString: '35-40 mins',
            lastMileTravelString: '4.2 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-12 23:00:00',
            opened: true,
        },
    },
    {
        id: '396753',
        name: "Wendy's Burgers",
        cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4cf1123e-f4c0-402e-8ed3-c13c5072588b_396753.JPG',
        locality: 'KMK Towers',
        areaName: 'Central Bangalore',
        costForTwo: '₹200 for two',
        cuisines: ['Burgers', 'American', 'Fast Food', 'Snacks'],
        avgRating: 4.3,
        parentId: '972',
        avgRatingString: '4.3',
        totalRatingsString: '2.5K+',
        sla: {
            deliveryTime: 41,
            lastMileTravel: 3,
            serviceability: 'SERVICEABLE',
            slaString: '40-45 mins',
            lastMileTravelString: '3.0 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-12 23:59:00',
            opened: true,
        },
        badges: {
            textExtendedBadges: [
                {
                    iconId: 'guiltfree/GF_Logo_android_3x',
                    shortDescription: 'options available',
                    fontColor: '#7E808C',
                },
            ],
        },
        isOpen: true,
    },
    {
        id: '396748',
        name: 'The Good Bowl',
        cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/2385f59d-92c8-46fb-9bab-e370e61bc197_396748.jpg',
        locality: 'Residency Road',
        areaName: 'Central Bangalore',
        costForTwo: '₹400 for two',
        cuisines: ['Biryani', 'Pastas', 'Punjabi', 'Desserts', 'Beverages'],
        avgRating: 4.3,
        parentId: '7918',
        avgRatingString: '4.3',
        totalRatingsString: '837',
        sla: {
            deliveryTime: 42,
            lastMileTravel: 2.8,
            serviceability: 'SERVICEABLE',
            slaString: '40-45 mins',
            lastMileTravelString: '2.8 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-12 23:59:00',
            opened: true,
        },
    },
    {
        id: '816758',
        name: 'Baskin Robbins - Ice Cream Desserts',
        cloudinaryImageId: '6d82853686a08a41393caa841f2015ec',
        locality: 'Siddanna Layout',
        areaName: 'Banashankari Stage II',
        costForTwo: '₹250 for two',
        cuisines: ['Desserts', 'Ice Cream'],
        avgRating: 4.7,
        veg: true,
        parentId: '5588',
        avgRatingString: '4.7',
        totalRatingsString: '133',
        sla: {
            deliveryTime: 33,
            lastMileTravel: 4.5,
            serviceability: 'SERVICEABLE',
            slaString: '30-35 mins',
            lastMileTravelString: '4.5 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-12 23:00:00',
            opened: true,
        },
    },
    {
        id: '593',
        name: 'Anand Sweets & Savouries',
        cloudinaryImageId: '8d786951646dc137f9bf859727f90391',
        locality: 'Jayanagar',
        areaName: 'Jayanagar',
        costForTwo: '₹300 for two',
        cuisines: ['Sweets', 'Chaat', 'Snacks', 'Desserts', 'North Indian'],
        avgRating: 4.7,
        parentId: '53',
        avgRatingString: '4.7',
        totalRatingsString: '25K+',
        sla: {
            deliveryTime: 32,
            lastMileTravel: 4,
            serviceability: 'SERVICEABLE',
            slaString: '30-35 mins',
            lastMileTravelString: '4.0 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-12 22:00:00',
            opened: true,
        },
    },
    {
        id: '396750',
        name: 'The Biryani Life',
        cloudinaryImageId: 'wvjsuvqrd6ahqqyhmnrt',
        locality: 'Residency Road',
        areaName: 'Central Bangalore',
        costForTwo: '₹250 for two',
        cuisines: [
            'Biryani',
            'Mughlai',
            'Lucknowi',
            'Hyderabadi',
            'Kebabs',
            'Desserts',
            'Beverages',
        ],
        avgRating: 3.9,
        parentId: '8496',
        avgRatingString: '3.9',
        totalRatingsString: '416',
        sla: {
            deliveryTime: 38,
            lastMileTravel: 2.8,
            serviceability: 'SERVICEABLE',
            slaString: '35-40 mins',
            lastMileTravelString: '2.8 km',
            iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
            nextCloseTime: '2025-02-12 23:59:00',
            opened: true,
        },
    },
];

const Header = () => {
    return (
        <header className="header-outer">
            <div className="container">
                <div className="header-inner">
                    <div className="logo-container">
                        <img
                            className="logo"
                            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
                            alt="Swiggy Logo"
                        />
                    </div>
                    <nav className="nav-items">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Cart</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card">
            <img
                className="restaurant-image"
                alt={restaurant.name}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${restaurant.cloudinaryImageId}`}
            />
            <div className="restaurant-details">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-ratings">⭐ {restaurant.avgRating}</p>
                <p className="restaurant-cuisines">{restaurant.cuisines.join(', ')}</p>
                <p className="restaurant-area">locations: {restaurant.areaName}</p>
                <p className="restaurant-cost">{restaurant.costForTwo}</p>
                <p className="restaurant-delivery-time">🚴 {restaurant.sla.deliveryTime} mins</p>
            </div>
        </div>
    );
};

const RestaurantBody = () => {
    return (
        <main className="body">
            <div className="container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for restaurants..."
                        className="search-input"
                    />
                    <button className="search-button">Search</button>
                </div>
                <div className="restaurant-container">
                    {restaurantsData.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </main>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <RestaurantBody />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<AppLayout />);
