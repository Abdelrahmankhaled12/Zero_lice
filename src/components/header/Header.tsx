import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import MenuMobile from './menu/MenuMobile';
import { CONTACT_WHATSS, HEADER_LINKS } from '../../constants';
import logo from '../../assets/logo_header.png';
import './style.scss'

/**
 * Interface for Header component props
 */
interface HeaderProps {
    headerHome?: boolean;
}

/**
 * Header Component
 * 
 * Displays the website header with navigation, logo, and booking button.
 * Handles responsive behavior and mobile menu functionality.
 * 
 * @param {HeaderProps} props - Component props
 * @returns {React.ReactElement} - The rendered header component
 */

const Header: React.FC<HeaderProps> = ({ headerHome = false }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [headerState, setHeaderState] = useState<'top' | 'show' | 'hide'>('top');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Control header visibility on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 10) {
                setHeaderState('show');
            } else {
                setHeaderState('top');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    /**
     * Handles navigation to a specific route
     * @param {string} path - The route to navigate to
     */
    const handleNavigate = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`${headerHome ? ` header_home ${headerState}` : headerState}`} role="banner">
                <div className={"container"}>
                    <div className={"content "}>
                        {/* Logo */}
                        <div
                            className={"logo"}
                            onClick={() => handleNavigate('/')}
                            role="button"
                            tabIndex={0}
                            aria-label="Navigate to home page"
                            onKeyDown={(e) => e.key === 'Enter' && handleNavigate('/')}
                        >
                            <img
                                src={logo}
                                alt="Zero Lice Logo"
                                loading="eager"
                            />
                        </div>
                        {/* Desktop Navigation */}
                        <nav>
                            <ul>
                                {HEADER_LINKS.map((item , index) => (
                                    <li
                                        key={index}
                                        className={`${pathname === item.router ? "active" : ''}`}
                                        onClick={() => handleNavigate(item.router)}
                                        role="button"
                                        tabIndex={0}
                                        aria-current={pathname === item.router ? 'page' : undefined}
                                        onKeyDown={(e) => e.key === 'Enter' && handleNavigate(item.router)}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* Book Now Button */}
                        <button
                            className={"bookButton"}
                            onClick={() =>  window.open(CONTACT_WHATSS, '_blank')}
                            aria-label="Book an appointment"
                        >
                            <span>Book Now</span>
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                aria-hidden="true"
                            />
                        </button>
                        {/* Mobile Menu Toggle */}
                        <button
                            className={"menuToggle"}
                            onClick={ ()=> setIsMenuOpen(true)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </header >
            {/* Mobile Menu */}
            <MenuMobile
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
};

export default Header;