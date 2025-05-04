import React from 'react';
import './About.css';
import techfest from '../../../public/images/techfest.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About YouthFest 2025</h1>
        <p>Learn more about our annual technology festival</p>
      </div>

      <div className="youth-fest-section">
        <div className="youth-fest-content">
          <h2>About Global Youth Fest</h2>
          <p>
            The Youth Fest at Baderia Global Institute of Engineering & Management, 
            Jabalpur is a vibrant annual celebration of talent and creativity. The event 
            features cultural performances, dance competitions, fashion shows, and musical 
            nights that energize the entire campus.
          </p>
          <h3>Events</h3>
          <p>
            Students from various colleges participate, showcasing their skills in art, music, 
            drama, and more. Technical exhibitions and fun games add an intellectual and 
            entertaining blend to the fest. It fosters unity, enthusiasm, and a spirit of healthy 
            competition among the youth.
          </p>
          <h3>DJ Night</h3>
          <p>
            The highlight of our fest is the electrifying DJ Night, where students come together 
            to celebrate and dance to the latest beats, creating unforgettable memories.
          </p>
        </div>
        <div className="youth-fest-image">
          <img src={techfest} alt="DJ Night at Global Youth Fest" />
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            YouthFest is our college's premier technology festival aimed at fostering innovation, 
            creativity, and technological advancement among students. Our mission is to provide a 
            platform for students to showcase their talents, learn from industry experts, and 
            network with like-minded individuals.
          </p>
          
          <h2>History</h2>
          <p>
            Started in 2015, YouthFest has grown from a small departmental event to one of the 
            largest college tech festivals in the region. Each year, we strive to bring new and 
            exciting technologies, workshops, and competitions to our participants.
          </p>

          <h2>What We Offer</h2>
          <ul className="offerings-list">
            <li>
              <strong>Competitions:</strong> From hackathons to robotics competitions, we offer a variety of 
              challenges for participants to test their skills and win exciting prizes.
            </li>
            <li>
              <strong>Workshops:</strong> Learn from industry experts through hands-on workshops on cutting-edge 
              technologies and tools.
            </li>
            <li>
              <strong>Tech Talks:</strong> Gain insights from thought leaders and innovators through our series 
              of tech talks and panel discussions.
            </li>
            <li>
              <strong>Exhibition:</strong> Explore innovative projects, products, and technologies showcased 
              by students, startups, and established companies.
            </li>
            <li>
              <strong>Networking:</strong> Connect with fellow tech enthusiasts, potential employers, and 
              industry professionals.
            </li>
          </ul>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <p>YouthFest 2025 is organized by a Baderia Global:</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">👨‍💼</div>
              <h3>--------------</h3>
              <p>--------------</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👩‍💼</div>
              <h3>--------------</h3>
              <p>--------------</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👨‍💻</div>
              <h3>--------------</h3>
              <p>--------------</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👩‍💻</div>
              <h3>--------------</h3>
              <p>--------------</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions about YouthFest 2025? Reach out to us!</p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>--------------</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+91 --------------</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Baderia Global College, Jabalpur</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;