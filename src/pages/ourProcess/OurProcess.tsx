import React, { useEffect, useState } from 'react';
import {
    Animation,
    Effect,
    Emergency,
    Footer,
    Header,
} from '../../components';
import BannerProcess from './bannerProcess/BannerProcess';
import ProcessSection from './processSection/ProcessSection';


const OurProcess: React.FC = () => {
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
                <BannerProcess />
                <ProcessSection />
            </main>

            <Emergency
                title={"The Last Lice Treatment Your Family Will Ever Need!"}
                image={"/cta2.jpg"}
                buttonText={"Book your appointment now."}
            />
            <Footer />
        </Effect>
    );
};

export default OurProcess;