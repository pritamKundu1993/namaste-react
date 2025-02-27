import React from 'react';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/hooks/useRestaurantMenu';

const RestaurantMenu: React.FC = () => {
    const { slug } = useParams();
    const { menuData, loading, error } = useRestaurantMenu(slug);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!menuData) return <p>No menu data available</p>;

    const menuItems = menuData.page_data.sections?.SECTION_IMAGE_MENU?.menuItems || [];

    return (
        <div className="restaurant-menu-page">
            <h1>{menuData.page_info.pageTitle}</h1>
            <p>{menuData.page_info.pageDescription}</p>

            {menuItems.length > 0 ? (
                menuItems.map((menuItem, index) => (
                    <div key={index} className="menu-section">
                        <h2>{menuItem.label}</h2>
                        <p>{menuItem.subtitle}</p>
                        <div className="menu-images">
                            {menuItem.pages.map((page, idx) => (
                                <a
                                    key={idx}
                                    href={page.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={page.thumbUrl}
                                        alt={menuItem.label}
                                        className="menu-image"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No menu items available</p>
            )}
        </div>
    );
};

export default RestaurantMenu;
