// src/pages/home/aboutSection/AboutSection.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImage from "../../../assets/about.jpg"; // Using path alias
import './style.scss'; // SCSS module for better scoping
import { ContentWrapper } from '../../../components';


/**
 * AboutSection Component
 * 
 * Displays information about the company with statistics and a call-to-action.
 * 
 * @returns {React.ReactElement} - The rendered about section component
 */
const AboutSection: React.FC = () => {
  const navigate = useNavigate();


  /**
   * Handles navigation to the about page
   */
  const handleLearnMoreClick = () => {
    navigate("/our-process");
  };

  return (
    <section className="about-section" aria-labelledby="about-heading">
      <ContentWrapper>
        <div className="about-section__grid">
          {/* Image Section */}
          <div className="about-section__image"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <img
              src={aboutImage}
              alt="Our medical team at work"
              loading="lazy" // Lazy load image for better performance
            />
          </div>

          {/* Text Content Section */}
          <div className="about-section__content"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="700"
          >
            <div className="about-section__header">
              <h1 id="about-heading" className="about-section__title">
                At Zero Lice
              </h1>
            </div>

            <div className="about-section__body">
              {/* Using React fragment to avoid unnecessary divs */}
              <>
                <p className="about-section__paragraph">
                  We understand how stressful and frustrating lice infestations can be—especially for busy families. That’s why we’ve made it our mission to provide the safest, most affordable, and effective lice removal service right at your doorstep.
                </p>
                <h3>Our Promise</h3>
                <p>Thorough, gentle, and judgment-free care—because lice removal shouldn’t cost a fortune or compromise safety.</p>
              </>

              {/* Call to Action Button */}
              <button
                className="about-section__cta-button"
                onClick={handleLearnMoreClick}
                aria-label="Learn more about our services"
              >
                Learn More
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="about-section__cta-icon"
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

export default AboutSection;