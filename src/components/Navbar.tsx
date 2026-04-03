import { Plane, Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../styles/components.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Flights', path: '#flights' },
    { name: 'Deals', path: '#deals' },
    { name: 'Contact Us', path: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="brand">
          <Plane className="brand-icon" />
          <div className="brand-text">
            <span className="brand-name">Supersonic</span>
            <span className="brand-tag">Travel Services</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <button 
            className="theme-toggle" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="btn btn-primary">Book Now</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="theme-toggle mobile" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <><Sun size={20} /> <span style={{marginLeft: '10px'}}>Light Mode</span></>
            ) : (
              <><Moon size={20} /> <span style={{marginLeft: '10px'}}>Dark Mode</span></>
            )}
          </button>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setIsMobileMenuOpen(false)}>
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
