import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

const Header = () => {
    const checkOnline = useOnlineStatus();

    return (
        <header className="header-outer">
            <div className="container">
                <div className="header-inner">
                    <div className="logo-container">
                        <img className="logo" src={LOGO_URL} alt="Swiggy Logo" />
                    </div>
                    <nav className="nav-items">
                        <ul>
                            <li>{checkOnline ? '🟢 Online' : '🔴 Offline'}</li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">contact Us</Link>
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
