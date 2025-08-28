import { BookOpen, Users, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Research Opportunities",
      description: "Gain awareness about various research opportunities in the field of Computer Science and explore cutting-edge domains."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Networking",
      description: "Connect with fellow researchers, students, and industry experts to build valuable professional relationships."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Learning",
      description: "Gain insights from workshops and sessions led by distinguished professors and researchers."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Discover innovative research methodologies and tools to embark on your research journey."
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ACM ROCS
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The ACM ROCS workshop aims to provide students and researchers with a comprehensive understanding 
            of the current and emerging research opportunities within the field of computer science. This workshop 
            is designed to inspire participants to explore various research domains, understand the methodologies 
            involved, and equip them with the necessary tools to embark on their research journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Attend ROCS?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join us for two days of intensive learning, networking, and discovery. Whether you're a student 
                looking to start your research journey or an experienced researcher seeking new opportunities, 
                ROCS provides the perfect platform to advance your career in computer science.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Expert Speakers</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Hands-on Workshops</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Research Presentations</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Networking Sessions</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;