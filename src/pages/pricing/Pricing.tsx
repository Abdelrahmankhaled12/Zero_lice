import React, { useEffect, useState } from 'react';
import {
    Animation,
    Effect,
    Emergency,
    Footer,
    Header,
    OurServices,
    Prices,
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

            <main id="main-content" className="main-content_pricing">
                <BannerPricing />
                <OurServices />
                <Prices />
            </main>

            <Emergency
                title={"Transparent Pricing – Finally, Lice Removal <span> Without Hidden Fees! </span>"}
                image={"/cta2.jpg"}
                buttonText={"Call us now"}
            />
            <Footer />
        </Effect>
    );
};

export default Pricing;