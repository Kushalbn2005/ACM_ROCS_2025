import { Calendar, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const RegistrationSection = () => {
    // Replace this with the real registration link
    const registrationUrl = "https://your.registration.link.com";

    return (
        <section id="register" className="py-20 section-gradient">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Card className="mx-auto shadow-medium">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 justify-center text-2xl">
                            <Calendar className="h-6 w-6 text-primary" />
                            Register for ROCS 2024
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-muted-foreground mb-6">
                            Secure your spot for the ACM ROCS 2024 event!
                        </p>
                        <Button
                            asChild
                            variant="hero"
                            size="lg"
                            className="px-10 py-4 text-lg"
                        >
                            <a
                                href={registrationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Send className="h-4 w-4 mr-2" />
                                Register Now
                            </a>
                        </Button>
                        <p className="text-sm text-muted-foreground text-center mt-4">
                            Registration is free for students. Faculty/Industry: ₹2000
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default RegistrationSection;
