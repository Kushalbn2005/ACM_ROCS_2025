import React from 'react';
import { Card, CardContent } from './ui/card';
import { Linkedin, Mail } from 'lucide-react';

type Speaker = {
  name: string;
  title: string;
  institution: string;
  image: string;
  email: string;
  linkedin: string;
  website: string;
};

const speakers: Speaker[] = [
  {
    name: "Jayant Haritsa",
    title: "Infosys Prize Winner, Bhatnagar Award winner, Former President of ACM",
    institution: "IISc Bangalore",
    image: "./src/assets/jayanth.jpg",
    email: "#",
    linkedin: "https://www.linkedin.com/in/jayant-haritsa-90a638?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    website: "https://cds.iisc.ac.in/people/jayant-r-haritsa/",
  },
  {
    name: "Meenakshi D'Souza",
    title: "OCCE award winner, Current President of ACM India Council",
    institution: "IIIT Bangalore",
    image: "./src/assets/Meenakshi 2.jpeg",
    email: "#",
    linkedin: "https://www.linkedin.com/in/meenakshi-d-souza-693aa934/?originalSubdomain=in",
    website: "https://www.iiitb.ac.in/faculty/meenakshi-dsouza",
  },
  {
    name: "Bhavana Kanukruthi",
    title: "",
    institution: "IISc Bangalore",
    image: "./src/assets/Bhavana.jpeg",
    email: "#",
    linkedin: "https://www.csa.iisc.ac.in/~bhavana/",
    website: "https://www.csa.iisc.ac.in/~bhavana/",
  },
  {
    name: "Siddharth Barman",
    title: "ECR Award Winner",
    institution: "IISc Bangalore",
    image: "./src/assets/Siddharth.jpeg",
    email: "#",
    linkedin: "https://www.linkedin.com/in/siddharth-barman-6a759022a/?originalSubdomain=in",
    website: "https://www.csa.iisc.ac.in/~barman/",
  },
];

const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Distinguished Speakers
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and accomplished researchers who are shaping the future of Computer Science
          </p>
        </div>
        {/* Flex Layout with wider cards and more gap */}
        <div className="flex flex-wrap justify-center gap-12">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-4 overflow-hidden w-full sm:w-[340px] md:w-[360px]"
            >
              <div className="relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-72 object-cover block group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                {/* Action buttons */}
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <a
                    href={speaker.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-1 hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                  </a>
                  <p className="text-muted-foreground">{speaker.institution}</p>
                  <p className="text-primary font-semibold">{speaker.title}</p>
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
