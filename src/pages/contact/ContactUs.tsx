import {
    Animation,
    Effect,
    Emergency,
    Footer,
    Header,
    OurTeam
} from '../../components';
import { useEffect, useState } from 'react';
import BannerContact from './bannerContact/BannerContact';
import ContactForm from './contactForm/ContactForm';
import "./style.scss"
/**
 * FAQs Page Component
 * 
 * Displays frequently asked questions in an organized accordion format
 * with animation effects and proper accessibility features.
 */

const ContactUs: React.FC = () => {
    const [animationOff, setAnimationOff] = useState(true);

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
        // Disable animation after delay
        const timer = setTimeout(() => {
            setAnimationOff(false);
        }, 1200);
        // Clean up timer on unmount
        return () => clearTimeout(timer);
    }, []);

    if (animationOff) {
        return <Animation />;
    }

    return (
        <Effect>
            <div className="contactUs">
                <Header headerHome={true} />
                <BannerContact />
                <OurTeam />
                <ContactForm />
                <Emergency />
                <Footer />
            </div>
        </Effect>
    );
};

export default ContactUs;