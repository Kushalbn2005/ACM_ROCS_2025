import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import ScheduleSection from '@/components/ScheduleSection';
import VenueSection from '@/components/VenueSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <VenueSection />
        <SpeakersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
