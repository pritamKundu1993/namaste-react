import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="restaurant-card skeleton-card">
            <div className="skeleton skeleton-image"></div>
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
