import "./style.scss"
import { ContentWrapper } from "../../../components";
import {
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImage from "../../../assets/2149490624.jpg"; // Using path alias
import './style.scss'; // SCSS module for better scoping
import image from "../../../assets/phase1.jpg"
import image2 from "../../../assets/phase2.jpg"
import image3 from "../../../assets/phase3.jpg"
import image4 from "../../../assets/phase4.jpg"

import { CONTACT_WHATSS } from "../../../constants";


const handleBookNowClick = () => {
    window.open(CONTACT_WHATSS, '_blank', 'noopener,noreferrer');
};

const ProcessSection = () => {

    const steps = [
        {
            number: "01",
            title: "Thorough Head Check",
            description: "Our experts carefully inspect every strand of hair using specialized techniques to detect even the smallest lice or eggs.",
            image: image,
        },
        {
            number: "02",
            title: "Advanced Lice Removal Machine",
            description: "Our medical-grade suction system removes 95%+ of lice and eggs in one treatment—even resistant strains. No chemicals, just clinically proven results.",
            image: image2,
        },
        {
            number: "03",
            title: "Precision Nit Combing",
            description: "After suction, we use a medical-grade stainless steel comb with micro-grooved teeth to remove 100% of remaining lice and eggs—no survivors.",
            image: image3,
        },
        {
            number: "04",
            title: "Microscopic Final Check",
            description: `We perform a magnifying glass inspection of every strand to confirm 100% lice and nit removal - because "mostly" isn't good enough.`,
            image: image4,
        },
    ]
    return (
        <>
            <section className="process-section" aria-labelledby="about-heading">
                <ContentWrapper>
                    <div className="about-section__grid">
                        {/* Image Section */}
                        <div className="about-section__image"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="700"
                        >
                            <img
                                src={aboutImage}
                                alt="Our medical team at work"
                                loading="lazy" // Lazy load image for better performance
                            />
                        </div>

                        {/* Text Content Section */}
                        <div className="about-section__content"
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="700"
                        >
                            <div className="about-section__header"
                            >
                                <h1 id="about-heading" className="about-section__title">
                                    Guaranteed Lice-Free <br /> Follow-Up
                                </h1>
                            </div>

                            <div className="about-section__body">
                                {/* Using React fragment to avoid unnecessary divs */}
                                <>
                                    <p className="about-section__paragraph">

                                        We schedule a mandatory check 5-7 days post-treatment to confirm complete elimination - because lice eggs can take days to hatch.
                                    </p>
                                </>

                                {/* Call to Action Button */}
                                <button
                                    className="about-section__cta-button"
                                    onClick={handleBookNowClick}
                                    aria-label="Learn more about our services"
                                >
                                    Book Now
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
            <section className="section">
                <ContentWrapper>
                    <div className="relative">
                        {steps.map((step) => (
                            <div key={step.number} className="step">
                                {/* Content */}
                                <div className="content"
                                >
                                    <span className="step-number"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="700"
                                    >{step.number}</span>
                                    <h3
                                        data-aos="fade-up"
                                        data-aos-delay="110"
                                        data-aos-duration="700"
                                    >{step.title}</h3>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-delay="120"
                                        data-aos-duration="700"
                                    >
                                        {step.description}</p>
                                </div>

                                {/* Timeline Point & Image */}
                                <div className="timeline-point">
                                    <div className="image-container">
                                        <img src={step.image} alt={"step"} />
                                    </div>
                                </div>

                                {/* <div className="spacer" /> */}
                            </div>
                        ))}
                    </div>
                </ContentWrapper>
            </section>
        </>

    );
};

export default ProcessSection;