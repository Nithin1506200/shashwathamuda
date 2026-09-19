export type Program = { title: string; blurb: string; format: string };
export type ProgramGroup = {
  key: string;
  title: string;
  intro: string;
  href: string;
  items: Program[];
};

export const programGroups: ProgramGroup[] = [
  {
    key: "yoga",
    title: "Yoga",
    href: "/yoga",
    intro:
      "Body • Breath • Mind. Traditional practice made accessible and safe for every stage of life.",
    items: [
      {
        title: "Regular Yoga Programs",
        blurb:
          "Morning and evening batches covering asana, pranayama and relaxation.",
        format: "Monthly batches · Centre & online",
      },
      {
        title: "Advanced Yoga",
        blurb:
          "Deeper asana work, kriyas, bandhas and extended pranayama for experienced practitioners.",
        format: "Small groups",
      },
      {
        title: "Therapeutic Yoga",
        blurb:
          "Condition-specific practice for back care, stress, sleep, metabolic and lifestyle concerns.",
        format: "Small groups · 1:1",
      },
      {
        title: "Pranayama & Meditation",
        blurb:
          "Structured breath work and meditation courses from foundations to sustained practice.",
        format: "6–8 week courses",
      },
      {
        title: "Individual Yoga Sessions",
        blurb:
          "Personalised sessions built around your goals, schedule and health history.",
        format: "1:1 · By appointment",
      },
      {
        title: "Yoga Camps",
        blurb:
          "Residential and day camps for schools, colleges, communities and institutions.",
        format: "On request",
      },
    ],
  },
  {
    key: "music",
    title: "Music",
    href: "/music",
    intro:
      "Nāda • Rāga • Harmony. Carnatic music as art, discipline and a doorway to stillness.",
    items: [
      {
        title: "Carnatic Veena Classes",
        blurb:
          "From first lessons to concert repertoire on the Saraswati Veena.",
        format: "Weekly · Centre",
      },
      {
        title: "Carnatic Music Programs",
        blurb:
          "Vocal foundations, theory and appreciation of the Carnatic tradition.",
        format: "Weekly · Centre & online",
      },
      {
        title: "Raga-based Relaxation",
        blurb:
          "Guided listening and breathing sessions built around specific ragas.",
        format: "Sessions & workshops",
      },
      {
        title: "Music & Wellness Workshops",
        blurb:
          "Nāda yoga, sound and rhythm for groups, institutions and retreats.",
        format: "Half-day · Full-day",
      },
    ],
  },
  {
    key: "workshops",
    title: "Workshops & Training",
    href: "/programs#workshops",
    intro:
      "Learning experiences for individuals, educators, institutions and young people.",
    items: [
      {
        title: "Yoga Workshops",
        blurb:
          "Themed intensives on backbends, breath, sleep, stress and more.",
        format: "Weekend",
      },
      {
        title: "Yoga Instructor Development",
        blurb: "Foundational and continuing education for yoga teachers.",
        format: "Multi-week",
      },
      {
        title: "Personality Development Programs",
        blurb: "Confidence, focus and communication through yoga and music.",
        format: "Schools & colleges",
      },
      {
        title: "Children & Youth Programs",
        blurb: "Playful, structured yoga and music for ages 6 to 18.",
        format: "Term-wise",
      },
      {
        title: "Corporate / Institutional Wellness",
        blurb: "Programs for workplaces, hospitals and universities.",
        format: "Custom",
      },
      {
        title: "Special Workshops",
        blurb: "Guest faculty, retreats and International Yoga Day programs.",
        format: "Seasonal",
      },
    ],
  },
];

export const pillars = [
  {
    key: "yoga",
    title: "Yoga",
    sanskrit: "योग",
    line: "Body • Breath • Mind",
    items: [
      "Traditional Yoga",
      "Yoga Therapy",
      "Advanced Practice",
      "Pranayama",
      "Meditation",
      "Wellness",
    ],
    href: "/yoga",
  },
  {
    key: "music",
    title: "Music",
    sanskrit: "संगीत",
    line: "Nāda • Rāga • Harmony",
    items: [
      "Carnatic Music",
      "Veena",
      "Nāda",
      "Raga-based Relaxation",
      "Music & Well-being",
    ],
    href: "/music",
  },
  {
    key: "jnana",
    title: "Bharatiya Jñāna",
    sanskrit: "ज्ञान",
    line: "Knowledge • Tradition • Wisdom",
    items: [
      "Indian Knowledge Systems",
      "Yogic Literature",
      "Philosophy",
      "Classical Traditions",
      "Shāstras",
    ],
    href: "/research#knowledge",
  },
  {
    key: "research",
    title: "Research & Well-being",
    sanskrit: "अनुसंधान",
    line: "Evidence • Innovation • Integration",
    items: [
      "Evidence-informed Yoga",
      "Integrative Health",
      "Yoga Therapy Research",
      "Workshops",
      "Health Education",
    ],
    href: "/research",
  },
  {
    key: "seva",
    title: "Youth & Community",
    sanskrit: "सेवा",
    line: "Youth • Community • Social Well-being",
    items: [
      "Youth Development",
      "Community Outreach",
      "Schools",
      "Wellness Programs",
      "Cultural Activities",
      "Leadership",
    ],
    href: "/community",
  },
];
