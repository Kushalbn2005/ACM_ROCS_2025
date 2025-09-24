import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ScheduleSection = () => {
  const day1Schedule = [
    {
      time: "9:30 AM - 10:00 AM",
      title: "Inauguration",
      speaker: "Organizing Committee",
      venue: "Auditorium-1"
    },
    {
      time: "10:00 AM - 10:45 AM",
      title: "Database Systems: The Hidden Power behind the Computing Throne",
      speaker: "Jayant Haritsa, IISc",
      venue: "Auditorium-1"
    },
    {
      time: "10:45 AM - 11:15 AM",
      title: "Break",
      speaker: "",
      venue: "Ground Floor, PJA Block"
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "Talk by Padmanabha Seshadri, IBM",
      speaker: "",
      venue: "Auditorium-1"
    },
    {
      time: "12:00 PM - 12:45 PM",
      title: "Opportunities on Edge and Cloud Computing for AI Workloads",
      speaker: "Yogesh Simmhan, IISc",
      venue: "Auditorium-1"
    },
    {
      time: "12:45 PM - 2:00 PM",
      title: "Lunch Break",
      speaker: "",
      venue: "MPH Hall, Mess Ground"
    },
    {
      time: "2:00 PM - 2:45 PM",
      title: "Ask Me Anything Session",
      speaker: "",
      venue: "Auditorium-1"
    },
    {
      time: "2:45 PM - 3:15 PM",
      title: "Break",
      speaker: "",
      venue: "Ground Floor, PJA Block"
    },
    {
      time: "3:15 PM - 4:00 PM",
      title: "Talk by Meenakshi D'Souza, IIIT Bangalore",
      speaker: "",
      venue: "Auditorium-1"
    },
    {
      time: "4:00 PM - 4:45 PM",
      title: "Multimodal earable device for longitudinal monitoring",
      speaker: "Jayavardhana Lakshminarasimha, TCS Research",
      venue: "Auditorium-1"
    },
    {
      time: "4:45 PM - 5:30 PM",
      title: "Overview of Generative Modeling Research at GDM India",
      speaker: "Karthikeyan Shanmugam, Google Research",
      venue: "Auditorium-1"
    }
  ];

  const day2Schedule = [
    {
      time: "9:30 AM - 10:15 AM",
      title: "The Good, the Bad and the Rational : A Cryptographer's Dilemma",
      speaker: "Bhavana Kanukurthi, IISc",
      venue: "Auditorium-1"
    },
    {
      time: "10:15 AM - 11:00 AM",
      title: "Algorithms for Assembling Genomes: Computer Science Meets Biology",
      speaker: " Chirag Jain, IISc",
      venue: "Auditorium-1"
    },
    {
      time: "11:00 AM - 11:30 AM",
      title: "Break",
      speaker: "",
      venue: "Ground Floor, PJA Block"
    },
    {
      time: "11:30 AM - 12:15 PM",
      title: "Algorithmic Game Theory",
      speaker: "Siddharth Barman, IISc",
      venue: "Auditorium-1"
    },
    {
      time: "12:15 PM - 1:00 PM",
      title: "Ask me Anything Session",
      speaker: "",
      venue: "Auditorium-1"
    },
    {
      time: "1:00 PM",
      title: "Lunch Break",
      speaker: "",
      venue: "MPH Hall, Mess Ground"
    }
  ];

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
