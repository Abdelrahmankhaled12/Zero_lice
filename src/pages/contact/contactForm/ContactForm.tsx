import { ContentWrapper } from '../../../components'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import GoogleMapsEmbed from './GoogleMapsEmbed';


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className='contactForm-section '>
      <ContentWrapper>
        <div className="contactForm-section__header">
          <span>contact us</span>
          <h1>
            We're here to answer all your questions.
          </h1>
          <p>Our medical team is available 24/7 for your comfort and peace of mind."</p>
        </div>
        <div className="contactForm-section_grid">
          <form action="">
            <div className="input-group">
              <div className="input-wrapper">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  type="text"
                  id="name"
                  placeholder="Please enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Please enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <FontAwesomeIcon icon={faFileLines} className="input-icon input-icon_textarea" />
                <textarea
                  id="email"
                  placeholder="Please enter your message"
                  value={email}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <button
              aria-label="Learn more mission our services"
            >
              Send to messae
            </button>


          </form>
          <div className="contactForm-section_social">
            <GoogleMapsEmbed />
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default ContactForm