import { motion } from 'framer-motion';
import { Plane, Map, Shield } from 'lucide-react';
import '../styles/components.css';

const services = [
  { id: 1, title: 'Intl. Flights', icon: <Plane size={32}/>, desc: 'Best deals on hundreds of reputed airlines worldwide.', image: '/services/intl.png' },
  { id: 2, title: 'Domestic Flights', icon: <Plane size={32} style={{ transform: 'rotate(-45deg)' }}/>, desc: 'Travel within Australia with ease and comfort.', image: '/services/dom.png' },
  { id: 3, title: 'Holiday Packages', icon: <Map size={32}/>, desc: 'Kumuka Tours, Contiki Holidays, and more.', image: '/services/pkg.png' },
  { id: 4, title: 'Travel Insurance', icon: <Shield size={32}/>, desc: 'Reliable coverage for your peace of mind.', image: '/services/ins.png' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServiceCards() {
  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Services</h2>
        <p style={{ color: 'var(--text-color-secondary)' }}>Complete guidance in organizing all your travel needs.</p>
      </div>
      
      <motion.div 
        className="service-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((svc) => (
          <motion.div 
            key={svc.id} 
            className="service-card" 
            variants={itemVariants} 
            style={{ '--bg-image': `url(${svc.image})` } as React.CSSProperties}
          >
            <div className="service-icon">{svc.icon}</div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
