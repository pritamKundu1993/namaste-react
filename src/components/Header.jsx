import { LOGO_URL } from '../utils/constants';

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
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
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
