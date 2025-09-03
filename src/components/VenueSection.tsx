import { MapPin, Navigation, Phone, Mail, Clock, Wifi, Car, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const VenueSection = () => {
  const venueFeatures = [
    {
      icon: <Wifi className="h-5 w-5" />,
      label: "Free WiFi"
    },
    // {
    //   icon: <Car className="h-5 w-5" />,
    //   label: "Parking Available"
    // },
    {
      icon: <Coffee className="h-5 w-5" />,
      label: "Refreshments"
    }
  ];

  const directions = [
    "From Bengaluru City Railway Station (Majestic): 40 minutes by taxi/auto",
    "From Kempegowda International Airport: 75–90 minutes by road",
    "From Majestic Bus Stand (Kempegowda Bus Station): 40 minutes by BMTC bus/auto",
    "Metro Access: Nearest station is National College (Namma Metro Green Line), 10 minutes by auto/taxi",
    "Public Transport: Frequent BMTC buses from all parts of the city"
  ];

  return (
    <section id="venue" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Venue Details
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Venue Info + How to Reach */}
          <div className="space-y-6">
            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Location Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">B.M.S. College Of Engineering</h3>
                  <p className="text-muted-foreground">
                    Bull Temple Road, Basavanagudi,<br />
                    Bengaluru, Karnataka 560004<br />
                    India
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {venueFeatures.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {feature.icon}
                      {feature.label}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const destination = encodeURIComponent('Auditorium 1 and 2, BMSCE, Bengaluru, Karnataka');
                      const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
                      window.open(url, '_blank');
                    }}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">How to Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {directions.map((direction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{direction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Map + Contact Info */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="overflow-hidden rounded-lg shadow-md h-96">
                <iframe
                  title="Campus Location"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0400782307994!2d77.5629794!3d12.9407325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158eae5b2351%3A0xc700835ecd03e055!2sAuditorium%201%20and%202%2C%20BMSCE%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1693280000000!5m2!1sen!2sin"
                />
              </div>
            </Card>

            {/* Contact Information now on right side */}
            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span><b>Indraneel</b> (Student Co-ordinator) - +91 99722 05808</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span><b>Dr. Seemanthini K</b> (Faculty Co-ordinator) - +91 96862 69313</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>acm@bmsce.ac.in</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

  );
};

export default VenueSection;

{/*<Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">About BMSCE</h3>
                <p className="text-muted-foreground mb-4">
                  BMS College of Engineering is a renowned institution of higher education, established with the mission to provide quality technical education and nurture innovation in engineering and technology. The college offers a vibrant learning environment supported by modern infrastructure, advanced laboratories, and research facilities, empowering students to excel in academics, research, and industry.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Established</div>
                    <div className="text-muted-foreground">1946</div>
                  </div>
                  <div>
                    <div className="font-semibold">Campus Size</div>
                    <div className="text-muted-foreground">11+ Acres</div>
                  </div>
                  <div>
                    <div className="font-semibold">Research Labs</div>
                    <div className="text-muted-foreground">130+ Labs</div>
                  </div>
                  <div>
                    <div className="font-semibold">Auditorium</div>
                    <div className="text-muted-foreground">250+ Seats</div>
                  </div>
                </div>
              </CardContent>
            </Card> */}