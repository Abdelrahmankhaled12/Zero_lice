import React, { useEffect, useState } from 'react';
import {
    Animation,
    Effect,
    Emergency,
    Footer,
    Header,
    OurServices,
    Prices,
    Testimonials,
} from '../../components'; 
import BannerPricing from './bannerPricing/BannerPricing';
import "./style.scss"

/**
 * Pricing Page Component
 * 
 * @returns {React.ReactElement} - The rendered about us page
 */

const Pricing: React.FC = () => {
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

            <main id="main-content" className="main-content_pricing">
                <BannerPricing />
                <OurServices />
                <Prices />
                <Testimonials />
            </main>

            <Emergency />
            <Footer />
        </Effect>
    );
};

export default Pricing;