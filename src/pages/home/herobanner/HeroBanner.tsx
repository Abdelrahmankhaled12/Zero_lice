import React, { useEffect, useRef, useState } from 'react';
import { ContentWrapper } from '../../../components';
import './style.scss';

/**
 * Interface for slide data
 */
interface Slide {
    className: string;
    title: string;
    span: string;
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
            title: "Goodbye lice...",
            span:" hello comfort!",
            description: "Safe treatment in just 3 steps.",
            buttonText: "Book your examination now",
            buttonAriaLabel: "Book a lice examination appointment"
        },
        {
            className: "slide_2",
            title: "Catch the",
            span:"problem early!",
            description: "Accurate diagnosis with a 20% discount on the first examination.",
            buttonText: "Know the symptoms",
            buttonAriaLabel: "Learn about lice symptoms"
        },
        {
            className: "slide_3",
            title: "Specialized medical consultation...",
            span:"at your home!",
            description: "Home check-up service is now available.",
            buttonText: "Learn more about the service",
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
                            <div className={"slideContent"}>
                                <h1>{slide.title} <span>{slide.span}</span> </h1>
                                <p>{slide.description}</p>
                                <button
                                    aria-label={slide.buttonAriaLabel || slide.buttonText}
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