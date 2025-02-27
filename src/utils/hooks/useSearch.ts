import { useState } from 'react';

const useSearch = (restaurants, setFilteredRestaurants) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        const filtered = restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    return { searchText, setSearchText, handleSearch };
};

export default useSearch;
