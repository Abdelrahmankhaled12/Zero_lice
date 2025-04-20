import React, { useEffect, useState } from 'react';
import {
  Animation,
  Effect,
  Emergency,
  Footer,
  Header,
} from '../../components';
import BannerAbout from './bannerAbout/BannerAbout';
import Mission from './mission/Mission';
import WhyChooseUsAbout from './whyChooseUsAbout/WhyChooseUsAbout';

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
    }, 3000);

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
        <WhyChooseUsAbout />
      </main>

      <Emergency
        title={" Let’s Solve Your  <span> Lice Problem </span> Today"}
        subtitle={["Emergency Lice Service - Open Every Day, For Every Customer.", "Lice don’t wait—and neither should you! Book your same-day appointment"]}
        image={"/cta.jpg"}
        buttonText={"Book Appointment"}
      />
      <Footer />
    </Effect>
  );
};

export default AboutUs;