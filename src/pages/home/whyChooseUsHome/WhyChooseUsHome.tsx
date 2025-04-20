// src/components/sections/WhyChooseUs/WhyChooseUs.tsx

import React from 'react';
import {
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import recruitmentGif from "../../../assets/recruitment.gif"; // Using path alias
import './style.scss'; // Using CSS Modules
import { ContentWrapper } from '../../../components';
import icon1 from "../../../assets/well-attested.png"
import icon2 from "../../../assets/key.png"
import icon3 from "../../../assets/integrity.png"
import icon4 from "../../../assets/social-support.png"
import icon5 from "../../../assets/brand-reputation.png"
import { CONTACT_WHATSS } from '../../../constants';

/**
 * Interface for feature items in the Why Choose Us section
 */
interface FeatureItem {
    icon: string; // Using one of the icon types as reference
    title: string;
    description: string;
}

/**
 * WhyChooseUsHome Component
 * 
 * Displays the reasons to choose the service with key features and a call-to-action.
 * 
 * @returns {React.ReactElement} - The rendered Why Choose Us section component
 */
const WhyChooseUsHome: React.FC = () => {

    /**
     * Feature items data for the Why Choose Us section
     * Extracted to a constant for better maintainability
     */
    const FEATURES: FeatureItem[] = [

        {
            icon: icon2,
            title: "Expert Hands-On Removal",
            description: "Meticulous manual techniques ensure no lice are left behind - no harsh chemicals."
        },
        {
            icon: icon4,
            title: "Discreet & Judgment-Free",
            description: "Private, respectful care for <span> kids, adults, schools, and businesses</span>."
        },
        {
            icon: icon3,
            title: "Dedicated Team You Can Trust",
            description: "Passionate team - trained in <span> effective, compassionate lice removal</span>."
        },
    ];

    const FEATURES2: FeatureItem[] = [
        {
            icon: icon1,
            title: "Home Visits, Zero Hassle",
            description: "No need to drag your family to a clinic. We come to you in <span>Dubai, Sharjah, Ajman & across the UAE </span>."
        },
        {
            icon: icon5,
            title: "Affordable Excellence",
            description: "Why pay more? At Zero Lice, we believe thorough lice removal shouldn't break the bank. Safe for scalps, kind to wallets."
        },
    ];

    /**
     * Handles navigation to the booking page
     */
    const handleBookNowClick = () => {
        window.open(CONTACT_WHATSS, '_blank');
    };

    return (
        <section className="whyChooseUsHome" aria-labelledby="why-choose-us-heading">
            <div className="why-choose-us__container">
                <ContentWrapper>
                    {/* Header Section with Title and Image */}
                    <div className="why-choose-us__header"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="700"
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
                            Why Choose <span>Zero Lice?</span>
                        </h1>
                    </div>

                    {/* Features Grid */}
                    <div className="why-choose-us__features">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="why-choose-us__feature"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                data-aos-duration="700"
                            >
                                <div className="why-choose-us__feature-icon" aria-hidden="true">
                                    <img
                                        src={feature.icon}
                                        alt="Medical team working together"
                                        className="why-choose-us__image"
                                        loading="lazy" // Lazy load for better performance
                                    />
                                </div>
                                <h3 className="why-choose-us__feature-title">{feature.title}</h3>
                                <p
                                    dangerouslySetInnerHTML={{ __html: feature.description }}
                                />

                            </div>
                        ))}
                    </div>

                    <div className="why-choose-us__features why-choose-us__features2">
                        {FEATURES2.map((feature, index) => (
                            <div key={index} className="why-choose-us__feature"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                            data-aos-duration="700"
                            >
                                <div>
                                    <div className="why-choose-us__feature-icon" aria-hidden="true">
                                        <img
                                            src={feature.icon}
                                            alt="Medical team working together"
                                            className="why-choose-us__image"
                                            loading="lazy" // Lazy load for better performance
                                        />
                                    </div>
                                    <h3 className="why-choose-us__feature-title">{feature.title}</h3>
                                </div>

                                <p
                                    dangerouslySetInnerHTML={{ __html: feature.description }}
                                />

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

export default WhyChooseUsHome;