import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ContentWrapper } from '..';
import "./style.scss"

/**
 * Emergency Component
 * 
 * Displays an urgent call-to-action section for immediate lice treatment booking.
 * 
 * @returns {React.ReactElement} - The rendered emergency CTA component
 */
const Emergency: React.FC = () => {
    /**
     * Handles the button click event
     */
    const handleEmergencyClick = () => {
        // Replace with actual phone number or navigation logic
        window.location.href = 'tel:+1234567890';
    };

    return (
        <section
            className="emergency "
            aria-labelledby="emergency-heading"
            role="region"
        >
            <ContentWrapper>
                <div className="emergencyContent">
                    <h1 id="emergency-heading">
                        Lice spreads fast! <span>Don't wait!</span>
                    </h1>
                    <p>
                        Book your appointment now and get a free consultation via WhatsApp.
                    </p>
                    <button
                        onClick={handleEmergencyClick}
                        aria-label="Call us now for emergency lice treatment"
                    >
                        Call us now
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default Emergency;