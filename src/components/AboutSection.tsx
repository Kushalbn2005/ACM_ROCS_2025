import { BookOpen, Users, Target, Lightbulb, GraduationCap, Code } from 'lucide-react';
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
    <>
      {/* About ACM ROCS */}
      <section id="about" className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About ACM ROCS
            </h2>
            <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ROCS (Research Opportunities in Computer Science), pronounced ROCKS, is an ACM India initiative that introduces undergraduate students to cutting-edge research in Computer Science. The aim is to inspire students to explore research careers in both academia and industry.
              <br /><br />
              This is the <span className="font-bold">first-ever two-day edition of ACM ROCS</span>, designed to provide students with an immersive experience of learning, networking, and innovation in research.
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

          {/* Explore More Button */}
          <div className="mt-12 text-center">
            <a
              href="https://india.acm.org/research/research-opportunities-in-cs" // replace with your external link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary/90 transition-colors"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>


      {/* About BMSCE */}


      {/* About BMSCE ACM Student Chapter */}

    </>
  );
};

export default AboutSection;
