import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Loader from '../components/Loader';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import useRestaurants from '../utils/hooks/useRestaurants';
import useSearch from '../utils/hooks/useSearch';

const Body = () => {
    const {
        restaurants,
        filteredRestaurants,
        setFilteredRestaurants,
        loading,
        filterTopRated,
        resetFilter,
    } = useRestaurants();
    const { searchText, setSearchText, handleSearch } = useSearch(
        restaurants,
        setFilteredRestaurants
    );
    const checkOnline = useOnlineStatus();

    if (!checkOnline) {
        return <h1>You are now offline, please check your internet connection</h1>;
    }

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

                    {filteredRestaurants.length === restaurants.length ? (
                        <button className="filter-button" onClick={filterTopRated}>
                            Show Top Rated
                        </button>
                    ) : (
                        <button className="all-button" onClick={resetFilter}>
                            Show All Restaurants
                        </button>
                    )}
                </div>

                <div className="restaurant-container">
                    {loading ? (
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => <Loader key={index} />)
                    ) : filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
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
