import React, { useEffect, useState } from 'react';
import { Animation, ContentWrapper, Effect, Footer, Header } from '../../components';
import './style.scss';
import { CONTACT_EMAIL } from '../../constants';

/**
 * Interface for term policy items
 */
interface TermPolicy {
    id: number;
    title: string;
    items: string[];
}

/**
 * Terms Component
 * 
 * Displays the terms and conditions page with policies and regulations.
 * 
 * @returns {React.ReactElement} - The rendered terms and conditions page
 */

const Terms: React.FC = () => {
    const [animationOff, setAnimationOff] = useState(true);

    /**
     * Term policies data
     */
    const termPolicies: TermPolicy[] = [
        {
            id: 1,
            title: 'Minors Policy',
            items: [
                'A parent/guardian must remain on-site during treatment'
            ]
        },
        {
            id: 2,
            title: 'Follow-Up Policy',
            items: [
                'One complimentary follow-up must be scheduled strictly between 5–7 days after the initial treatment',
                'Missed appointments without at least 24-hour notice will result in forfeiture of the free follow-up'
            ]
        },
        {
            id: 3,
            title: 'No Refunds Policy',
            items: [
                'Due to the customized nature of lice removal services, all sales are final, and no refunds will be issued after treatment'
            ]
        },
        {
            id: 4,
            title: 'Re-Treatment Guarantee',
            items: [
                'If live lice are found during your scheduled 5–7-day follow-up, you will receive a complimentary re-treatment',
                'If live lice are detected after the 7-day window, a new full-priced treatment will be required'
            ]
        },
        {
            id: 5,
            title: 'Hygiene & Reinfestation Disclaimer',
            items: [
                'Post-treatment reinfestation risk depends on proper home care, including thorough cleaning of personal items and environment, which remains the client\'s responsibility'
            ]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setAnimationOff(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (animationOff) {
        return <Animation />;
    }

    return (
        <Effect>
            <Header headerHome={true} />
            <main className={"termsPage"}>
                {/* Banner Section */}
                <section
                    className={"bannerTerms"}
                    aria-labelledby="banner-terms-heading"
                >
                    <ContentWrapper>
                        <div className={"bannerContent"}
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="700"
                        >
                            <h1 id="banner-terms-heading">
                                Terms and Conditions
                            </h1>
                            <p>
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </ContentWrapper>
                </section>

                {/* Terms Content */}
                <div className={"termsContent"}>
                    <ContentWrapper>
                        <div className={"termsIntro"}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="700"
                        >
                            <p>
                                Please read these terms and conditions carefully before using our services.
                                <br /> By booking an appointment, you agree to be bound by these terms.
                            </p>
                        </div>

                        {termPolicies.map((policy) => (
                            <section
                                key={policy.id}
                                className={"policySection"}
                                aria-labelledby={`policy-${policy.id}-heading`}
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="700"
                            >
                                <h2 id={`policy-${policy.id}-heading`}>{policy.title}</h2>
                                <ul className={"policyList"}>
                                    {policy.items.map((item, index) => (
                                        <li key={index}>
                                            <span>*</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}

                        <div className={"contactNote"}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="700"
                        >
                            <p>
                                For any questions regarding these terms, please contact us at{' '}
                                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                            </p>
                        </div>
                    </ContentWrapper>
                </div>
            </main>
            <Footer />
        </Effect>
    );
};

export default Terms;