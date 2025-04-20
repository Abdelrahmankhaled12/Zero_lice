import React, { useEffect, useState } from 'react';
import { Animation, ContentWrapper, Effect, Footer, Header } from '../../components';
import './style.scss';
import { CONTACT_EMAIL } from '../../constants';

/**
 * Privacy Policy Component
 * 
 * Displays the privacy policy page with data handling practices and user rights.
 * 
 * @returns {React.ReactElement} - The rendered privacy policy page
 */

const Privacy: React.FC = () => {
    const [animationOff, setAnimationOff] = useState(true);

    /**
     * Privacy policy sections data
     */
    const privacySections = [
        {
            title: 'Information We Collect',
            content: [
                ' <span>*</span> We only collect information you provide (name, phone, address for appointments)',
            ]
        },
        {
            title: 'How We Use Your Data',
            content: [
                ' <span>*</span> To provide and manage your lice treatment services',
                ' <span>*</span> To communicate about your appointments',
                ' <span>*</span> For internal record keeping and service improvement',
                ' <span>*</span> To comply with legal obligations'
            ]
        },
        {
            title: 'Data Sharing',
            content: [
                ' <span>*</span> Data is never sold or shared with third parties for marketing purposes',
            ]
        },
        {
            title: 'Your Rights',
            content: [
                ' <span>*</span> Right to access the personal data we hold about you',
                ' <span>*</span> Right to request correction of inaccurate data',
                ' <span>*</span> Right to request deletion of your personal data',
                ' <span>*</span> Right to object to processing of your data'
            ]
        },
        {
            title: 'Contact Us',
            content: [
                `<span>*</span> For any privacy-related inquiries or to exercise your rights, please email us at: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`]
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
            <main className={"privacyPage"}>
                {/* Banner Section */}
                <section
                    className={"bannerPrivacy"}
                    aria-labelledby="banner-privacy-heading"
                >
                    <ContentWrapper>
                        <div className={"bannerContent"}
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="700"
                        >
                            <h1 id="banner-privacy-heading">
                                Privacy Policy
                            </h1>
                            <p>
                                Last updated: {new Date().toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                    </ContentWrapper>
                </section>

                {/* Privacy Content */}
                <div className={"privacyContent"}>
                    <ContentWrapper>
                        <div className={"introSection"}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="700"
                        >
                            <p>
                                At Zero Lice, we are committed to protecting your privacy and ensuring
                                the security of your personal information. This policy outlines how we
                                collect, use, and safeguard your data.
                            </p>
                        </div>

                        {privacySections.map((section, index) => (
                            <section
                                key={index}
                                className={"policySection"}
                                aria-labelledby={`section-${index}-heading`}
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="700"
                            >
                                <h2 id={`section-${index}-heading`}>{section.title}</h2>
                                <ul>
                                    {section.content.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            dangerouslySetInnerHTML={{ __html: item }}
                                        />
                                    ))}
                                </ul>
                            </section>
                        ))}

                        <div className={"changesNotice"}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="700"
                        >
                            <h3>Changes to This Policy</h3>
                            <p>
                                We may update this privacy policy periodically. Any changes will be
                                posted on this page with an updated revision date.
                            </p>
                        </div>
                    </ContentWrapper>
                </div>
            </main>
            <Footer />
        </Effect>
    );
};

export default Privacy;