import { Phone, MapPin, Clock } from 'lucide-react';
import '../styles/components.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Supersonic Travel</h3>
          <p>Makes Travel Easy</p>
          <div className="contact-info">
            <p><Phone size={16} /> 03 9436 4922</p>
            <p className="emergency"><Phone size={16} /> 0414 786 889 (24/7)</p>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Our Office</h4>
          <p style={{ color: '#ccc', marginBottom: '10px', display: 'flex', gap: '8px' }}>
            <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-primary)' }}/>
            Melbourne, Australia
          </p>
          <p style={{ color: '#ccc', display: 'flex', gap: '8px' }}>
            <Clock size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-primary)' }}/>
            Office timings: 9 am to 6pm Mon - Fri
          </p>
        </div>

        <div className="footer-links">
          <h4>Important Links</h4>
          <ul>
            <li><a href="#about">Who we are</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#policy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Supersonic Travel Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
