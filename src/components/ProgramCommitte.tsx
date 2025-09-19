import React from "react";

type Member = {
  name: string;
  role: string;     // designation
  chapter: string;  // department / chapter / college
};

type Committee = {
  title: string;
  members: Member[];
};

const committees: Committee[] = [
  {
    title: "Program Committee",
    members: [
      { name: "Venkatesh Raman", role: "Professor", chapter: "IMSc" },
      { name: "Sudip Misra", role: "Professor", chapter: "IIT Kharagpur" },
      { name: "Jayanth Harista", role: "Professor", chapter: "IISc Bangalore" },
    ],
  },
  {
    title: "Organizing Committee",
    members: [
      { name: "Dr. Gowrishankar", role: "Dean (Academics)", chapter: "BMSCE" },
      {
        name: "Dr. M Dakshayini",
        role: "Professor and Head",
        chapter: "Department of Machine Learning, BMSCE",
      },
      {
        name: "Dr. Seemanthini K",
        role: "Associate Professor",
        chapter: "AIML, BMSCE",
      },
    ],
  },
  {
    title: "Chief Coordinators",
    members: [
      {
        name: "Dhruva G Shankar",
        role: "Treasurer",
        chapter: "BMSCE ACM Student Chapter",
      },
      {
        name: "Indraneel Mulpuru",
        role: "Vice Chair",
        chapter: "BMSCE ACM Student Chapter",
      },
    ],
  },
  {
    title: "Student Coordinators",
    members: [
      {
        name: "H S Adwi",
        role: "Chair",
        chapter: "BMSCE ACM Student Chapter",
      },
      {
        name: "B Roshini",
        role: "Secretary",
        chapter: "BMSCE ACM Student Chapter",
      },
      {
        name: "Hrithik M",
        role: "Technical Head and Web Master",
        chapter: "BMSCE ACM Student Chapter",
      },
      {
        name: "Kanishka Sharma",
        role: "Membership Chair",
        chapter: "BMSCE ACM Student Chapter",
      },
      {
        name: "Srikanth M A",
        role: "Senior Coordinator",
        chapter: "BMSCE ACM Student Chapter",
      },
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
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                    <br />
                    {member.chapter}
                  </p>
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
