// src/pages/home/aboutSection/AboutSection.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  faHandshake,
  faFaceGrinWide,
  faHourglassHalf,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImage from "../../../assets/about.jpg"; // Using path alias
import './style.scss'; // SCSS module for better scoping
import { ContentWrapper } from '../../../components';

/**
 * Interface for stat item in the about section
 */
interface StatItem {
  icon: typeof faHandshake; // Using one of the icon types as reference
  text: string;
}

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
   * Stat items data for the about section
   * Extracted to a constant for better maintainability
   */
  const STAT_ITEMS: StatItem[] = [
    { icon: faHandshake, text: "1,000+ cases cured" },
    { icon: faHourglassHalf, text: "Detection within 24 hours" },
    { icon: faFaceGrinWide, text: "95% customer satisfaction" }
  ];

  /**
   * Handles navigation to the about page
   */
  const handleLearnMoreClick = () => {
    navigate("/about-us");
  };

  return (
    <section className="about-section" aria-labelledby="about-heading">
      <ContentWrapper>
        <div className="about-section__grid">
          {/* Image Section */}
          <div className="about-section__image">
            <img
              src={aboutImage}
              alt="Our medical team at work"
              loading="lazy" // Lazy load image for better performance
            />
          </div>

          {/* Text Content Section */}
          <div className="about-section__content">
            <div className="about-section__header">
              <span className="about-section__subtitle">About us</span>
              <h1 id="about-heading" className="about-section__title">
                Who We Are?
              </h1>
            </div>

            <div className="about-section__body">
              {/* Using React fragment to avoid unnecessary divs */}
              <>
                <p className="about-section__paragraph">
                  We have been a medical team specializing in the diagnosis and
                  treatment of head lice since 2015, providing safe solutions
                  for children and families.
                </p>
                <p className="about-section__paragraph">
                  Our team consists of certified professionals dedicated to
                  providing effective and compassionate care for all our patients.
                </p>
                <p className="about-section__paragraph">
                  We use only medically-approved treatments that are safe for
                  children and effective against even resistant cases.
                </p>
              </>

              {/* Stats Section */}
              <div className="about-section__stats">
                {STAT_ITEMS.map((item, index) => (
                  <div key={index} className="about-section__stat-item">
                    <div className="about-section__stat-icon">
                      <FontAwesomeIcon
                        icon={item.icon}
                        aria-hidden="true" // Icons are decorative
                      />
                    </div>
                    <p className="about-section__stat-text">{item.text}</p>
                  </div>
                ))}
              </div>

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