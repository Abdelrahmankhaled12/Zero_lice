import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ContentWrapper } from '../../components';
import './style.scss';
import { CONTACT_NUMBER, CONTACT_WHATSS } from '../../constants';

/**
 * Interface for Emergency component props
 */
interface EmergencyProps {
    title: string;
    subtitle?: string | string[];
    image: string;
    buttonText: string;
    phoneNumber?: string;
    highlightText?: string;
    email?: string;
    whatsappNumber?: string;
}

/**
 * Emergency Component
 * 
 * Displays an urgent call-to-action section with multiple contact options.
 * 
 * @param {EmergencyProps} props - Component props
 * @returns {React.ReactElement} - The rendered emergency CTA component
 */
const Emergency: React.FC<EmergencyProps> = ({
    title,
    subtitle = '',
    image,
    buttonText,
}) => {

    const handleEmergencyContact = () => {
        window.open(CONTACT_WHATSS, '_blank');
    }
    // Normalize subtitle to array format
    const subtitleArray = typeof subtitle === 'string' ? [subtitle] : subtitle;

    return (
        <section
            className={"emergency"}
            aria-labelledby="emergency-heading"
            role="region"
            style={{ backgroundImage: `url(${image})` }}
        >
            <ContentWrapper>
                <div className={"emergencyContent"}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                >
                    <h1
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    {subtitleArray && subtitleArray.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}

                    <button
                        onClick={() => handleEmergencyContact()}
                        aria-label={`Call ${CONTACT_NUMBER} for emergency lice treatment`}
                    >
                        {buttonText}
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