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
              ROCS (Research Opportunities in Computer Science), pronounced ROCKS, is an ACM India initiative that introduces undergraduate students to cutting-edge research in computer science. The aim is to inspire students to explore research careers in both academia and industry.
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
              href="https://example.com" // replace with your external link
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
      <section id="bmsce" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About BMS College of Engineering
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            B.M.S. College of Engineering (BMSCE), established in 1946, is the first private engineering college in India. Located in Bengaluru, BMSCE is known for its rich tradition of academic excellence, innovation, and industry collaboration. The college offers a wide range of undergraduate, postgraduate, and doctoral programs, and is recognized as a Tier-1 institution under NBA accreditation.
          </p>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto mt-6 leading-relaxed">
            With a vibrant student community, strong research culture, and state-of-the-art infrastructure, BMSCE continues to be a pioneer in engineering education, nurturing talent and shaping future leaders in technology and research.
          </p>
        </div>
      </section>

      {/* About BMSCE ACM Student Chapter */}
      <section id="bmsce-acm" className="py-20 section-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Code className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About BMSCE ACM Student Chapter
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            The ACM Student Chapter at B.M.S. College of Engineering is a vibrant community of students passionate about computing, technology, and innovation. As part of the Association for Computing Machinery (ACM), the world’s largest computing society, the chapter aims to provide a platform for students to learn, collaborate, and explore diverse areas of computer science.
          </p>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto mt-6 leading-relaxed">
            The chapter organizes a variety of activities including technical talks, workshops, hackathons, coding competitions, and peer learning programs, helping students enhance both their technical and professional skills. With a focus on knowledge sharing, mentorship, and industry-academia interaction, the BMSCE ACM Student Chapter empowers students to grow beyond the classroom and contribute to the wider computing community.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
