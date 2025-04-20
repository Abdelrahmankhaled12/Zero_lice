import {
    Animation,
    Effect,
    Emergency,
    Footer,
    Header,
} from '../../components';
import { useEffect, useState } from 'react';
import BannerContact from './bannerContact/BannerContact';
import ContactForm from './contactForm/ContactForm';

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
        }, 3000);
        // Clean up timer on unmount
        return () => clearTimeout(timer);
    }, []);

    if (animationOff) {
        return <Animation />;
    }

    return (
        <Effect>
            <Header headerHome={true} />
            <BannerContact />
            <ContactForm />
            <Emergency
                title={"Lice spreads fast! <span>  Don't Wait </span>"}
                subtitle={[" Book your appointment"]}
                image={"/cta.jpg"}
                buttonText={"Call us now"}
            />
            <Footer />
        </Effect>
    );
};

export default ContactUs;