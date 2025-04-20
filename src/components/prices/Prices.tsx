import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { ContentWrapper } from '../../components';
import "./style.scss";
import { PRICING_GET } from '../../utils';
import icon from "../../assets/gift_3258504.png";
import { CONTACT_WHATSS } from '../../constants';

/**
 * Interface for pricing plan
 */
interface PricingPlan {
    id: number;
    title: string;
    price: string;
    description: string;
    features: string[];
    image?: string;
}

/**
 * Prices Component
 * 
 * Displays pricing plans with features and call-to-action buttons.
 * Includes special partnership programs and family discounts.
 * 
 * @returns {React.ReactElement} - The rendered pricing section
 */

/**
 * Handles navigation to the booking page
 */
const handleBookNowClick = () => {
    window.open(CONTACT_WHATSS, '_blank');
};


const Prices: React.FC = () => {
    const [pricingPlans, setPricingPlans] = useState<PricingPlan[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPricingData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await PRICING_GET();

                if (response.status === 200) {
                    setPricingPlans(response.data.data);
                } else {
                    throw new Error('Failed to fetch pricing data');
                }
            } catch (err) {
                console.error("Error fetching pricing plans:", err);
                setError('Failed to load pricing information. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPricingData();
    }, []);

    /**
     * Renders the main pricing plans
     */
    const renderPricingPlans = () => {
        if (isLoading) {
            return <div className="loading-message">Loading pricing plans...</div>;
        }

        if (error) {
            return <div className="error-message" role="alert">{error}</div>;
        }

        return pricingPlans?.map((plan, index) => (
            <div key={`plan-${plan.id}`} className="pricingCard"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                data-aos-duration="700"
            >
                <div className="cardContent">
                    <div className="cardHeader">
                        {plan.image && (
                            <div className="image">
                                <img
                                    src={plan.image}
                                    alt=""
                                    aria-hidden="true" // Decorative image
                                />
                            </div>
                        )}
                        <h3>{plan.title}</h3>
                        <div className="planPrice">AED {plan.price}</div>
                        <p>{plan.description}</p>
                    </div>

                    <ul className="features-list">
                        {plan.features.map((feature, index) => (
                            <li key={`feature-${plan.id}-${index}`}>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="cta-button"
                        onClick={handleBookNowClick}
                        aria-label={`Select ${plan.title} plan for ${plan.price}`}
                    >
                        Book Now
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            aria-hidden="true"
                            className="icon-right"
                        />
                    </button>
                </div>
            </div>
        ));
    };

    /**
     * Renders the partnership program card
     */
    const renderPartnershipCard = () => (
        <div key="partnership-card" className="pricingCard"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="700"
        >
            <div className="cardContent">
                <div className="partnershipCard">
                    <h3>Partnership Programs</h3>
                    <p>For institutions, daycare centers for groups of 10+ call us</p>
                    <button
                        onClick={handleBookNowClick}

                    >
                        <FontAwesomeIcon
                            icon={faPhoneVolume}
                            aria-hidden="true"
                        />
                        056 3810797

                    </button>
                    <p>to discuss tailored solutions. <br />Contract pricing available upon request</p>
                </div>
            </div>
        </div>
    );

    /**
     * Renders the family discount card
     */
    const renderFamilyDiscountCard = () => (
        <div key="family-discount" className="familyDiscount"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
        >
            <div className="cardContent">
                <div className="partnershipCard">
                    <div className="image">
                        <img
                            src={icon}
                            alt="Gift icon representing family discount"
                        />
                    </div>
                    <h3>Family Discount</h3>

                    <div className="offer">
                        <p>2 Family Members</p>
                        <span>10% Discount</span>
                    </div>
                    <div className="offer">
                        <p>3 Family Members</p>
                        <span>15% Discount</span>
                    </div>
                    <div className="offer">
                        <p>4+ Family Members</p>
                        <span>20% Discount</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="prices" aria-labelledby="prices-heading">
            <ContentWrapper>
                {/* Pricing Header */}
                <div className="pricesHeader">
                    <h1 id="prices-heading">
                        Pricing Plans to Fit All Your Needs
                    </h1>
                    <p className="subtitle">
                        Choose a plan that fits your budget and get rid of lice forever
                    </p>
                </div>

                {/* Pricing Plans Grid */}
                <div className="pricingPlans">
                    {renderPricingPlans()}
                    {renderPartnershipCard()}
                    {renderFamilyDiscountCard()}
                </div>
            </ContentWrapper>
        </section>
    );
};

export default Prices;