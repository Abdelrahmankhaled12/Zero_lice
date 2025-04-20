// src/components/Footer/Footer.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import './style.scss';
import { ContentWrapper } from '..';
import { CONTACT_INFO, IMPORTANT_LINKS, NAV_LINKS, SOCIAL_LINKS } from '../../constants';

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
                                        <FontAwesomeIcon icon={faArrowRight} />
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
                                        <FontAwesomeIcon icon={faArrowRight} />
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