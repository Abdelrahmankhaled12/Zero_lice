// src/components/Footer/Footer.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    faFacebookF,
    faInstagram,
    faXTwitter,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faLocationDot,
    faPhoneVolume,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import './style.scss';
import { ContentWrapper } from '..';

/**
 * Interface for contact information items
 */
interface ContactInfo {
    icon: typeof faLocationDot;
    text: string;
    type: 'address' | 'phone' | 'email';
}

/**
 * Interface for navigation links
 */
interface NavLink {
    icon: typeof faArrowRight;
    text: string;
    path: string;
}

/**
 * Interface for social media links
 */
interface SocialLink {
    icon: typeof faFacebookF;
    url: string;
    name: string;
}

/**
 * Footer Component
 * 
 * Displays the website footer with contact information, navigation links,
 * important links, and social media connections.
 * 
 * @returns {React.ReactElement} - The rendered footer component
 */
const Footer: React.FC = () => {
    const navigate = useNavigate();

    /**
     * Contact information data
     */
    const CONTACT_INFO: ContactInfo[] = [
        {
            icon: faLocationDot,
            text: "123 Street, New York, USA",
            type: 'address'
        },
        {
            icon: faPhoneVolume,
            text: "+012 345 67890",
            type: 'phone'
        },
        {
            icon: faEnvelope,
            text: "info@example.com",
            type: 'email'
        }
    ];

    /**
     * Navigation links data
     */
    const NAV_LINKS: NavLink[] = [
        { icon: faArrowRight, text: "Home", path: "/" },
        { icon: faArrowRight, text: "About us", path: "/about" },
        { icon: faArrowRight, text: "Pricing", path: "/pricing" },
        { icon: faArrowRight, text: "Booking", path: "/book" },
        { icon: faArrowRight, text: "Contact us", path: "/contact" }
    ];

    /**
     * Important links data
     */
    const IMPORTANT_LINKS: NavLink[] = [
        { icon: faArrowRight, text: "Privacy Policy", path: "/privacy" },
        { icon: faArrowRight, text: "Terms and Conditions", path: "/terms" }
    ];

    /**
     * Social media links data
     */
    const SOCIAL_LINKS: SocialLink[] = [
        {
            icon: faFacebookF,
            url: "https://facebook.com",
            name: "Facebook"
        },
        {
            icon: faInstagram,
            url: "https://instagram.com",
            name: "Instagram"
        },
        {
            icon: faXTwitter,
            url: "https://twitter.com",
            name: "Twitter"
        },
        {
            icon: faLinkedinIn,
            url: "https://linkedin.com",
            name: "LinkedIn"
        }
    ];

    /**
     * Handles navigation to a specific path
     * @param path - The route to navigate to
     */
    const handleNavigate = (path: string) => {
        navigate(path);
    };

    /**
     * Handles opening social media links in a new tab
     * @param url - The social media URL to open
     */
    const handleSocialLinkClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="footer" role="contentinfo">
            <ContentWrapper>
                <div className="footer__grid">
                    {/* Logo Section */}
                    <div className="footer__section footer__logo-section">
                        <div className="footer__logo">
                            <img
                                src={logo}
                                alt="Zero Lice Logo"
                                className="footer__logo-image"
                                onClick={() => navigate("/")}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                    {/* Contact Information Section */}
                    <div className="footer__section">
                        <h2 className="footer__heading">Contact information</h2>
                        <ul className="footer__list">
                            {CONTACT_INFO.map((item, index) => (
                                <li key={index} className="footer__list-item">
                                    <div className="footer__icon" aria-hidden="true">
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    {item.type === 'email' ? (
                                        <a
                                            href={`mailto:${item.text}`}
                                            className="footer__link"
                                        >
                                            {item.text}
                                        </a>
                                    ) : item.type === 'phone' ? (
                                        <a
                                            href={`tel:${item.text.replace(/[^0-9+]/g, '')}`}
                                            className="footer__link"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <p className="footer__text">{item.text}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Quick Links Section */}
                    <div className="footer__section">
                        <h2 className="footer__heading">Quick Links</h2>
                        <ul className="footer__list">
                            {NAV_LINKS.map((link, index) => (
                                <li
                                    key={index}
                                    className="footer__list-item footer__clickable"
                                    onClick={() => handleNavigate(link.path)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && handleNavigate(link.path)}
                                    aria-label={`Navigate to ${link.text}`}
                                >
                                    <div className="footer__icon" aria-hidden="true">
                                        <FontAwesomeIcon icon={link.icon} />
                                    </div>
                                    <p className="footer__link-text">{link.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Important Links Section */}
                    <div className="footer__section">
                        <h2 className="footer__heading">Important links</h2>
                        <ul className="footer__list">
                            {IMPORTANT_LINKS.map((link, index) => (
                                <li
                                    key={index}
                                    className="footer__list-item footer__clickable"
                                    onClick={() => handleNavigate(link.path)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && handleNavigate(link.path)}
                                    aria-label={`Navigate to ${link.text}`}
                                >
                                    <div className="footer__icon" aria-hidden="true">
                                        <FontAwesomeIcon icon={link.icon} />
                                    </div>
                                    <p className="footer__link-text">{link.text}</p>
                                </li>
                            ))}
                        </ul>

                        {/* Social Media Links */}
                        <div className="footer__social-links">
                            {SOCIAL_LINKS.map((social, index) => (
                                <div
                                    key={index}
                                    className="footer__social-icon"
                                    onClick={() => handleSocialLinkClick(social.url)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSocialLinkClick(social.url)}
                                    aria-label={`Visit our ${social.name} page`}
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            {/* Copyright Section */}
            <div className="footer__copyright">
                Copyrights © {new Date().getFullYear()} Zero Lice | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;