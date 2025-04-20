import { ContentWrapper } from '../../../components';
import './style.scss';

/**
 * BannerPricing Component
 * 
 * Displays a prominent banner section for the pricing page with a title and subtitle.
 * 
 * @returns {React.ReactElement} - The rendered banner component
 */

const BannerPricing = () => {
    return (
        <section
            className="bannerPricing"
            aria-labelledby="banner-pricing-heading"
        >
            <ContentWrapper>
                <div className="bannerContent"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="700"
                >
                    <h1 id="banner-pricing-heading">Invest in your <span> family's comfort... </span> at prices that suit everyone </h1>
                    <p>High quality at affordable prices... because your health doesn't have to be compromised.</p>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default BannerPricing;