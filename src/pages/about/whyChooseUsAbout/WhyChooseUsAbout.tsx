// src/components/sections/WhyChooseUs/WhyChooseUs.tsx

import React from 'react';
import {
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import recruitmentGif from "../../../assets/recruitment.gif"; // Using path alias
import './style.scss'; // Using CSS Modules
import { ContentWrapper } from '../../../components';
import { CONTACT_WHATSS } from '../../../constants';
import image from "../../../assets/search_1300896.png";
import image2 from "../../../assets/investigator_12058989.png";
import image3 from "../../../assets/technical-skills.png";
import image4 from "../../../assets/knowledge-transfer_8235000.png";

/**
 * Interface for feature items in the Why Choose Us section
 */
interface FeatureItem {
    icon: string; // Using one of the icon types as reference
    title: string;
    description: string;
}

/**
 * WhyChooseUsAbout Component
 * 
 * Displays the reasons to choose the service with key features and a call-to-action.
 * 
 * @returns {React.ReactElement} - The rendered Why Choose Us section component
 */
const WhyChooseUsAbout: React.FC = () => {

    /**
     * Feature items data for the Why Choose Us section
     * Extracted to a constant for better maintainability
     */
    const FEATURES: FeatureItem[] = [
        {
            icon: image,
            title: "Transparent Pricing",
            description: "No hidden fees or upsells."
        },
        {
            icon: image2,
            title: "Patient Process",
            description: "We take the time to do it right."
        },
        {
            icon: image3,
            title: "Ongoing Learning",
            description: "We stay updated on the latest effective removal techniques."
        },
        {
            icon: image4,
            title: "Local Understanding",
            description: "We know the specific lice challenges in UAE."
        },
    ];

    /**
     * Handles navigation to the booking page
     */
    const handleBookNowClick = () => {
        window.open(CONTACT_WHATSS, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <section className="whyChooseUsAbout" aria-labelledby="why-choose-us-heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="700"
            >
                <div className="why-choose-us__container"
                >
                    <ContentWrapper>
                        {/* Header Section with Title and Image */}
                        <div className="why-choose-us__header"

                        >
                            <div className="why-choose-us__image-wrapper">
                                <img
                                    src={recruitmentGif}
                                    alt="Medical team working together"
                                    className="why-choose-us__image"
                                    loading="lazy" // Lazy load for better performance
                                />
                            </div>
                            <h1 id="why-choose-us-heading" className="why-choose-us__title">
                                Why Choose <span> Zero Lice ?</span>
                            </h1>
                        </div>
                        {/* Features Grid */}
                        <div className="why-choose-us__features">
                            {FEATURES.map((feature, index) => (
                                <div key={index} className="why-choose-us__feature">
                                    <div className="why-choose-us__feature-icon" aria-hidden="true">
                                        <p>
                                        <span>{index + 1}</span>

                                        </p>
                                        <img
                                            src={feature.icon}
                                            alt="Medical team working together"
                                            className="why-choose-us__image"
                                            loading="lazy" // Lazy load for better performance
                                        />
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
        </>

    );
};

export default WhyChooseUsAbout;