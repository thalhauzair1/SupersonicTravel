import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import DealsCarousel from '../components/DealsCarousel';
import FareAlertForm from '../components/FareAlertForm';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Supersonic Travel | Flight Booking & Holiday Packages in Australia</title>
        <meta name="description" content="Supersonic Travel Services in Melbourne. Book international and domestic flights in Australia." />
      </Helmet>
      
      <div className="home-page">
        <div id="home"><Hero /></div>
        <div id="flights"><ServiceCards /></div>
        <div id="deals"><DealsCarousel /></div>
        <FareAlertForm />
        <div id="contact"><ContactSection /></div>
      </div>
    </>
  );
}
