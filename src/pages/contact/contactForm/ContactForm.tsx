import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { ContentWrapper } from '../../../components';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../../constants';
import { CONTACT_US } from '../../../utils';
import Swal from 'sweetalert2';
import './style.scss';

/**
 * ContactForm Component
 * 
 * Displays a contact form with validation and social media links.
 * 
 * @returns {React.ReactElement} - The rendered contact form component
 */

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles form input changes
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // Clear error when user types
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  /**
   * Validates form inputs
   * @returns {boolean} - True if form is valid
   */
  const validateForm = (): boolean => {
    const newErrors = {
      name: formData.name.trim() ? '' : 'Please enter your client name',
      email: formData.email.trim() ?
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Please enter a valid email')
        : 'Please enter your email',
      message: formData.message.trim() ? '' : 'Please enter your message'
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  /**
   * Handles form submission
   * @param {React.FormEvent} e - The form event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await CONTACT_US({
        email: formData.email,
        name: formData.name,
        message: formData.message
      });

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully",
          confirmButtonText: "OK",
          confirmButtonColor: "#159b83",
          icon: "success",
          iconColor: "#159b83",
        });
        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send your message. Please try again later.",
        confirmButtonText: "OK",
        confirmButtonColor: "#159b83",
        icon: "error",
        iconColor: "#159b83",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles social media link clicks
   * @param {string} url - The social media URL
   */
  const handleSocialLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={"contactFormSection"}>
      <ContentWrapper>
        <div className={"contactFormHeader"}
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="700"
        >
          <span>contact us</span>
          <h1>
            We're here to answer all your questions.
          </h1>
          <p>
            Our team is available 24/7 for your comfort and peace of mind.
          </p>
        </div>

        <div className={"contactFormGrid"}>
          <form onSubmit={handleSubmit} noValidate
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <div className={"inputGroup"}>
              <div className={`input-wrapper`}>
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  id="name"
                  placeholder="Please enter your client name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
              </div>
              {errors.name && (
                <span id="name-error" className={"errorMessage"}>
                  {errors.name}
                </span>
              )}
            </div>

            <div className={"inputGroup"}>
              <div className={`input-wrapper`}>
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  id="email"
                  placeholder="Please enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <span id="email-error" className={"errorMessage"}>
                  {errors.email}
                </span>
              )}
            </div>

            <div className={"inputGroup"}>
              <div className={`input-wrapper`}>
                <FontAwesomeIcon icon={faFileLines} className='input-icon_textarea' />
                <textarea
                  id="message"
                  placeholder="Please enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  rows={5}
                />
              </div>
              {errors.message && (
                <span id="message-error" className={"errorMessage"}>
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Send your message"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className={"contactInfo"}
            data-aos="fade-left"
            data-aos-delay="130"
            data-aos-duration="700"
          >
            <h2>Contact information</h2>
            <ul>
              {CONTACT_INFO.map((item, index) => (
                <li key={index}>
                  <div className={"contactInfoIcon"} aria-hidden="true">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  {item.type === 'email' ? (
                    <a href={`mailto:${item.text}`}>
                      {item.text}
                    </a>
                  ) : item.type === 'phone' ? (
                    <a
                      href={`tel:${item.text.replace(/[^0-9+]/g, '')}`}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </li>
              ))}
            </ul>

            <div className={"socialLinks"}>
              {SOCIAL_LINKS.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialLinkClick(social.url)}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ContactForm;