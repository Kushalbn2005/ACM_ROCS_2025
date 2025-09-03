import { Mail, Phone, MapPin, User, MessageSquare, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["rocs@iiitkottayam.ac.in", "events@iiitkottayam.ac.in"],
      action: "mailto:rocs@iiitkottayam.ac.in"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: ["+91-481-2597100", "+91-481-2597101"],
      action: "tel:+914812597100"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: ["IIIT Kottayam", "Valavoor Road, Pala", "Kottayam, Kerala 686635"],
      action: "https://maps.google.com"
    }
  ];

  const organizers = [
    {
      name: "Dr. Neel Kumar",
      role: "Conference Chair",
      email: "neel.kumar@iiitkottayam.ac.in"
    },
    {
      name: "Prof. Kavya Menon",
      role: "Program Chair",
      email: "kavya.menon@iiitkottayam.ac.in"
    },
    {
      name: "Dr. Arjun Krishnan",
      role: "Local Arrangements",
      email: "arjun.krishnan@iiitkottayam.ac.in"
    }
  ];

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact & Registration
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join us? Register now or get in touch for more information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Registration */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-primary" />
                Register Now
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center space-y-6">
              <p className="text-muted-foreground text-lg">
                Registration is free for students.
                Faculty and industry participants: ₹2000
              </p>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-6"
              >
                <a
                  href="https://external-registration-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Go to Registration Portal
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                You’ll be redirected to our official registration portal
              </p>
            </CardContent>
          </Card>

          {/* Contact + Organizers + Notes */}
          <div className="space-y-6">

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index}
                  className="hover:shadow-medium transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(contact.action, '_blank')}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Organizers */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Organizing Committee
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {organizers.map((organizer, index) => (
                  <div key={index} className="border-b border-border/50 last:border-b-0 pb-3 last:pb-0">
                    <h4 className="font-semibold text-foreground">{organizer.name}</h4>
                    <p className="text-sm text-primary">{organizer.role}</p>
                    <a
                      href={`mailto:${organizer.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {organizer.email}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Important Information
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Registration closes on September 20, 2024</li>
                  <li>• Limited seats available for hands-on workshops</li>
                  <li>• Accommodation assistance available upon request</li>
                  <li>• Certificate of participation will be provided</li>
                  <li>• Lunch and refreshments included in registration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
