import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const eventSchedule = {
    'Day 1 - May 16, 2025': [
      {
        time: '09:00 AM - 10:00 AM',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      },
      {
        time: '10:30 AM - 05:30 PM',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      },
      {
        time: '--------------',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      },
      {
        time: '02:00 PM - 04:00 PM',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      }
    ],
    'Day 2 - May 17, 2025': [
      {
        time: '09:00 AM - 06:00 PM',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      },
      {
        time: '10:00 AM - 12:00 PM',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      },
      {
        time: '02:00 PM - 05:00 PM',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      },
      {
        time: '05:30 PM - 07:30 PM',
        event: '--------------',
        location: '--------------',
        description: '--------------'
      }
    ],
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>Event Schedule</h1>
        <p>Three days of innovation, learning, and excitement</p>
      </div>

      <div className="timeline-content">
        {Object.entries(eventSchedule).map(([day, events]) => (
          <div key={day} className="timeline-day">
            <h2 className="day-header">{day}</h2>
            <div className="events-list">
              {events.map((event, index) => (
                <div key={index} className="timeline-event">
                  <div className="event-time">{event.time}</div>
                  <div className="event-details">
                    <h3>{event.event}</h3>
                    <div className="event-location">
                      <span className="location-icon">📍</span>
                      {event.location}
                    </div>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;