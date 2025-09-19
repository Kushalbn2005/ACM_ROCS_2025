import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-lg">ACM ROCS 2025</span>
            </div>
            <p className="text-background/80 mb-4">
              Research Opportunities in Computer Science - Shaping the future of technology and innovation.
            </p>
            <p className="text-sm text-background/60">
              September 26-27, 2025<br />
              B.M.S College Of Engineering, Karnataka
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About ROCS</a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-primary transition-colors">Speakers</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-primary transition-colors">Venue</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>acm@bmsce.ac.in</span>
              </div>
              {/* Phone contacts in separate divs for line break */}
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>
                  Indraneel <span >(ROCS SPOC)</span> <br />
                  <span className="font-mono">+91 99722 05808</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>
                  Dhruva <span >(ROCS SPOC)</span> <br />
                  <span className="font-mono">+91 91088 74443</span>
                </span>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  B.M.S College Of Engineering<br />
                  Bull Temple Road, Basavanagudi<br />
                  Bengaluru, Karnataka 560019
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>© 2025 ACM ROCS. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a
                href="https://www.bmsce.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                BMSCE
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
