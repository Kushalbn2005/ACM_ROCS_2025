import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-tech-gradient opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/15 rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              ACM <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">ROCS</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-6">
              Research Opportunities in Computer Science
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge research opportunities, connect with industry experts, and shape the future of computer science
            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass p-6 border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Event Date</h3>
              <p className="text-white/80">September 26-27, 2024</p>
            </Card>
            
            <Card className="glass p-6 border-white/20">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-white/80">IIIT Kottayam, Kerala</p>
            </Card>
            
            <Card className="glass p-6 border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Format</h3>
              <p className="text-white/80">Hybrid Event</p>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="text-lg px-8 py-4"
            >
              Register Now
            </Button>
            <Button 
              variant="glass"
              size="lg"
              onClick={() => scrollToSection('#about')}
              className="text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;