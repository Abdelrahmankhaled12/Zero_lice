import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { HEADER_LINKS } from '../../../constants';
import logo from '../../../assets/logo_header.png';
import './style.scss';

/**
 * Interface for MenuMobile component props
 */
interface MenuMobileProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * MenuMobile Component
 * 
 * Displays a mobile-friendly navigation menu with links and booking option.
 * 
 * @param {MenuMobileProps} props - Component props
 * @returns {React.ReactElement} - The rendered mobile menu component
 */
const MenuMobile: React.FC<MenuMobileProps> = ({
    isOpen,
    onClose,
}) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    /**
     * Handles navigation and menu closure
     * @param {string} path - The route to navigate to
     */
    const handleNavigation = (path: string) => {
        navigate(path);
        onClose();
    };


    return (
        <>
            {/* Mobile Menu Container */}
            <div
                className={`${isOpen ? "menu menu_active" : 'menu '}`}
                aria-modal="true"
                aria-hidden={!isOpen}
            >
                <div className="menuContainer">
                    {/* Overlay to close the menu when clicked */}
                    <div style={{ flex: "1" }} onClick={onClose}></div>
                    <div className={"menuContent"}>
                        {/* Top Section: Logo and Close Button */}
                        <div className={"menuHeader"}>
                            <div
                                className='logo'
                                onClick={() => handleNavigation('/')}
                                role="button"
                                tabIndex={0}
                                aria-label="Navigate to home page"
                                onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/')}
                            >
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    loading="eager"
                                />
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Close menu"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav>
                            <ul>
                                {HEADER_LINKS.map((item, index) => (
                                    <li
                                        key={item.router + index}
                                        className={`${pathname === item.router ? "active" : ''}`}
                                        onClick={() => handleNavigation(item.router)}
                                        role="button"
                                        tabIndex={0}
                                        aria-current={pathname === item.router ? 'page' : undefined}
                                        onKeyDown={(e) => e.key === 'Enter' && handleNavigation(item.router)}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Book Now Button */}
                        <button
                            className={"bookButton"}
                            onClick={() => handleNavigation('/book')}
                            aria-label="Book an appointment"
                        >
                            <span>Book Now</span>
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MenuMobile;