// src/pages/home/missionSection/missionSection.tsx

import React from 'react';
import {
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import missionImage from "../../../assets/mission.jpg";
import './style.scss';
import { ContentWrapper } from '../../../components';
import { CONTACT_WHATSS } from '../../../constants';

/**
 * missionSection Component
 * 
 * Displays information mission the company with statistics and a call-to-action.
 * 
 * @returns {React.ReactElement} - The rendered mission section component
 */
const Mission: React.FC = () => {

    const handleLearnMoreClick = () => {
        window.open(CONTACT_WHATSS, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="mission-section" aria-labelledby="mission-heading">
            <ContentWrapper>
                <div className="mission-section__grid">
                    {/* Image Section */}
                    <div className="mission-section__image"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="700"
                    >
                        <img
                            src={missionImage}
                            alt="Our medical team at work"
                            loading="lazy" // Lazy load image for better performance
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="mission-section__content"
                        data-aos="fade-right"
                        data-aos-delay="150"
                        data-aos-duration="700"
                    >
                        <div className="mission-section__header">
                            <h1 id="mission-heading" className="mission-section__title">
                                About Zero Lice - Partner in Lice Removal
                            </h1>
                        </div>

                        <div className="mission-section__body">
                            {/* Using React fragment to avoid unnecessary divs */}
                            <>
                                <h3>Why We Started</h3>
                                <p className="mission-section__paragraph">
                                    As parents ourselves, we know how overwhelming lice infestations can be. After seeing how many families struggle with ineffective treatments, we trained with top lice experts to bring UAE’s most reliable, science-backed lice removal service.
                                </p>
                                <h3>Our Promise to You</h3>

                                <p className="mission-section__paragraph">
                                    ✨ <span>Experience-Trained –</span>  Our team is certified in the latest lice removal techniques, so you get results right the first time.
                                </p>
                                <p className="mission-section__paragraph">
                                    ✨ <span>Gentle & Effective –</span> We use non-toxic, clinically proven methods safe for kids and sensitive scalps.
                                </p>
                                <p className="mission-section__paragraph">
                                    ✨ <span>No Judgement, Just Help –</span>  Lice happen to everyone! We provide discreet, stress-free care.
                                </p>
                                <p className="mission-section__paragraph">
                                    ✨ <span>Education Included –</span>  We’ll teach you how to prevent future outbreaks at no extra cost.
                                </p>
                            </>

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