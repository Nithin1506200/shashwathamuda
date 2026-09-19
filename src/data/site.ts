export const site = {
  name: 'Shashwatamuda',
  tagline: 'The Truth of Eternal Joy',
  pillarsLine: 'Yoga • Music • Wisdom • Well-being',
  description:
    'Shashwatamuda is a contemporary platform rooted in the timeless wisdom of Yoga, Indian classical music and Bharatiya traditions — creating meaningful pathways towards holistic well-being, learning and inner harmony.',
  url: 'https://shashwatamuda.org',
  email: 'hello@shashwatamuda.org',
  phone: '+91 00000 00000',
  location: 'Bengaluru, Karnataka, India',
  founder: 'Nikhil Srinivas',
  social: {
    instagram: 'https://instagram.com/shashwatamuda',
    facebook: 'https://facebook.com/shashwatamuda',
    youtube: 'https://youtube.com/@shashwatamuda',
  },
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Yoga', href: '/yoga' },
  { label: 'Music', href: '/music' },
  { label: 'Programs', href: '/programs' },
  { label: 'Research', href: '/research' },
  { label: 'Community', href: '/community' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Explore',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Founder', href: '/founder' },
      { label: 'Our Team', href: '/team' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
  },
  {
    heading: 'Offerings',
    items: [
      { label: 'Yoga', href: '/yoga' },
      { label: 'Music', href: '/music' },
      { label: 'Programs & Services', href: '/programs' },
      { label: 'Wellness', href: '/wellness' },
      { label: 'Research & Knowledge', href: '/research' },
    ],
  },
  {
    heading: 'Connect',
    items: [
      { label: 'Events', href: '/events' },
      { label: 'Community & Impact', href: '/community' },
      { label: 'Collaborate', href: '/collaborate' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
