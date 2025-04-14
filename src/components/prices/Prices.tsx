import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ContentWrapper } from '../../components';
import "./style.scss"

/**
 * Interface for pricing plan
 */
interface PricingPlan {
    id: number;
    title: string;
    price: string;
    description: string;
    features: string[];
}

/**
 * Prices Component
 * 
 * Displays pricing plans with features and call-to-action buttons.
 * 
 * @returns {React.ReactElement} - The rendered pricing section
 */
const Prices: React.FC = () => {

    const pricingPlans: PricingPlan[] = [
        {
            id: 1,
            title: 'Standard Treatment',
            price: '$199.00',
            description: 'Complete lice elimination for one person using our proven four-step removal process and premium products.',
            features: [
                'One treatment session for one person',
                'Accurate diagnosis',
                'One week of preventative products'
            ]
        },
        {
            id: 2,
            title: 'Family Treatment',
            price: '$499.00',
            description: 'Treat up to 4 family members in one visit. Includes full home inspection and prevention plan.',
            features: [
                'Treatment for up to 4 people',
                'Comprehensive home examination',
                'One month follow-up'
            ],
        },
        {
            id: 3,
            title: 'School/Nurse Program',
            price: '$1,999.00',
            description: 'Custom solutions for schools and organizations including staff training and group discounts.',
            features: [
                'Unlimited treatment for individuals',
                'Full house disinfection',
                '3-month follow-up'
            ]
        }
    ];

    return (
        <section className={"prices"} aria-labelledby="prices-heading">
            <ContentWrapper>
                {/* Pricing Header */}
                <div className={"pricesHeader"}>
                    <h1 id="prices-heading">
                        Pricing Plans to Fit All Your Needs
                    </h1>
                    <p>
                        Choose a plan that fits your budget and get rid of lice forever
                    </p>
                </div>

                {/* Pricing Plans */}
                <div className={"pricingPlans"}>
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricingCard`}
                        >
                            <div className={"cardContent"}>
                                <div className={"cardHeader"}>
                                    <h3>{plan.title}</h3>
                                    <div className={"planPrice"}>{plan.price}</div>
                                    <p>{plan.description}</p>
                                </div>

                                <ul >
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    aria-label={`Select ${plan.title} plan for ${plan.price}`}
                                >
                                    Book Now
                                    <FontAwesomeIcon
                                        icon={faArrowUp}
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </section>
    );
};

export default Prices;