import React from 'react';
import { ContentWrapper } from '../../../components'; // Using path alias
import './style.scss'

/**
 * BannerFaqs Component
 * 
 * Displays a prominent banner section for the FAQs page with a title and subtitle.
 * 
 * @returns {React.ReactElement} - The rendered banner component
 */

const BannerFaqs: React.FC = () => {
    return (
        <section
            className="bannerFaqs"
            aria-labelledby="banner-faqs-heading"
        >
            <ContentWrapper>
                <div className="bannerContent">
                    <h1 id="banner-faqs-heading">
                        All You Need to Know About <span>Lice Treatment</span>
                    </h1>
                    <p>
                        Clear answers from our medical team for your peace of mind.
                    </p>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default BannerFaqs;