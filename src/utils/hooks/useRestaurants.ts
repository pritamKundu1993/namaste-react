import { useState, useEffect } from 'react';

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

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
    };

    const resetFilter = () => {
        setFilteredRestaurants(restaurants);
    };

    return {
        restaurants,
        filteredRestaurants,
        setFilteredRestaurants,
        loading,
        filterTopRated,
        resetFilter,
    };
};

export default useRestaurants;
