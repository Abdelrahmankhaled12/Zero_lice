// src/pages/home/missionSection/missionSection.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    faHandshake,
    faFaceGrinWide,
    faHourglassHalf,
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import missionImage from "../../../assets/mission.jpg"; // Using path alias
import './style.scss'; // SCSS module for better scoping
import { ContentWrapper } from '../../../components';

/**
 * Interface for stat item in the mission section
 */
interface StatItem {
    icon: typeof faHandshake; // Using one of the icon types as reference
    text: string;
}

/**
 * missionSection Component
 * 
 * Displays information mission the company with statistics and a call-to-action.
 * 
 * @returns {React.ReactElement} - The rendered mission section component
 */
const Mission: React.FC = () => {
    const navigate = useNavigate();

    /**
     * Stat items data for the mission section
     * Extracted to a constant for better maintainability
     */
    const STAT_ITEMS: StatItem[] = [
        { icon: faHandshake, text: "1,000+ cases cured" },
        { icon: faHourglassHalf, text: "Detection within 24 hours" },
        { icon: faFaceGrinWide, text: "95% customer satisfaction" }
    ];

    /**
     * Handles navigation to the mission page
     */
    const handleLearnMoreClick = () => {
        navigate("/book");
    };

    return (
        <section className="mission-section" aria-labelledby="mission-heading">
            <ContentWrapper>
                <div className="mission-section__grid">
                    {/* Image Section */}
                    <div className="mission-section__image">
                        <img
                            src={missionImage}
                            alt="Our medical team at work"
                            loading="lazy" // Lazy load image for better performance
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="mission-section__content">
                        <div className="mission-section__header">
                            <span className="mission-section__subtitle">Our Mission</span>
                            <h1 id="mission-heading" className="mission-section__title">
                                Your Comfort Starts Lice-Free!
                            </h1>
                        </div>

                        <div className="mission-section__body">
                            {/* Using React fragment to avoid unnecessary divs */}
                            <>
                                <p className="mission-section__paragraph">
                                    e have been a medical team specializing in the diagnosis and treatment of head lice since 2015, providing safe solutions for children and families.
                                </p>
                                <p className="mission-section__paragraph">
                                    Our team consists of certified professionals dedicated to providing effective and compassionate care for all our patients.
                                </p>
                                <p className="mission-section__paragraph">
                                    We believe every child/family deserves a life free from itching and discomfort.
                                </p>
                                <p className="mission-section__paragraph">
                                    We provide safe, fast, and painless treatment while respecting your privacy.
                                </p>
                                <p className="mission-section__paragraph">
                                    We’re committed to science-backed methods to prevent reinfestation.
                                </p>
                                <p className="mission-section__paragraph">
                                    Our goal is to make you part of our success stories… where comfort begins!
                                </p>
                            </>

                            {/* Stats Section */}
                            <div className="mission-section__stats">
                                {STAT_ITEMS.map((item, index) => (
                                    <div key={index} className="mission-section__stat-item">
                                        <div className="mission-section__stat-icon">
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                aria-hidden="true" // Icons are decorative
                                            />
                                        </div>
                                        <p className="mission-section__stat-text">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Call to Action Button */}
                            <button
                                className="mission-section__cta-button"
                                onClick={handleLearnMoreClick}
                                aria-label="Learn more mission our services"
                            >
                                Schedule Your Visit
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className="mission-section__cta-icon"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default Mission;