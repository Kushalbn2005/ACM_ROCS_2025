import React from "react";

type Member = {
  name: string;
  role: string;
};

type Committee = {
  title: string;
  members: Member[];
};

const committees: Committee[] = [
  {
    title: "Program Committee",
    members: [
      { name: "Venkatesh Raman", role: "Professor, IMSc" },
      { name: "Sudip Misra", role: "Professor, IIT Kharagpur" },
      { name: "Jayanth Harista", role: "Professor, IISc Bangalore" },
    ],
  },
  {
    title: "Organizing Committee",
    members: [
      { name: "Dr. Gowrishankar", role: "Dean (Academics), BMSCE" },
      { name: "Dr. Seemanthini K", role: "Associate Professor, AIML, BMSCE" },
      { name: "Dr. M Dakshayini", role: "Professor and Head – Department of Machine Learning" },
    ],
  },
  {
    title: "Student Organizing Committee",
    members: [
      { name: "H S Adwi", role: "Chair, BMSCE ACM Student Chapter" },
      { name: "Indraneel Mulpuru", role: "Vice Chair, BMSCE ACM Student Chapter" },
      { name: "B Roshini", role: "Secretary, BMSCE ACM Student Chapter" },
      { name: "Dhruva G Shankar", role: "Treasurer, BMSCE ACM Student Chapter" },
      { name: "Hrithik M", role: "Technical Head and Web Master, BMSCE ACM Student Chapter" },
      { name: "Kanishka Sharma", role: "Membership Chair, BMSCE ACM Student Chapter" },
      { name: "Srikanth M A", role: "Senior Coordinator, BMSCE ACM Student Chapter" },
    ],
  },
];

const CommitteesSection: React.FC = () => {
  return (
    <section id="committees" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Common main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Committees
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated teams behind the event.
          </p>
        </div>

        {committees.map((committee, idx) => (
          <div key={idx} className="mb-16 last:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              {committee.title}
            </h3>

            {/* ✅ Flexbox card grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {committee.members.map((member, i) => (
                <div
                  key={i}
                  className="flex-1 basis-72 max-w-xs bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-lg font-bold text-foreground mb-2">
                    {member.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommitteesSection;
