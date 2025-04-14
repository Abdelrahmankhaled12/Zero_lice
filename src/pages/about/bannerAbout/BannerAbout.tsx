import { ContentWrapper } from '../../../components';
import './style.scss';

/**
 * BannerAbout Component
 * 
 * Displays a prominent banner section for the About us page with a title and subtitle.
 * 
 * @returns {React.ReactElement} - The rendered banner component
 */

const BannerAbout = () => {
    return (
        <section
            className="bannerAbout"
            aria-labelledby="banner-about-heading"
        >
            <ContentWrapper>
                <div className="bannerContent">
                    <h1 id="banner-about-heading">More Than Just Treatment – We’re Your Partners in <span>Lice-Free </span>Living!</h1>
                    <p>Since 2015, we’ve helped 10,000+ families say goodbye to lice with dignity and science.</p>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default BannerAbout;