import React, { useState } from 'react';
import './Stalls.css';
import { FaTimes, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

const Stalls = () => {
  const stallsList = [
    {
      id: 1,
      name: 'Tech Innovations',
      category: 'Gadgets',
      description: 'Showcasing the latest tech gadgets and innovations from around the world. Get hands-on experience with cutting-edge technology.',
      location: 'Stall #A1',
      image: 'https://source.unsplash.com/random/300x200/?vr',
      rules: [
        'Handle displayed gadgets with care and follow staff instructions',
        'No food or drinks allowed near the equipment',
        'Photography is permitted but no flash photography',
        'Maximum demonstration time is 10 minutes per person'
      ]
    },
    {
      id: 2,
      name: 'VR Experience Zone',
      category: 'Virtual Reality',
      description: 'Immerse yourself in virtual worlds with our state-of-the-art VR equipment. Experience games, simulations, and educational content in virtual reality.',
      location: 'Stall #A2',
      image: 'https://source.unsplash.com/random/300x200/?vr',
      rules: [
        'Must be 13+ years old to use VR equipment',
        'Remove shoes before entering VR zones',
        'Follow safety guidelines provided by staff',
        'Sessions limited to 15 minutes per person'
      ]
    },
    {
      id: 3,
      name: 'Robotics Showcase',
      category: 'Robotics',
      description: 'See robots in action! From industrial automation to personal assistant robots, explore the future of robotics technology.',
      location: 'Stall #B1',
      image: 'https://source.unsplash.com/random/300x200/?robots',
      rules: [
        'Maintain safe distance from operating robots',
        'Do not touch robots without staff permission',
        'Follow designated viewing areas',
        'No interference with robot demonstrations'
      ]
    },
    {
      id: 4,
      name: 'Startup Alley',
      category: 'Startups',
      description: 'Meet innovative startups and entrepreneurs showcasing their products and services. Great networking opportunity for investors and job seekers.',
      location: 'Stall #B2-B5',
      image: 'https://source.unsplash.com/random/300x200/?startup',
      rules: [
        'Register at info desk for pitch sessions',
        'Business cards recommended for networking',
        'Respect confidential information',
        'Schedule appointments for detailed discussions'
      ]
    },
    {
      id: 5,
      name: 'Gaming Paradise',
      category: 'Gaming',
      description: 'The ultimate gaming experience with the latest consoles, PC setups, and gaming accessories. Participate in mini-tournaments throughout the day.',
      location: 'Stall #C1-C3',
      image: 'https://source.unsplash.com/random/300x200/?gaming-setup',
      rules: [
        'Tournament registration required for participation',
        'Keep noise levels reasonable',
        'No food or drinks near gaming equipment',
        'Maximum gaming session: 30 minutes'
      ]
    },
    {
      id: 6,
      name: 'AI & ML Demo',
      category: 'Artificial Intelligence',
      description: 'Demonstrations of artificial intelligence and machine learning applications in various industries. See how AI is transforming our world.',
      location: 'Stall #D1',
      image: 'https://source.unsplash.com/random/300x200/?artificial-intelligence',
      rules: [
        'Data privacy guidelines must be followed',
        'Demo sessions are scheduled every hour',
        'Questions welcome during Q&A sessions',
        'No recording of proprietary demonstrations'
      ]
    },
    {
      id: 7,
      name: 'Tech Merchandise',
      category: 'Merchandise',
      description: 'Get your hands on exclusive TechFest merchandise including t-shirts, stickers, badges, and more. Perfect souvenirs to remember the event.',
      location: 'Stall #E1',
      image: 'https://source.unsplash.com/random/300x200/?merchandise',
      rules: [
        'All sales are final - no returns/exchanges',
        'Limited edition items: one per person',
        'Credit card preferred for transactions',
        'Keep purchase receipts for warranty'
      ]
    },
    {
      id: 8,
      name: 'Food Court',
      category: 'Food & Beverages',
      description: 'Refuel with a variety of food and beverage options. From quick snacks to full meals, we have something for everyone.',
      location: 'Area F',
      image: 'https://source.unsplash.com/random/300x200/?food-court',
      rules: [
        'Outside food and beverages not allowed',
        'Please dispose of waste in designated bins',
        'Inform staff of any allergies',
        'Seating on first-come-first-serve basis'
      ]
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All Stalls');
  const [selectedStall, setSelectedStall] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (stall) => {
    setSelectedStall(stall);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStall(null);
  };

  const filteredStalls = stallsList.filter(stall =>
    activeFilter === 'All Stalls' ? true : stall.category === activeFilter
  );

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const categories = ['All Stalls', 'Gadgets', 'Virtual Reality', 'Robotics', 'Startups', 'Gaming', 'Artificial Intelligence', 'Merchandise', 'Food & Beverages'];

  return (
    <div className="stalls-container" id="stalls">
      <div className="stalls-header">
        <h1>Stalls & Exhibitions</h1>
        <p>Explore the exciting stalls and exhibitions at TechFest 2025</p>
      </div>

      <div className="stalls-map">
        <h2>Stalls Layout</h2>
        <div className="map-container">
          <div className="map-image">
            {/* This would be replaced with an actual map image */}
            <div className="map-placeholder">Interactive Map Coming Soon</div>
          </div>
          <div className="map-legend">
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#7e57c2'}}></div>
              <span>Technology Stalls (A Section)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#4caf50'}}></div>
              <span>Robotics & AI (B Section)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#ff9800'}}></div>
              <span>Gaming Zone (C Section)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#2196f3'}}></div>
              <span>Startup Booths (D Section)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{backgroundColor: '#f44336'}}></div>
              <span>Merchandise & Food (E-F Section)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="stalls-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="stalls-grid">
        {filteredStalls.map((stall) => (
          <div className="stall-card" key={stall.id}>
            <div className="stall-image">
              <img src={stall.image} alt={stall.name} />
              <div className="stall-category">{stall.category}</div>
            </div>
            <div className="stall-content">
              <h3 className="stall-name">{stall.name}</h3>
              <div className="stall-location">
                <span className="location-icon">📍</span>
                <span>{stall.location}</span>
              </div>
              <p className="stall-description">{stall.description}</p>
              <button className="stall-visit-btn" onClick={() => handleLearnMore(stall)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className={`stall-modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
        <div className={`stall-modal ${isModalOpen ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
          {selectedStall && (
            <>
              <button className="modal-close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-header">
                <span className="modal-category">{selectedStall.category}</span>
                <h2 className="modal-title">{selectedStall.name}</h2>
              </div>
              <div className="modal-content">
                <div className="modal-main">
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <i className="fas fa-info-circle"></i>
                      About
                    </h3>
                    <p className="modal-description">{selectedStall.description}</p>
                  </div>
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <i className="fas fa-list"></i>
                      Rules & Guidelines
                    </h3>
                    <ul className="modal-rules">
                      {selectedStall.rules.map((rule, index) => (
                        <li key={index} className="modal-rule-item">
                          <i className="fas fa-check"></i>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="modal-sidebar">
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <FaMapMarkerAlt />
                      Location
                    </h3>
                    <p className="modal-description">{selectedStall.location}</p>
                  </div>
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <FaClock />
                      Timings
                    </h3>
                    <div className="modal-timing">
                      <span className="timing-day">Day 1:</span>
                      <span className="timing-hours">10:00 AM - 6:00 PM</span>
                      <span className="timing-day">Day 2:</span>
                      <span className="timing-hours">10:00 AM - 6:00 PM</span>
                      <span className="timing-day">Day 3:</span>
                      <span className="timing-hours">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <FaPhone />
                      Contact
                    </h3>
                    <div className="modal-contact">
                      <div className="contact-item">
                        <FaPhone />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="contact-item">
                        <FaEnvelope />
                        <span>contact@techfest.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stalls;