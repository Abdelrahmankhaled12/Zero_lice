import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faWandMagicSparkles,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import service1 from '../../assets/services_1.jpg';
import service2 from '../../assets/services_2.jpg';
import service3 from '../../assets/services_3.jpg';
import { ContentWrapper } from '..';
import "./style.scss"

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
    const services: Service[] = [
        {
            id: 1,
            title: 'Detection and Diagnosis',
            description: 'Thorough examination under a magnifying glass. Diagnosis of the type of lice and the severity of infestation. Detailed case report.',
            image: service1,
            icon: faMagnifyingGlass,
            altText: 'Medical professional examining hair for lice'
        },
        {
            id: 2,
            title: 'Integrated Treatment',
            description: 'Comprehensive treatment session (90 minutes). Use of safe medical products. Free follow-up for one week.',
            image: service2,
            icon: faWandMagicSparkles,
            altText: 'Lice treatment being administered'
        },
        {
            id: 3,
            title: 'Home Care',
            description: 'Home visit from the medical team. Complete disinfection of clothing and furniture. Free protective bag.',
            image: service3,
            icon: faHouse,
            altText: 'Medical team visiting a home for lice treatment'
        }
    ];

    return (
        <section className={"servicesSection"} aria-labelledby="services-heading">
            <ContentWrapper>
                {/* Services Header */}
                <div className={"servicesHeader"}>
                    <span>Our Services</span>
                    <h1 id="services-heading">
                        Our Comprehensive Solutions for Effective and Rapid Lice Treatment
                    </h1>
                    <p>
                        Services Designed for All Ages and Meet the Highest Quality Standards
                    </p>
                </div>
                {/* Services Grid */}
                <div className={"servicesGrid"}>
                    {services.map((service) => (
                        <article key={service.id} className={"serviceCard"}>
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