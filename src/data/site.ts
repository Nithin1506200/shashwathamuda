export const site = {
  name: 'Shashwatamuda',
  tagline: 'The Truth of Eternal Joy',
  pillarsLine: 'Yoga • Music • Wisdom • Well-being',
  description:
    'Shashwatamuda is a contemporary platform rooted in the timeless wisdom of Yoga, Indian classical music and Bharatiya traditions — creating meaningful pathways towards holistic well-being, learning and inner harmony.',
  url: 'https://shashwatamuda.com',
  email: 'nikhil.srinivasyoga@gmail.com',
  phone: '+91 89705 35845',
  whatsapp: 'https://wa.me/918970535845',
  location: 'Bengaluru, Karnataka, India',
  founder: 'Nikhil Srinivas',
  social: {
    instagram: 'https://instagram.com/shashwatamuda',
  },
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Programs', href: '/programs' },
  { label: 'Research', href: '/research' },
  { label: 'Community', href: '/community' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Explore',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    heading: 'Offerings',
    items: [
      { label: 'Programs & Services', href: '/programs' },
      { label: 'Research & Knowledge', href: '/research' },
    ],
  },
  {
    heading: 'Connect',
    items: [
      { label: 'Collaborate', href: '/collaborate' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
