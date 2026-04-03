import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import '../styles/extra.css';

const deals = [
  { id: 1, airline: 'Malaysia Airlines', route: 'Melbourne - KUL / JED', price: '$585', image: '/destinations/kul.png' },
  { id: 2, airline: 'Qantas Airways', route: 'Melbourne - LHE / KHI', price: '$1260', image: '/destinations/lhe.png' },
  { id: 3, airline: 'Qatar Airways', route: 'Melbourne - LHR (London)', price: '$1499', image: '/destinations/lhr.png' },
  { id: 4, airline: 'Emirates', route: 'Melbourne - DXB (Dubai)', price: '$1350', image: '/destinations/dxb.png' },
  { id: 5, airline: 'Singapore Airlines', route: 'Melbourne - SIN', price: '$850', image: '/destinations/sin.png' },
];

export default function DealsCarousel() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="section-padding deals-section">
      <div className="container">
        <div className="deals-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', gap: '20px' }}>
          <h2>Hottest Fares of the Week</h2>
          <button className="btn btn-outline">View All Deals</button>
        </div>
        
        <motion.div ref={carouselRef} style={{ cursor: 'grab', overflow: 'hidden' }}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            style={{ display: 'flex', gap: '30px' }}
          >
            {deals.map(deal => (
              <motion.div key={deal.id} className="deal-card" whileHover={{ scale: 1.02 }}>
                <div className="deal-img-wrapper">
                  <img src={deal.image} alt={deal.route} className="deal-img" />
                </div>
                <div className="deal-content">
                  <h3>{deal.airline}</h3>
                  <p style={{ color: 'var(--text-color-secondary)', marginTop: '10px' }}>{deal.route}</p>
                  <div className="deal-price">{deal.price} <span style={{ fontSize: '1rem', color: 'var(--text-color-secondary)', fontWeight: 'normal' }}>excl. taxes</span></div>
                  <button className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    Book Now <ArrowRight size={16}/>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
