import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="restaurant-card skeleton-card">
            <div className="restaurant-image skeleton"></div>
            <div className="restaurant-details">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
