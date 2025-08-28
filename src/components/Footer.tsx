import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-mono">R</span>
              </div>
              <span className="font-bold text-lg">ACM ROCS 2024</span>
            </div>
            <p className="text-background/80 mb-4">
              Research Opportunities in Computer Science - Shaping the future of technology and innovation.
            </p>
            <p className="text-sm text-background/60">
              September 26-27, 2024<br />
              IIIT Kottayam, Kerala
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About ROCS</a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-primary transition-colors">Speakers</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-primary transition-colors">Venue</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Registration</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>rocs@iiitkottayam.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-481-2597100</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  IIIT Kottayam<br />
                  Valavoor Road, Pala<br />
                  Kottayam, Kerala 686635
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>© 2024 ACM ROCS. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a 
                href="https://iiitkottayam.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                IIIT Kottayam
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>•</span>
              <a 
                href="https://india.acm.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                ACM India
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;