import { useEffect, useState } from 'react';

interface MenuItem {
    label: string;
    subtitle: string;
    pages: Array<{
        url: string;
        thumbUrl: string;
    }>;
}

interface MenuData {
    page_info: {
        pageTitle: string;
        pageDescription: string;
    };
    page_data: {
        sections: {
            SECTION_IMAGE_MENU: {
                menuItems: MenuItem[];
            };
        };
    };
}

const useRestaurantMenu = (slug: string | undefined) => {
    const [menuData, setMenuData] = useState<MenuData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMenuData = async () => {
        try {
            const response = await fetch(
                `https://www.zomato.com/webroutes/getPage?page_url=/kolkata/${slug}/menu`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: MenuData = await response.json();
            setMenuData(data);
        } catch (err) {
            setError('Failed to fetch menu data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMenuData();
    }, [slug]);

    return { menuData, loading, error };
};

export default useRestaurantMenu;
