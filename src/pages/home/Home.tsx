import { useEffect, useState } from "react";
import { Effect, Footer, Header, Prices, Emergency, Animation, OurServices } from "../../components"
import AboutSection from "./about/AboutSection"
import HeroBanner from "./herobanner/HeroBanner"
import WhyChooseUsHome from "./whyChooseUsHome/WhyChooseUsHome";

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
            <HeroBanner />
            <AboutSection />
            <WhyChooseUsHome />
            <OurServices />
            <Prices />
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

export default Home;