import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Events from './Pages/Events/Events'
import Stalls from './Pages/Stalls/Stalls'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import './global.css'
import './App.css'
import './tech-background.css'
import { useEffect, useRef } from 'react'
import Timeline from './Pages/Timeline/Timeline.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const techBackgroundInitialized = useRef(false);
  
  useEffect(() => {
    // Only initialize once
    if (techBackgroundInitialized.current) return;
    
    // Import the tech background script dynamically and initialize it
    import('./tech-background.js')
      .then(module => {
        // Explicitly call the initialization function
        if (typeof module.default === 'function') {
          module.default();
          techBackgroundInitialized.current = true;
          console.log('Tech background initialized successfully');
        }
      })
      .catch(error => {
        console.error('Failed to load tech background:', error);
      });
  }, []);
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        {/* Tech background container will be added by the script */}
        <div id="tech-background-container"></div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/stalls" element={<Stalls />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
