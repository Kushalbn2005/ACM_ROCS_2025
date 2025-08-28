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
    {
      icon: <Car className="h-5 w-5" />,
      label: "Parking Available"
    },
    {
      icon: <Coffee className="h-5 w-5" />,
      label: "Refreshments"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Full Day Access"
    }
  ];

  const directions = [
    "From Kottayam Railway Station: 15 minutes by taxi",
    "From Cochin Airport: 90 minutes by road",
    "Public transport available from city center",
    "Campus shuttle service from nearby hotels"
  ];

  return (
    <section id="venue" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Venue Details
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us at the beautiful campus of IIIT Kottayam in the heart of Kerala
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Venue Information */}
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
                  <h3 className="font-semibold text-lg mb-2">Indian Institute of Information Technology Kottayam</h3>
                  <p className="text-muted-foreground">
                    Valavoor Road, Pala<br />
                    Kottayam, Kerala 686635<br />
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
                    onClick={() => window.open('https://maps.google.com', '_blank')}
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

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91-481-2597100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>rocs@iiitkottayam.ac.in</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map/Image Placeholder */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">Interactive Map</p>
                  <p className="text-muted-foreground">Campus location and facilities</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">About IIIT Kottayam</h3>
                <p className="text-muted-foreground mb-4">
                  Indian Institute of Information Technology Kottayam is a premier technical institution 
                  established with the mission to foster innovation in information technology and computer science. 
                  The campus provides state-of-the-art facilities for research and learning.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Established</div>
                    <div className="text-muted-foreground">2015</div>
                  </div>
                  <div>
                    <div className="font-semibold">Campus Size</div>
                    <div className="text-muted-foreground">100+ Acres</div>
                  </div>
                  <div>
                    <div className="font-semibold">Research Labs</div>
                    <div className="text-muted-foreground">15+ Labs</div>
                  </div>
                  <div>
                    <div className="font-semibold">Auditorium</div>
                    <div className="text-muted-foreground">500+ Seats</div>
                  </div>
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