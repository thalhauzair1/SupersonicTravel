import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/extra.css';

export default function FareAlertForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-padding container">
      <div className="alert-form-section">
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2>Flight Fares Alert Service</h2>
          <p style={{ color: 'var(--text-color-secondary)' }}>Get notified of special & cheap flight fares through SMS or Email for FREE.</p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-primary)' }}
          >
            <h3>Thank you for subscribing!</h3>
            <p>You will receive alerts when special fares become available.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" required placeholder="John" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Mobile Number *</label>
                <input type="tel" required placeholder="+61 400 000 000" />
              </div>
              <div className="form-group">
                <label>Destination Alert Preference *</label>
                <select required>
                  <option value="">Choose preferred destination</option>
                  <option value="middle-east">Middle East</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="americas">Americas</option>
                  <option value="africa">Africa</option>
                  <option value="any">Any special deal</option>
                </select>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', maxWidth: '300px' }}>
                Subscribe Now
              </button>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '15px', color: '#888' }}>
              By subscribing, you agree to our Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
