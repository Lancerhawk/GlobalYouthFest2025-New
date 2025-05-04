import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with the YouthFest 2025 team</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>--------------</p>
                <p>--------------</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>Main: +91 ------------</p>
                <p>Support: +91 ------------</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h3>Address</h3>
                <p>Baderia Global College, Jabalpur</p>
                {/* <p>Tec</p> */}
                {/* <p>123 University Avenue</p> */}
                {/* <p>City, State 12345</p> */}
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="contact-icon">⏰</div>
              <div className="contact-text">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="" disabled selected>Select a subject</option>
                <option value="general"  style={{color:'black'}}>General Inquiry</option>
                <option value="sponsorship"  style={{color:'black'}}>Sponsorship</option>
                <option value="participation"  style={{color:'black'}}>Participation</option>
                <option value="volunteer"  style={{color:'black'}}>Volunteering</option>
                <option value="other"  style={{color:'black'}}>Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          {/* This would be replaced with an actual map component */}
          <div className="map-image">Interactive Map Coming Soon</div>
        </div>
      </div>

      <div className="social-section">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="#" className="social-icon">📱</a>
          <a href="#" className="social-icon">📘</a>
          <a href="#" className="social-icon">📸</a>
          <a href="#" className="social-icon">🐦</a>
          <a href="#" className="social-icon">📹</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;