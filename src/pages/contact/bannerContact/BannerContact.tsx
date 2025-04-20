import React from 'react';
import { ContentWrapper } from '../../../components'; // Using path alias
import './style.scss'

/**
 * BannerContact Component
 * 
 * Displays a prominent banner section for the Contact Us page with a title and subtitle.
 * 
 * @returns {React.ReactElement} - The rendered banner component
 */

const BannerContact: React.FC = () => {
    return (
        <section
            className="bannerContact"
            aria-labelledby="banner-contact-heading"
        >
            <ContentWrapper>
                <div className="bannerContent"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="700"
                >
                    <h1 id="banner-contact-heading">
                        Your <span> Lice Treatment </span>  Experts Are One Click Away
                    </h1>
                    <p>
                        Ask, inquire or book appointment – our team is ready to assist.
                    </p>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default BannerContact;