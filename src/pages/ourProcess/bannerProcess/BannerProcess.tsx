import { ContentWrapper } from '../../../components';
import './style.scss';

/**
 * BannerProcess Component
 *  * 
 * @returns {React.ReactElement} - The rendered banner component
 */

const BannerProcess = () => {
    return (
        <section
            className="bannerProcess"
            aria-labelledby="banner-process-heading"
        >
            <ContentWrapper>
                <div className="bannerContent"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="700"
                >
                    <h1 id="banner-about-heading">Your Journey to  Eliminating Lice in <span>4 Simple Steps.</span></h1>
                    <p>Your Safe Way to Get Rid of Lice Permanently with Scientifically Studied Steps.</p>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default BannerProcess;