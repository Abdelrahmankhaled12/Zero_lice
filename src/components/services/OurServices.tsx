import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandHoldingHeart,
    faMagnifyingGlass,
    faDropletSlash,
    faCheckDouble,
    faStopwatch
    
} from '@fortawesome/free-solid-svg-icons';
import service1 from '../../assets/services_1.jpg';
import service2 from '../../assets/services_2.jpg';
import service3 from '../../assets/services_3.jpg';
import service4 from '../../assets/services_4.jpg';
import service5 from '../../assets/services_5.jpg';
import { ContentWrapper } from '..';
import "./style.scss"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo_header.png';
import { useNavigate } from 'react-router-dom';

/**
 * Interface for service items
 */
interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: typeof faMagnifyingGlass;
    altText: string;
}

/**
 * OurServices Component
 * 
 * Displays the services offered with icons, images, and descriptions.
 * 
 * @returns {React.ReactElement} - The rendered services section
 */

const OurServices: React.FC = () => {
    const navigate = useNavigate();

    const services: Service[] = [
        {
            id: 1,
            title: '✔ 100% Nit Removal',
            description: 'Lice shampoos only kill live lice – we manually remove every egg (nit) to prevent reinfestation.',
            image: service1,
            icon: faMagnifyingGlass,
            altText: 'Medical professional examining hair for lice'
        },
        {
            id: 2,
            title: '✔ No Resistance Issues',
            description: 'Lice often survive chemical shampoos – our physical removal never fails.',
            image: service2,
            icon: faHandHoldingHeart,
            altText: 'Lice treatment being administered'
        },
        {
            id: 3,
            title: '✔ One-and-Done Results',
            description: 'No weeks of reapplication: most cases solved in a single session',
            image: service3,
            icon: faStopwatch,
            altText: 'Medical team visiting a home for lice treatment'
        },
    ];
    const services2: Service[] = [
        {
            id: 4,
            title: '✔ Gentler Alternative',
            description: 'Avoid harsh shampoo ingredients – our method is completely chemical-free',
            image: service4,
            icon: faDropletSlash,
            altText: 'Medical team visiting a home for lice treatment'
        },
        {
            id: 5,
            title: '✔ Thorough Verification',
            description: 'We inspect every strand – impossible with self-treatment',
            image: service5,
            icon: faCheckDouble,
            altText: 'Medical team visiting a home for lice treatment'
        },
    ];

    const handleLearnMoreClick = () => {
        navigate("/our-process");
    };

    return (
        <section className={"servicesSection"} aria-labelledby="services-heading">
            <ContentWrapper>
                {/* Services Header */}
                <div className={"servicesHeader"}
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="700"
                >
                    <h1 id="services-heading">
                        Why Our Treatment Outperforms Lice Shampoos
                    </h1>
                    <p>
                        At Zero Lice, our experienced team  use proven manual techniques that solve what store-bought shampoos can’t:
                    </p>
                </div>
                {/* Services Grid */}
                <div className={"servicesGrid"}>
                    {services.map((service, index) => (
                        <article key={service.id} className={"serviceCard"}
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                            data-aos-duration="700"

                        >
                            <div className={"serviceImageContainer"}>
                                <img
                                    src={service.image}
                                    alt={service.altText}
                                    loading="lazy"
                                />
                                <div className={"serviceIcon"} aria-hidden="true">
                                    <FontAwesomeIcon icon={service.icon} />
                                </div>
                            </div>
                            <div className={"serviceContent"}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className={"servicesGrid servicesGrid2"}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="700"

                >
                    <div className="box">
                        {/* Logo */}
                        <div
                            className={"logo"}
                            role="button"
                            tabIndex={0}
                            aria-label="Navigate to home page"
                        >
                            <img
                                src={logo}
                                alt="Zero Lice Logo"
                                loading="eager"
                            />
                        </div>
                        <h3>Stop the shampoo cycle – our proven approach works when chemicals fail.</h3>

                        <button
                            onClick={handleLearnMoreClick}
                        >
                            See Exactly How We Remove Lice
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                    {services2.map((service, index) => (
                        <article key={service.id} className={"serviceCard"}
                            data-aos="fade-up"
                            data-aos-delay={(index + 2) * 100}
                            data-aos-duration="700"
                        >
                            <div className={"serviceImageContainer"}>
                                <img
                                    src={service.image}
                                    alt={service.altText}
                                    loading="lazy"
                                />
                                <div className={"serviceIcon"} aria-hidden="true">
                                    <FontAwesomeIcon icon={service.icon} />
                                </div>
                            </div>
                            <div className={"serviceContent"}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </ContentWrapper>
        </section>
    );
};

export default OurServices;