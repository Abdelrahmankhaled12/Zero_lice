import './style.scss'; // Importing style file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon from FontAwesome library
import { CONTACT_WHATSS } from '../../constants';
import {
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";


// ButtonScroll component definition
const ButtonWhatss: React.FC = () => {
    // Function to handle button click to scroll to top
    const handleButtonClick = () => {
        window.open(CONTACT_WHATSS, '_blank');
    };

    return (
        <div className='whatss'>
            <button
                className='whatss_button'
                onClick={() => handleButtonClick()} // Handling button click event
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </button>
            <span className="intro-banner-vdo-play-btn">
                <span className="ripple pinkBg"></span>
                <span className="ripple pinkBg"></span>
                <span className="ripple pinkBg"></span>
            </span>
        </div>

    )
}

export default ButtonWhatss; // Exporting ButtonScroll component
