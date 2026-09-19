export type Member = {
  name: string;
  role: string;
  group: string;
  bio: string;
  initials: string;
};

export const team: Member[] = [
  {
    name: "Nikhil Srinivas",
    role: "Founder & Lead",
    group: "Leadership",
    initials: "NS",
    bio: "Yoga educator, PhD researcher in Integrative Medicine (Yoga), yoga therapist and Carnatic Veena artist.",
  },
  {
    name: "Yoga Faculty",
    role: "Senior Yoga Teacher",
    group: "Yoga Faculty",
    initials: "YF",
    bio: "Leads regular and advanced batches with a focus on classical Hatha practice and safe alignment.",
  },
  {
    name: "Yoga Therapy Faculty",
    role: "Yoga Therapist",
    group: "Yoga Faculty",
    initials: "YT",
    bio: "Designs condition-specific practice plans and supports individual consultations.",
  },
  {
    name: "Music Faculty",
    role: "Carnatic Veena & Vocal",
    group: "Music Faculty",
    initials: "MF",
    bio: "Teaches Veena and Carnatic vocal foundations, and leads raga-based relaxation sessions.",
  },
  {
    name: "Advisor — Integrative Medicine",
    role: "Advisor / Mentor",
    group: "Advisors & Mentors",
    initials: "AM",
    bio: "Guides the research program and institutional collaborations.",
  },
  {
    name: "Advisor — Bharatiya Shāstras",
    role: "Advisor / Mentor",
    group: "Advisors & Mentors",
    initials: "AS",
    bio: "Anchors the knowledge hub in classical sources and traditions.",
  },
  {
    name: "Youth Team",
    role: "Volunteers",
    group: "Volunteers & Youth Team",
    initials: "YV",
    bio: "Students and young professionals who support camps, events and community outreach.",
  },
];

export const testimonials = [
  {
    quote:
      "The pranayama course gave me a simple morning practice I have actually kept up. The teaching was patient and precise.",
    name: "R. Menon",
    program: "Pranayama Foundations",
    year: 2026,
  },
  {
    quote:
      "I joined Veena classes at forty with no musical background. Six months later I can play a full varnam and my evenings feel calmer.",
    name: "S. Iyer",
    program: "Carnatic Veena",
    year: 2026,
  },
  {
    quote:
      "Our students loved the wellness week. The blend of yoga and music kept even the restless ones engaged.",
    name: "Principal, partner school",
    program: "School Wellness Week",
    year: 2026,
  },
  {
    quote:
      "The back care workshop helped me understand my posture and gave me a routine that I use at my desk every day.",
    name: "A. Kumar",
    program: "Yoga for Back Care",
    year: 2026,
  },
];
