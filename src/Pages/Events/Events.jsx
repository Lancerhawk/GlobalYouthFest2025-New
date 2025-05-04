import React, { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaUser, FaTrophy } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Close modal when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target.classList.contains('image-modal')) {
      setSelectedImage(null);
    }
  };

  const eventsList = [
    {
      id: 1,
      title: 'E-RACHNA',
      date: '19-21 May 2023',
      location: 'Global Square, Patan Bypass, Jabalpur',
      description: 'Electronics Circuit Design Competition - Showcase your innovative electronic circuit designs and compete with the best minds.',
      category: 'Electronics',
      coordinator: 'Prof. Nirdesh Jain',
      prize: '₹10,000/-',
      registrationFee: '50/-',
      image: '/images/events/erachna.jpg'
    },
    {
      id: 2,
      title: 'PICK & DROP',
      date: '19-21 May 2023',
      location: 'Global Square, Patan Bypass, Jabalpur',
      description: 'Smart Robot Smart Solution - Design and program robots to perform precise pick and drop operations in challenging scenarios.',
      category: 'Robotics',
      coordinator: 'Mr. Manish Choudhary',
      prize: '₹10,000/-',
      registrationFee: '50/-',
      image: '/images/events/PickandDrop.jpg'
    },
    {
      id: 3,
      title: 'ROBO RACE',
      date: '19-21 May 2023',
      location: 'Global Square, Patan Bypass, Jabalpur',
      description: 'Experience the thrill of robot racing - Build your fastest bot and compete in our challenging race track.',
      category: 'Robotics',
      coordinator: 'Prof. Nitin Mishra',
      prize: '₹10,000/-',
      registrationFee: '50/-',
      image: '/images/events/RoboRace.jpg'
    },
    {
      id: 4,
      title: 'Electronics Project Exhibition',
      date: '19-21 May 2023',
      location: 'Global Square, Patan Bypass, Jabalpur',
      description: 'Showcase your innovative electronics projects and prototypes in this grand exhibition of technological advancement.',
      category: 'Exhibition',
      coordinator: 'Prof. Nitin Mishra',
      prize: '₹25,000/-',
      registrationFee: '500/-',
      image: '/images/events/Electronics.jpg'
    },
    {
      id: 5,
      title: 'ROBO WAR',
      date: '19-21 May 2023',
      location: 'Global Square, Patan Bypass, Jabalpur',
      description: 'The ultimate battle of robots - Design your combat robot and compete in intense robot warfare matches.',
      category: 'Robotics',
      coordinator: 'Dr. Amit Kumar',
      prize: '₹15,000/-',
      registrationFee: '100/-',
      image: '/images/events/RoboWar.jpg'
    },
    {
      id: 6,
      title: 'Arduino Workshop',
      date: '20 May 2023',
      location: 'Global Square, Patan Bypass, Jabalpur',
      description: 'Learn the fundamentals of Arduino programming and hands-on experience with practical projects.',
      category: 'Workshop',
      coordinator: 'Prof. Rajesh Kumar',
      prize: 'Certificate',
      registrationFee: '300/-',
      image: '/images/events/Arduino.jpg'
    },
    {
      id: 7,
      title: 'Rush Football',
      date: '21 May 2023',
      location: 'Global Square Ground',
      description: 'Experience the fusion of technology and football in this unique robotic football tournament.',
      category: 'Robotics',
      coordinator: 'Mr. Suresh Patel',
      prize: '₹8,000/-',
      registrationFee: '75/-',
      image: '/images/events/RushFootball.jpg'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEvents = eventsList.filter(event => 
    activeFilter === 'All' ? true : event.category === activeFilter
  );

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="events-container" id="events">
      <div className="events-header">
        <h1>Events</h1>
        <p>Explore our exciting range of technical events and competitions</p>
      </div>

      <div className="events-filter">
        {['All', 'Electronics', 'Robotics', 'Exhibition', 'Workshop'].map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-image" onClick={() => setSelectedImage(event.image)}>
              <img src={event.image} alt={event.title} />
              <div className="event-category">{event.category}</div>
            </div>
            <div className="event-content">
              <h2 className="event-title">{event.title}</h2>
              <div className="event-details">
                <div className="event-detail">
                  <FaCalendar className="detail-icon" />
                  <span>{event.date}</span>
                </div>
                <div className="event-detail">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>{event.location}</span>
                </div>
                <div className="event-detail">
                  <FaUser className="detail-icon" />
                  <span>Coordinator: {event.coordinator}</span>
                </div>
                <div className="event-detail">
                  <FaTrophy className="detail-icon" />
                  <span>Prize: {event.prize}</span>
                </div>
              </div>
              <p className="event-description">{event.description}</p>
              <button className="event-register-btn">
                Register Now (₹{event.registrationFee})
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-event-modal" onClick={handleModalClick}>
          <div className="modal-event-content">
            <img src={selectedImage} alt="Event" className="modal-event-image" />
            <span className="modal-event-close" onClick={() => setSelectedImage(null)}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;