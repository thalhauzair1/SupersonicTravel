import { MapPin, Phone, Mail, Send } from 'lucide-react';
import '../styles/extra.css';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Contact Us</h2>
        <p style={{ color: 'var(--text-color-secondary)' }}>Ready to book your flight? Get in touch with us today.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ flex: '1 1 300px', backgroundColor: 'var(--bg-color-card)', padding: '40px', borderRadius: 'var(--radius-lg)', border: 'var(--border-glass)', backdropFilter: 'blur(20px)' }}>
          <h3 style={{ marginBottom: '20px' }}>Our Booking Office</h3>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <MapPin color="var(--color-primary)" />
            <div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>Address</strong>
              <p style={{ color: 'var(--text-color-secondary)', margin: 0 }}>Melbourne, Australia (Call ahead for appointments)</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <Phone color="var(--color-primary)" />
            <div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>General Phone</strong>
              <p style={{ color: 'var(--text-color-secondary)', margin: 0 }}>03 9436 4922</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <Phone color="var(--color-primary)" />
            <div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>Emergency & 24/7</strong>
              <p style={{ color: 'var(--text-color-secondary)', margin: 0 }}>0414 786 889 (Rafia)</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <Mail color="var(--color-primary)" />
            <div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>Email Us</strong>
              <p style={{ color: 'var(--text-color-secondary)', margin: 0 }}>info@supersonictravel.com.au</p>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 400px', padding: '50px', backgroundColor: 'var(--bg-color-card)', borderRadius: 'var(--radius-lg)', border: 'var(--border-glass)', backdropFilter: 'blur(20px)' }}>
          <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" required placeholder="Jane Doe" />
            </div>
            <div className="form-group" style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label>Email *</label>
                <input type="email" required placeholder="jane@example.com" />
              </div>
              <div style={{ flex: 1 }}>
                <label>Phone *</label>
                <input type="tel" required placeholder="Mobile number" />
              </div>
            </div>
            <div className="form-group">
              <label>Flight Query / Route</label>
              <input type="text" placeholder="e.g. Melbourne to Dubai round trip" />
            </div>
            <div className="form-group">
              <label>Additional Details</label>
              <textarea placeholder="Tell us your dates, passengers, or specific needs..." style={{ minHeight: '120px', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
               Send Request <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
