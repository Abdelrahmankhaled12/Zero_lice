import { useState, useEffect } from 'react';
import { ContentWrapper } from '..';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronRight, faAngleLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "After struggling with lice for months, Zero Lice solved our problem in one session. The technician was so patient with my kids!",
            name: "Sarah Johnson",
            role: "Mother of 3",
            rating: 5
        },
        {
            id: 2,
            quote: "As a school nurse, I recommend Zero Lice to all our parents. Their school program reduced cases by 80% this year.",
            name: "Dr. Michael Chen",
            role: "School Physician",
            rating: 5
        },
        {
            id: 3,
            quote: "The home service saved us! Discreet, professional, and truly effective. My daughter is finally lice-free!",
            name: "Amina Rahman",
            role: "Satisfied Customer",
            rating: 5
        },
        {
            id: 4,
            quote: "I was skeptical at first, but Zero Lice completely eliminated our lice problem. The follow-up care was exceptional.",
            name: "David Wilson",
            role: "Father of 2",
            rating: 5
        },
        {
            id: 5,
            quote: "Our kindergarten had a major outbreak. Zero Lice handled all 30 kids efficiently and with great care.",
            name: "Mrs. Thompson",
            role: "Kindergarten Principal",
            rating: 5
        },
        {
            id: 6,
            quote: "Fast, effective, and worth every penny. I wish I had called them sooner instead of trying home remedies.",
            name: "Lisa Park",
            role: "Busy Working Mom",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate testimonials every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='testimonials'>
            <ContentWrapper>
                <div className="testimonials-grid">
                    <div className="text-content">
                        <h1>Real Stories, <br /> Real Results</h1>
                        <p className="subtitle">Don't just take our word for it—here's what our clients say!</p>
                        <button className="cta-button">
                            Book Your Risk-Free Treatment Now 
                            <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
                        </button>
                    </div>
                    
                    <div className="testimonials-container">
                        <div className="testimonial-slider">
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    className={`testimonial-box ${index === currentIndex ? 'active' : ''}`}
                                    key={testimonial.id}
                                >
                                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                                    <p className="testimonial-text">{testimonial.quote}</p>
                                    <div className="client-info">
                                        <div className="rating">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                        <h3 className="client-name">{testimonial.name}</h3>
                                        <p className="client-role">{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="testimonial-controls">
                            <ul className="indicators">
                                {testimonials.map((_, index) => (
                                    <li 
                                        key={index} 
                                        className={index === currentIndex ? 'active' : ''}
                                        onClick={() => setCurrentIndex(index)}
                                    ></li>
                                ))}
                            </ul>
                            <div className="navigation-buttons">
                                <button className="nav-button" onClick={goToPrev}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                                <button className="nav-button" onClick={goToNext}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Testimonials;