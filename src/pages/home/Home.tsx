import { useEffect, useState } from "react";
import { Effect, Footer, Header, OurServices, Prices, Testimonials , Emergency  , WhyChooseUs, Animation} from "../../components"
import AboutSection from "./about/AboutSection"
import HeroBanner from "./herobanner/HeroBanner"

/**
 * Home Page Component
 * 
 */

const Home: React.FC = () => {
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
            <Header headerHome={true}/>
            <HeroBanner />
            <AboutSection />
            <WhyChooseUs />
            <OurServices />
            <Prices />
            <Testimonials />
            <Emergency />
            <Footer />
        </Effect>
    );
};

export default Home;