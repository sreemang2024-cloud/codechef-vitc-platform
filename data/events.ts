export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "Workshop" | "Hackathon" | "Social" | "Seminar";
  description: string;
  spotsTotal: number;
  spotsFilled: number;
}

export const events: Event[] = [
  {
    id: "evt-001",
    title: "React Performance Masterclass",
    date: "2026-06-15",
    time: "14:00 - 16:00",
    location: "AB-3 Kamaraj Auditorium",
    category: "Workshop",
    description: "Deep dive into useMemo, useCallback, and optimizing React renders for enterprise applications.",
    spotsTotal: 40,
    spotsFilled: 32,
  },
  {
    id: "evt-002",
    title: "Android VITC Hackathon 2026",
    date: "2026-06-22",
    time: "09:00 - 09:00 (48h)",
    location: "MG Auditorium",
    category: "Hackathon",
    description: "Build an AI-powered accessibility tool in 48 hours. Prizes worth Rs.50,000 up for grabs.",
    spotsTotal: 150,
    spotsFilled: 145,
  },
  {
    id: "evt-003",
    title: "UI/UX Design Systems Crash Course",
    date: "2026-06-28",
    time: "17:00 - 19:00",
    location: "Online",
    category: "Seminar",
    description: "Learn how to build scalable design systems from scratch using Figma and Tailwind CSS.",
    spotsTotal: 60,
    spotsFilled: 20,
  }
];