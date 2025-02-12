import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Loader from './Loader';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                'https://www.zomato.com/webroutes/getPage?page_url=/kolkata/rooftop&location=&isMobile=0'
            );
            const json = await response.json();
            const fetchedRestaurants = json?.page_data?.sections?.SECTION_ENTITIES_DATA || [];

            setRestaurants(fetchedRestaurants);
            setFilteredRestaurants(fetchedRestaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterTopRated = () => {
        const topRated = restaurants.filter(
            (restaurant) => restaurant?.rating?.aggregate_rating >= 4.5
        );
        setFilteredRestaurants(topRated);
        setShowAll(false);
    };

    const showAllRestaurant = () => {
        setFilteredRestaurants(restaurants);
        setShowAll(true);
    };

    const handleSearch = () => {
        const filtered = restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    return (
        <main className="body">
            <div className="container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for restaurants..."
                        className="search-input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        Search
                    </button>

                    {showAll ? (
                        <button className="filter-button" onClick={filterTopRated}>
                            Show Top Rated
                        </button>
                    ) : (
                        <button className="all-button" onClick={showAllRestaurant}>
                            Show All Restaurants
                        </button>
                    )}
                </div>

                <div className="restaurant-container">
                    {loading ? (
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => <Loader key={index} />)
                    ) : filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))
                    ) : (
                        <p>No restaurants found</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Body;
