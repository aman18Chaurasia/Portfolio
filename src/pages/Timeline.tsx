
import React from "react";
import {
  Calendar,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Atom,
  Brain,
  Code2,
  BookOpen,
  Crown,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

// Extra floating/parallax icons component
const FloatingIcons = () => (
  <div className="pointer-events-none select-none absolute inset-0 overflow-visible z-0">
    <Atom className="absolute left-16 top-10 text-cyan-500 opacity-50 animate-float delay-1000 w-8 h-8" />
    <Brain className="absolute right-24 top-1/2 text-purple-400 opacity-40 animate-float-slow w-10 h-10" />
    <Code2 className="absolute left-4 bottom-20 text-pink-400 opacity-50 animate-float-fast w-8 h-8" />
    <BookOpen className="absolute right-12 bottom-10 text-green-400 opacity-40 animate-float w-7 h-7" />
    <Crown className="absolute left-1/2 top-36 text-yellow-300 opacity-30 animate-float w-8 h-8" />
  </div>
);

const TIMELINE = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    type: "work",
    description:
      "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.",
    location: "San Francisco, CA",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Best Developer Award",
    company: "Developer Conference 2023",
    type: "award",
    description:
      "Recognized for outstanding contribution to open-source projects and innovative solutions.",
    location: "New York, NY",
    icon: Award,
  },
  {
    year: "2022",
    title: "Frontend Team Lead",
    company: "Digital Solutions Co.",
    type: "work",
    description:
      "Managed a team of 8 developers, implemented design systems, and improved performance by 40%.",
    location: "Remote",
    icon: Briefcase,
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    type: "work",
    description:
      "Built scalable web applications from scratch, integrated payment systems, and implemented CI/CD.",
    location: "Austin, TX",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Certified React Developer",
    company: "Meta",
    type: "education",
    description:
      "Completed advanced React certification program with focus on modern patterns and best practices.",
    location: "Online",
    icon: GraduationCap,
  },
  {
    year: "2019",
    title: "Frontend Developer",
    company: "WebDev Agency",
    type: "work",
    description:
      "Developed responsive websites and web applications for various clients using modern frameworks.",
    location: "Los Angeles, CA",
    icon: Briefcase,
  },
  {
    year: "2018",
    title: "Computer Science Degree",
    company: "University of Technology",
    type: "education",
    description:
      "Bachelor of Science in Computer Science with focus on software engineering and web technologies.",
    location: "Boston, MA",
    icon: GraduationCap,
  },
];

type TimelineType = "work" | "education" | "award";

const typeMap: Record<TimelineType, { color: string; label: string; icon: React.ElementType }> = {
  work: { color: "bg-blue-700 text-blue-200", label: "Work", icon: Briefcase },
  award: { color: "bg-yellow-600 text-yellow-100", label: "Award", icon: Award },
  education: { color: "bg-green-700 text-green-100", label: "Education", icon: GraduationCap },
};

const Timeline = () => {
  // Highlight the most recent event (index 0)
  return (
    <Layout>
      <section className="py-24 px-2 md:px-8 mt-16 relative min-h-screen bg-transparent">
        <FloatingIcons />
        <div className="max-w-4xl mx-auto relative">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-lg tracking-tight z-10">
            Evolution Timeline
          </h1>

          <div className="relative">
            {/* Decorative vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-400/80 to-pink-500 rounded-full z-0" />
            <ol className="space-y-16 relative z-10">
              {TIMELINE.map((event, i) => {
                const { color, label, icon: TypeIcon } = typeMap[event.type as TimelineType] || typeMap.work;

                // Determine highlight class for the most recent event
                const highlight =
                  i === 0
                    ? "ring-4 ring-cyan-400/60 scale-105 shadow-2xl border-cyan-500/40 backdrop-blur-2xl"
                    : "";

                return (
                  <li className="flex items-start relative" key={event.title + event.year}>
                    {/* Step icon with glowing circle */}
                    <span className="relative z-20 flex flex-col items-center">
                      <span
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-white shadow-xl transition-all duration-300 ${color} ${highlight} animate-float`}
                      >
                        <event.icon className="w-8 h-8" />
                      </span>
                      {/* Dot/line connector except for the last item */}
                      {i < TIMELINE.length - 1 && (
                        <span className="w-1 h-16 bg-gradient-to-b from-white/60 via-cyan-300/50 to-purple-500/40 rounded-full"></span>
                      )}
                    </span>
                    {/* Card content */}
                    <Card className={`ml-6 flex-1 bg-black/80 border-cyan-800/10 transition-all duration-300 hover:scale-[1.015] hover:border-cyan-300/20 shadow-xl ${highlight}`}>
                      <CardHeader className="flex flex-row items-center justify-between pb-0">
                        <div>
                          <CardTitle className="text-white text-2xl mb-0 flex items-center gap-2">
                            {event.title}
                            <Badge className={`ml-2 px-2 rounded-full text-xs font-bold border-none ${color}`}>{label}</Badge>
                          </CardTitle>
                          <div className="text-base font-medium text-cyan-100">
                            {event.company}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <div className="flex items-center gap-2 text-gray-200 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{event.year}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2 text-gray-300 text-lg">
                        {event.description}
                      </CardContent>
                    </Card>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        {/* Ambient blurred glows */}
        <div className="fixed top-0 left-0 w-[360px] h-[240px] bg-gradient-to-br from-purple-900/40 to-cyan-800/20 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="fixed right-0 bottom-0 w-[220px] h-[200px] bg-gradient-to-tr from-pink-500/30 to-cyan-400/20 rounded-full blur-2xl z-0 pointer-events-none" />
      </section>
    </Layout>
  );
};

export default Timeline;
