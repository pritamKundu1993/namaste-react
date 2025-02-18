import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="header-outer">
            <div className="container">
                <div className="header-inner">
                    <div className="logo-container">
                        <img className="logo" src={LOGO_URL} alt="Swiggy Logo" />
                    </div>
                    <nav className="nav-items">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">ontact Us</Link>
                            </li>
                            <li>
                                <a href="#">Cart</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
