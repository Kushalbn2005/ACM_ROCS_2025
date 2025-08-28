import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Linkedin, Mail } from 'lucide-react';
import speaker1 from '@/assets/speaker1.jpg';
import speaker2 from '@/assets/speaker2.jpg';
import speaker3 from '@/assets/speaker3.jpg';

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Professor",
      institution: "IIT Kharagpur",
      image: speaker1,
      expertise: ["Machine Learning", "Computer Vision", "AI Ethics"],
      bio: "Leading researcher in machine learning and computer vision with over 15 years of experience in academia and industry.",
      email: "rajesh.kumar@iitkgp.ac.in",
      linkedin: "#"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Associate Professor",
      institution: "IIIT Delhi",
      image: speaker2,
      expertise: ["Cybersecurity", "Blockchain", "Network Security"],
      bio: "Expert in cybersecurity and blockchain technology, with numerous publications in top-tier conferences and journals.",
      email: "priya.sharma@iiitd.ac.in",
      linkedin: "#"
    },
    {
      name: "Dr. Arun Patel",
      title: "Research Scientist",
      institution: "IIT Jodhpur",
      image: speaker3,
      expertise: ["Quantum Computing", "Algorithms", "Complexity Theory"],
      bio: "Pioneering research in quantum computing and theoretical computer science, with significant contributions to algorithmic efficiency.",
      email: "arun.patel@iitj.ac.in",
      linkedin: "#"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Distinguished Speakers
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and accomplished researchers who are shaping the future of computer science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-4 overflow-hidden">
              <div className="relative">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={`mailto:${speaker.email}`}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a 
                    href={speaker.linkedin}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    {speaker.title}
                  </p>
                  <p className="text-muted-foreground">
                    {speaker.institution}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {speaker.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;