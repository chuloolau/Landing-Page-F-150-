import StickyNav from './components/StickyNav';
import WhatsAppFloat from './components/WhatsAppFloat';
import BaratecHero from './sections/BaratecHero';
import ApplicationsSection from './sections/ApplicationsSection';
import CasosRealesSection from './sections/CasosRealesSection';
import ProductCarousel from './sections/ProductCarousel';
import VideoCallout from './sections/VideoCallout';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <main
      style={{
        backgroundColor: '#FAFAF7',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Inter, "Segoe UI", Roboto, sans-serif',
        overflowX: 'clip',
      }}
    >
      <StickyNav />
      <BaratecHero />
      <ApplicationsSection />
      <ProductCarousel />
      <VideoCallout />
      <CasosRealesSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
