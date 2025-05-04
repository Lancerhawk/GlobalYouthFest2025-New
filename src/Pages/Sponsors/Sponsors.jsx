import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsorsList = [
    {
      id: 1,
      name: 'TechCorp',
      tier: 'Platinum',
      logo: 'https://source.unsplash.com/random/150x150/?tech-logo',
      description: 'Leading technology company specializing in AI and cloud solutions.',
      website: 'https://example.com/techcorp'
    },
    {
      id: 2,
      name: 'InnovateSoft',
      tier: 'Gold',
      logo: 'https://source.unsplash.com/random/150x150/?software-logo',
      description: 'Software development company focused on innovative solutions for businesses.',
      website: 'https://example.com/innovatesoft'
    },
    {
      id: 3,
      name: 'NextGen Systems',
      tier: 'Gold',
      logo: 'https://source.unsplash.com/random/150x150/?systems-logo',
      description: 'Cutting-edge hardware and systems integration company.',
      website: 'https://example.com/nextgen'
    },
    {
      id: 4,
      name: 'Digital Dynamics',
      tier: 'Silver',
      logo: 'https://source.unsplash.com/random/150x150/?digital-logo',
      description: 'Digital transformation consultancy helping businesses embrace technology.',
      website: 'https://example.com/digitaldynamics'
    },
    {
      id: 5,
      name: 'CloudSphere',
      tier: 'Silver',
      logo: 'https://source.unsplash.com/random/150x150/?cloud-logo',
      description: 'Cloud infrastructure and services provider with global reach.',
      website: 'https://example.com/cloudsphere'
    },
    {
      id: 6,
      name: 'DevHub',
      tier: 'Silver',
      logo: 'https://source.unsplash.com/random/150x150/?dev-logo',
      description: 'Developer tools and resources platform supporting the tech community.',
      website: 'https://example.com/devhub'
    },
    {
      id: 7,
      name: 'TechStart Ventures',
      tier: 'Bronze',
      logo: 'https://source.unsplash.com/random/150x150/?venture-logo',
      description: 'Venture capital firm investing in early-stage tech startups.',
      website: 'https://example.com/techstart'
    },
    {
      id: 8,
      name: 'Quantum Computing Inc.',
      tier: 'Bronze',
      logo: 'https://source.unsplash.com/random/150x150/?quantum-logo',
      description: 'Pioneering research and development in quantum computing technologies.',
      website: 'https://example.com/quantum'
    },
    {
      id: 9,
      name: 'EduTech Solutions',
      tier: 'Bronze',
      logo: 'https://source.unsplash.com/random/150x150/?education-logo',
      description: 'Educational technology company transforming learning experiences.',
      website: 'https://example.com/edutech'
    },
    {
      id: 10,
      name: 'RoboInnovate',
      tier: 'Bronze',
      logo: 'https://source.unsplash.com/random/150x150/?robotics-logo',
      description: 'Robotics innovation company developing next-generation automation solutions.',
      website: 'https://example.com/roboinnovate'
    }
  ];

  return (
    <div className="sponsors-container" id="sponsors">
      <div className="sponsors-header">
        <h1>Our Sponsors</h1>
        <p>TechFest 2023 is proudly supported by these amazing organizations</p>
      </div>

      <div className="sponsors-tiers">
        <div className="tier platinum">
          <h2 className="tier-title">Platinum Sponsors</h2>
          <div className="sponsors-list">
            {sponsorsList
              .filter(sponsor => sponsor.tier === 'Platinum')
              .map(sponsor => (
                <div className="sponsor-card platinum-card" key={sponsor.id}>
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                  </div>
                  <div className="sponsor-info">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className="sponsor-description">{sponsor.description}</p>
                    <a href={sponsor.website} className="sponsor-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="tier gold">
          <h2 className="tier-title">Gold Sponsors</h2>
          <div className="sponsors-list">
            {sponsorsList
              .filter(sponsor => sponsor.tier === 'Gold')
              .map(sponsor => (
                <div className="sponsor-card gold-card" key={sponsor.id}>
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                  </div>
                  <div className="sponsor-info">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className="sponsor-description">{sponsor.description}</p>
                    <a href={sponsor.website} className="sponsor-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="tier silver">
          <h2 className="tier-title">Silver Sponsors</h2>
          <div className="sponsors-list">
            {sponsorsList
              .filter(sponsor => sponsor.tier === 'Silver')
              .map(sponsor => (
                <div className="sponsor-card silver-card" key={sponsor.id}>
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                  </div>
                  <div className="sponsor-info">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className="sponsor-description">{sponsor.description}</p>
                    <a href={sponsor.website} className="sponsor-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="tier bronze">
          <h2 className="tier-title">Bronze Sponsors</h2>
          <div className="sponsors-list bronze-list">
            {sponsorsList
              .filter(sponsor => sponsor.tier === 'Bronze')
              .map(sponsor => (
                <div className="sponsor-card bronze-card" key={sponsor.id}>
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                  </div>
                  <div className="sponsor-info">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className="sponsor-description">{sponsor.description}</p>
                    <a href={sponsor.website} className="sponsor-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="become-sponsor">
        <h2>Interested in Sponsoring?</h2>
        <p>Join our prestigious list of sponsors and get your brand in front of thousands of tech enthusiasts, students, and industry professionals.</p>
        <button className="sponsor-cta-btn">Become a Sponsor</button>
      </div>
    </div>
  );
};

export default Sponsors;