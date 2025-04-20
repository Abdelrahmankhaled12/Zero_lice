import React, { useEffect, useRef, useState } from 'react';
import { ContentWrapper } from '../../../components';
import './style.scss';
import { CONTACT_WHATSS } from '../../../constants';

/**
 * Interface for slide data
 */
interface Slide {
    className: string;
    title: string;
    description: string;
    buttonText: string;
    buttonAriaLabel?: string;
}

/**
 * HeroBanner Component
 * 
 * Displays an auto-rotating hero banner with multiple slides.
 * Includes navigation controls and accessibility features.
 */
const HeroBanner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | undefined>(0);
    const timeoutRef = useRef<number | undefined>(0);

    const slides: Slide[] = [
        {
            className: "slide_1",
            title: "Zero Lice, <span> Happy Heads !",
            description: "Safe, Gentle & Experience Lice Removal at Your Doorstep! - Serving Dubai, Sharjah , Ajman & across the UAE – For Families, Schools & Adults!",
            buttonText: "Book your examination now",
            buttonAriaLabel: "Book a lice examination appointment"
        },
        {
            className: "slide_2",
            title: "No More Itching, No More Stress – <span>  Just Results! </span>",
            description: "Because Lice Shouldn’t Steal Your Peace of Mind.",
            buttonText: "Start Your Inspection Now",
            buttonAriaLabel: "Start Your Inspection Now"
        },
        {
            className: "slide_3",
            title: "We don’t stop until your <span> lice-free!  </span>",
            description: "Every treatment follows strict hygiene protocols - No harsh chemicals just a thorough, hands-on approach",
            buttonText: "We’ll Be There in a Nit-Pick!",
            buttonAriaLabel: "Learn about home consultation service"
        }
    ];

    // Start auto-rotation of slides
    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);
    };

    // Initialize and clean up effects
    useEffect(() => {
        startAutoSlide();
        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    // Apply slide transition
    useEffect(() => {
        if (slidesRef.current) {
            slidesRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    return (
        <section
            className={"heroBanner"}
            aria-live="polite"
            aria-label="Promotional slideshow"
        >
            <div
                className={"slides"}
                ref={slidesRef}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${slide.className}`}
                        aria-hidden={index !== currentSlide}
                        role="group"
                    >
                        <ContentWrapper>
                            <div className={"slideContent"}
                                data-aos="fade-right"
                                data-aos-delay="50"
                                data-aos-duration="700"
                            >
                                <h1
                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                />
                                <p>{slide.description}</p>
                                <button
                                    aria-label={slide.buttonAriaLabel || slide.buttonText}
                                    onClick={() => window.open(CONTACT_WHATSS, '_blank')}
                                >
                                    {slide.buttonText}
                                </button>
                            </div>
                        </ContentWrapper>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroBanner;