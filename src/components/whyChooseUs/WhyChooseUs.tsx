// src/components/sections/WhyChooseUs/WhyChooseUs.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    faHandshake,
    faFaceGrinWide,
    faHourglassHalf,
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import recruitmentGif from "../../assets/recruitment.gif"; // Using path alias
import './style.scss'; // Using CSS Modules
import { ContentWrapper } from '..';

/**
 * Interface for feature items in the Why Choose Us section
 */
interface FeatureItem {
    icon: typeof faHandshake; // Using one of the icon types as reference
    title: string;
    description: string;
}

/**
 * WhyChooseUs Component
 * 
 * Displays the reasons to choose the service with key features and a call-to-action.
 * 
 * @returns {React.ReactElement} - The rendered Why Choose Us section component
 */
const WhyChooseUs: React.FC = () => {
    const navigate = useNavigate();

    /**
     * Feature items data for the Why Choose Us section
     * Extracted to a constant for better maintainability
     */
    const FEATURES: FeatureItem[] = [
        {
            icon: faHandshake,
            title: "Dedicated Team",
            description: "Doctors with board-certified qualifications in dermatology and pediatrics."
        },
        {
            icon: faHourglassHalf,
            title: "Fast Service",
            description: "Same-day consultation with immediate results."
        },
        {
            icon: faFaceGrinWide,
            title: "Quality Guarantee",
            description: "Free follow-up until complete recovery."
        }
    ];

    /**
     * Handles navigation to the booking page
     */
    const handleBookNowClick = () => {
        navigate("/book");
    };

    return (
        <section className="why-choose-us" aria-labelledby="why-choose-us-heading">
            <div className="why-choose-us__container">
                <ContentWrapper>
                    {/* Header Section with Title and Image */}
                    <div className="why-choose-us__header">
                        <div className="why-choose-us__image-wrapper">
                            <img
                                src={recruitmentGif}
                                alt="Medical team working together"
                                className="why-choose-us__image"
                                loading="lazy" // Lazy load for better performance
                            />
                        </div>
                        <h1 id="why-choose-us-heading" className="why-choose-us__title">
                            Why Choose Us?
                        </h1>
                    </div>

                    {/* Features Grid */}
                    <div className="why-choose-us__features">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="why-choose-us__feature">
                                <div className="why-choose-us__feature-icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={feature.icon} />
                                </div>
                                <h3 className="why-choose-us__feature-title">{feature.title}</h3>
                                <p className="why-choose-us__feature-description">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <button
                        className="why-choose-us__cta-button"
                        onClick={handleBookNowClick}
                        aria-label="Book an appointment now"
                    >
                        Book Now
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className="why-choose-us__cta-icon"
                            aria-hidden="true"
                        />
                    </button>
                </ContentWrapper>
            </div>
        </section>
    );
};

export default WhyChooseUs;