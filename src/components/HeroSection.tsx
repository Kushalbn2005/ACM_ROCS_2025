import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(./images/campus2.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Glass/blur shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-white/7 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl px-5 py-12 flex flex-col items-center text-center space-y-6">

        {/* Logos above title */}
        <div className="flex items-center justify-center gap-8 mb-6 flex-wrap">
          <img
            src="./images/ACM-BLUE.svg"
            alt="ACM Logo"
            className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain"
          />
          <img
            src="./images/BMSCE-ACM-BLUE.png"
            alt="BMSCE ACM Logo"
            className="h-24 sm:h-28 md:h-28 lg:h-44 w-auto object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-lg">
          ACM <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">ROCS 2025</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-white/90 font-semibold">
          Research Opportunities in Computer Science
        </h2>
        <p className="text-white/85 text-md md:text-xl max-w-xl mx-auto">
          Discover cutting-edge research opportunities, connect with industry experts, and shape the future of computer science
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center my-4">
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open("https://in.explara.com/e/rocs-at-bms-college-of-engineering--bengaluru", "_blank")}
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

        

        {/* Highlighted Schedule Boxes */}
        {/* Highlighted Schedule Boxes with matching gradients */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 my-8">
          {[
            {
              icon: Calendar,
              text: "September 26–27, 2025",
              gradient: "from-cyan-500/30 to-blue-500/30"
            },
            {
              icon: Clock,
              text: "9:00 AM – 5:00 PM",
              gradient: "from-cyan-500/30 to-blue-500/30"
            },
            {
              icon: MapPin,
              text: "BMSCE, Karnataka",
              gradient: "from-cyan-500/30 to-blue-500/30"
            },
            {
              icon: Users,
              text: "Offline Event",
              gradient: "from-cyan-500/30 to-blue-500/30"
            }
          ].map(({ icon: Icon, text, gradient }, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-5 py-3
                          rounded-xl bg-gradient-to-r ${gradient}
                          border border-white/10 backdrop-blur-md
                          shadow-md text-white/90
                          hover:brightness-110 transition`}
            >
              <Icon className="h-6 w-6 text-white" />
              <span className="text-base md:text-lg font-medium">{text}</span>
            </div>
          ))}
        </div>
        {/* New Note Below Buttons */}
        <p className="text-white/90 text-md md:text-lg italic">
          *Open to all college students and faculties. Registered participants will receive lunch and refreshments on both days.
        </p>


      </div>
    </section>
  );
};

export default HeroSection;

