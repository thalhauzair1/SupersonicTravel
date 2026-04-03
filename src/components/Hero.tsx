import { motion } from 'framer-motion';
import { PlaneTakeoff } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Discover the world with <br/> <span style={{ color: 'var(--color-primary)' }}>Supersonic</span> Travel</h1>
          <p>
            Your highly professional, personalised, and friendly travel partner for over 11 years. Making travel easy, one flight at a time.
          </p>
          <div className="hero-actions">
            <motion.a 
              href="#deals"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Explore Quotes
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{ backgroundColor: 'transparent', border: '1px solid var(--text-color-light)', textDecoration: 'none' }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-plane"
        initial={{ x: '100vw', y: 100, rotate: -15, opacity: 0 }}
        animate={{ x: '10vw', y: -20, rotate: 0, opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ position: 'absolute', right: 0, bottom: '20%', zIndex: 1, pointerEvents:'none' }}
      >
        <PlaneTakeoff size={400} color="var(--text-color-light)" />
      </motion.div>
    </section>
  );
}
