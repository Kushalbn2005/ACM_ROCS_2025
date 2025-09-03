import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ScheduleSection = () => {
  const day1Schedule = [
    {
      time: "9:00 AM - 9:30 AM",
      title: "Registration & Welcome",
      speaker: "Organizing Committee",
      type: "General",
      venue: "Main Auditorium"
    },
    {
      time: "9:30 AM - 10:30 AM",
      title: "Keynote: Future of AI Research",
      speaker: "Dr. Rajesh Kumar",
      type: "Keynote",
      venue: "Main Auditorium"
    },
    {
      time: "10:30 AM - 11:00 AM",
      title: "Coffee Break & Networking",
      speaker: "",
      type: "Break",
      venue: "Foyer"
    },
    {
      time: "11:00 AM - 12:00 PM",
      title: "Research Opportunities in Machine Learning",
      speaker: "Dr. Rajesh Kumar",
      type: "Talk",
      venue: "Hall A"
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Cybersecurity Research Landscape",
      speaker: "Dr. Priya Sharma",
      type: "Talk",
      venue: "Hall B"
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Lunch Break",
      speaker: "",
      type: "Break",
      venue: "Cafeteria"
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Hands-on Workshop: Research Methodology",
      speaker: "All Speakers",
      type: "Workshop",
      venue: "Lab 1 & 2"
    },
    {
      time: "3:30 PM - 4:00 PM",
      title: "Tea Break",
      speaker: "",
      type: "Break",
      venue: "Foyer"
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Panel Discussion: Career in Research",
      speaker: "All Speakers",
      type: "Panel",
      venue: "Main Auditorium"
    }
  ];

  const day2Schedule = [
    {
      time: "9:00 AM - 10:00 AM",
      title: "Quantum Computing: The Next Frontier",
      speaker: "Dr. Arun Patel",
      type: "Keynote",
      venue: "Main Auditorium"
    },
    {
      time: "10:00 AM - 10:30 AM",
      title: "Coffee Break & Networking",
      speaker: "",
      type: "Break",
      venue: "Foyer"
    },
    {
      time: "10:30 AM - 11:30 AM",
      title: "Student Research Presentations",
      speaker: "Selected Students",
      type: "Presentation",
      venue: "Hall A & B"
    },
    {
      time: "11:30 AM - 12:30 PM",
      title: "Industry Collaboration in Research",
      speaker: "Industry Experts",
      type: "Talk",
      venue: "Main Auditorium"
    },
    {
      time: "12:30 PM - 1:30 PM",
      title: "Lunch Break",
      speaker: "",
      type: "Break",
      venue: "Cafeteria"
    },
    {
      time: "1:30 PM - 3:00 PM",
      title: "Research Funding & Opportunities",
      speaker: "Dr. Priya Sharma",
      type: "Workshop",
      venue: "Hall A"
    },
    {
      time: "3:00 PM - 3:30 PM",
      title: "Tea Break",
      speaker: "",
      type: "Break",
      venue: "Foyer"
    },
    {
      time: "3:30 PM - 4:30 PM",
      title: "Closing Ceremony & Awards",
      speaker: "Organizing Committee",
      type: "Ceremony",
      venue: "Main Auditorium"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'keynote': return 'bg-primary text-primary-foreground';
      case 'talk': return 'bg-accent text-accent-foreground';
      case 'workshop': return 'bg-secondary text-secondary-foreground';
      case 'panel': return 'bg-muted text-muted-foreground';
      case 'presentation': return 'bg-primary-light text-white';
      case 'ceremony': return 'bg-primary-dark text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const ScheduleDay = ({ schedule, day }: { schedule: typeof day1Schedule, day: string }) => (
    <div className="space-y-4">
      {schedule.map((session, index) => (
        <Card key={index} className="hover:shadow-medium transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="font-mono">
                  <Clock className="h-3 w-3 mr-1" />
                  {session.time}
                </Badge>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {session.title}
                  </h3>
                  <Badge className={getTypeColor(session.type)}>
                    {session.type}
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  {session.speaker && (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {session.speaker}
                    </div>
                  )}
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {session.venue}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="schedule" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two days packed with insightful sessions, workshops, and networking opportunities
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
            <TabsTrigger value="day1" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Day 1 - Sept 26
            </TabsTrigger>
            <TabsTrigger value="day2" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Day 2 - Sept 27
            </TabsTrigger>
          </TabsList>

          <TabsContent value="day1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Day 1 - Friday, September 26, 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScheduleDay schedule={day1Schedule} day="1" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Day 2 - Saturday, September 27, 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScheduleDay schedule={day2Schedule} day="2" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleSection;