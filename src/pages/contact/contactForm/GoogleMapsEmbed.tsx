import React from 'react';

/**
 * GoogleMapsEmbed Component
 * 
 * Displays an embedded Google Map with responsive sizing and proper accessibility features.
 * 
 * @returns {React.ReactElement} - The rendered Google Maps iframe
 */

const GoogleMapsEmbed: React.FC = () => {
  return (
    <div className="google-maps-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461641.02062774845!2d54.922338775926264!3d25.318631354011497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1744456614900!5m2!1sen!2seg"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location in Sharjah, United Arab Emirates"
        aria-label="Interactive map showing our location in Sharjah, United Arab Emirates"
        className="google-maps-iframe"
      />
    </div>
  );
};

export default GoogleMapsEmbed;