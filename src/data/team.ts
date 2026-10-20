export type Member = {
  name: string;
  role: string;
  group: string;
  bio: string;
  personalStatement?: string;
  education?: string[];
  experience?: string[];
  initials: string;
  image?: string;
};

export const team: Member[] = [
  {
    name: "Nikhil Srinivas",
    role: "Founder & Lead",
    group: "Leadership",
    initials: "NS",
    image: "/image.png",
    bio: "Yoga therapist, educator and researcher with over nine years of teaching experience. Nikhil is pursuing a PhD in Integrative Medicine (Yoga) at SDUAHER, Kolar, researching yoga interventions for COPD. As founder of Shashwatamuda and a Carnatic Veena teacher, he brings together yoga, music and community well-being.",
  },
  {
    name: "Dhruvi Patel",
    role: "Yoga Teacher",
    group: "Yoga Faculty",
    initials: "DP",
    image: "/dhruvi/profie%20pic.jpeg",
    bio: "Dhruvi Patel is a yoga therapist with an MSc in Yoga Therapy from Lakulesh University, Ahmedabad. She has worked with more than 500 clients across diverse age groups, designing personalised yoga programmes for physical pain, stress and lifestyle conditions. Her specialisations include Hatha Yoga, Ashtanga Yoga, prenatal and postnatal yoga, and yoga therapy.",
  },
  {
    name: "Gunjan",
    role: "Yoga Faculty",
    group: "Yoga Faculty",
    initials: "G",
    image: "/gunjan/gunjan.jpeg",
    bio: "",
    personalStatement: "I believe healing begins with feeling heard, understood and accepted without judgment. I bring empathy, patience and genuine care into every interaction, creating a safe space where you can feel comfortable being yourself. My approach to yoga is gentle and personalised, because I believe wellness is not about pushing yourself to change, but learning to understand yourself better. I hope to help you slow down, reconnect with yourself and discover a healthier, more balanced way of living, at your own pace.",
    education: [
      "MSc in Yoga Therapy and Counselling — Karnataka Sanskrit University (pursuing)",
      "BSc in Yoga and Vedic Therapy — S-VYASA University",
    ],
    experience: [
      "DigiVYASA: 1.6 years as a Yoga Course Facilitator.",
      "SHYFT: 3 months as a Community Manager in psychology and self-development.",
    ],
  },
  {
    name: "Venkata Ramya Purgindla",
    role: "Volunteer",
    group: "Volunteers",
    initials: "VR",
    image: "/ramya/ramya.jpeg",
    bio: "Venkata Ramya Purgindla is a software engineer based in the United States and a volunteer at Shashwatamuda. She has started a startup called Arogya Ahaar.",
    personalStatement: "I believe that true well-being begins with nurturing both the body and the mind through mindful living, nourishing food, and a deeper understanding of ourselves. My philosophy is rooted in the belief that feeling supported, practising self-compassion, and making conscious choices about what we eat and how we live can create a meaningful foundation for a healthier, more balanced life.\n\nAs a yoga practitioner and someone passionate about food and nourishment, I value a holistic approach to wellness that honours each individual’s unique needs and experiences. I strive to create a welcoming, judgment-free environment where you feel comfortable exploring your personal journey towards well-being. Through mindful movement, breathwork, and an appreciation for nourishing food, my intention is to help you cultivate greater self-awareness, reconnect with your inner self, and find harmony between mind, body, and spirit—one mindful choice at a time.",
    education: [
      "Bachelor's degree in Electrical and Electronics Engineering (EEE)",
      "Master's degree in Computer Science",
    ],
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
