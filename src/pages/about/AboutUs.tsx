import React, { useEffect, useState } from 'react';
import {
  Animation,
  Effect,
  Emergency,
  Footer,
  Header,
  OurTeam,
  WhyChooseUs
} from '../../components';
import BannerAbout from './bannerAbout/BannerAbout';
import Mission from './mission/Mission';

/**
 * AboutUs Page Component
 * 
 * The main about us page that displays company information, mission,
 * team members, and why choose us sections.
 * 
 * @returns {React.ReactElement} - The rendered about us page
 */

const AboutUs: React.FC = () => {
  const [animationOff, setAnimationOff] = useState(true);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Disable animation after delay
    const animationTimer = setTimeout(() => {
      setAnimationOff(false);
    }, 1200);

    // Clean up timers on unmount
    return () => {
      clearTimeout(animationTimer);
    };
  }, []);

  if (animationOff) {
    return <Animation />;
  }

  return (
    <Effect>
      <Header headerHome={true} />

      <main id="main-content">
        <BannerAbout />
        <Mission />
        <WhyChooseUs />
        <OurTeam />
      </main>

      <Emergency />
      <Footer />
    </Effect>
  );
};

export default AboutUs;