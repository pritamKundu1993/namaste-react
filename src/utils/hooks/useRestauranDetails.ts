import { useEffect, useState } from 'react';

const useRestaurantDetails = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const fetchRestaurantDetails = async () => {
        try {
            const response = await fetch(
                `https://www.zomato.com/webroutes/getPage?page_url=/kolkata/${id}`
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

    useEffect(() => {
        fetchRestaurantDetails();
    }, [id]);

    return { restaurant, loading, error, breadcrumbs };
};

export default useRestaurantDetails;
