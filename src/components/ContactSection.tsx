import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Registration Successful!",
      description: "We'll send you confirmation details soon.",
    });
    
    setIsSubmitting(false);
  };

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
          {/* Registration Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-primary" />
                Register Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name"
                    required
                    className="transition-all duration-200 focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="transition-all duration-200 focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution/Organization</Label>
                  <Input 
                    id="institution" 
                    placeholder="Your university or company"
                    required
                    className="transition-all duration-200 focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Role/Position</Label>
                  <Input 
                    id="role" 
                    placeholder="Student, Researcher, Professor, etc."
                    required
                    className="transition-all duration-200 focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message"
                    placeholder="Any questions or special requirements?"
                    rows={4}
                    className="transition-all duration-200 focus:shadow-soft"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Register for ROCS 2024
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Registration is free for students. Faculty and industry participants: ₹2000
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 cursor-pointer"
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

            {/* Organizing Committee */}
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