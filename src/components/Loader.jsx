const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-card">
                <div className="loader-image skeleton"></div>
                <div className="loader-text">
                    <div className="skeleton skeleton-text skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
