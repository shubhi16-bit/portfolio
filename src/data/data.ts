// ── TYPES ──────────────────────────────────────────────────
export interface SkillGroup {
  label: string
  tags: string[]
}

export interface Project {
  name: string
  badge: string
  description: string
  stack: string[]
  github?: string
  live?: string
}

export interface Experience {
  date: string
  role: string
  org: string
  points: string[]
}

export interface Education {
  name: string
  detail: string
  year: string
}

export interface ContactItem {
  icon: string
  label: string
  value: string
  href: string
}

// ── DATA ───────────────────────────────────────────────────
export const skills: SkillGroup[] = [
  {
    label: 'Technical Skills',
    tags: ['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'SQL'],
  },
  {
    label: 'Exploring',
    tags: ['TypeScript', 'React', 'DSA','Java'],
  },
  {
    label: 'Tools',
    tags: ['Git/GitHub'],
  },
  {
    label: 'Soft Skills',
    tags: ['Communication', 'Teamwork', 'Problem Solving', 'Marketing'],
  },
  {
    label: 'Languages Spoken',
    tags: ['English', 'Hindi'],
  },
]

export const projects: Project[] = [
  {
    name: 'Online Hotel Reservation System',
    badge: 'Class XII CBSE Project',
    description:
      'A full-featured hotel management system integrating a Python front-end with a MySQL backend. ' +
      'Designed the complete database schema with five tables — Room, Customer, RoomType, Booking, and Billing. ' +
      'Implemented full CRUD functionality across all customer and room type records.',
    stack: ['Python', 'MySQL'],
    
  },
  {
    name: 'Tetris Game',
    badge: 'Web Dev',
    description:
      'A browser-based Tetris clone built from scratch. Implemented the grid structure, collision detection, ' +
      'block rotation mechanics, score-keeping, and game-over logic. Strengthened algorithmic ' +
      'thinking and real-time programming skills.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Typescript'],
    github: 'https://github.com/shubhi16-bit/Tetris',
    live: 'https://tetris-seven-taupe.vercel.app/',
  },
  {
    name: 'Emoji Dumb Charades Game',
    badge: 'ACM Event',
    description:
      'An interactive emoji-based guessing game built for an ACM event. Implemented random emoji ' +
      'generation and guessing flow logic. Designed an intuitive UI for team play, keeping the ' +
      'experience fun and accessible for all participants.',
    stack: [ 'HTML', 'CSS','JavaScript','React'],
    github: '',
    live: '',
  },
]

export const experience: Experience[] = [
  {
    date: 'April 2026 — Present',
    role: 'Junior Committee Member',
    org: 'MUJ ACM Student Chapter — Project & Research Committee',
    points: [
      'Active participant in technical events, workshops, and collaborative projects',
      'Contributed to web development activities and technical initiatives',
      'Built teamwork, communication, and problem-solving skills through club work',
    ],
  },
  {
    date: 'August 2025',
    role: 'Volunteer',
    org: 'MUJ IASTE EKATVA',
    points: [
      'Pitched the event to students, communicating its value to boost attendance',
      'Provided logistical support — handled setup and preparation tasks',
      'Demonstrated reliability and cooperative teamwork in a live event environment',
    ],
  },
]

export const education: Education[] = [
  {
    name: 'Manipal University of Jaipur',
    detail: 'B.Tech — Computer Science Engineering · SGPA Sem I: 7.84',
    year: 'Expected 2029',
  },
  {
    name: 'MM Public School, Rohini',
    detail: 'Class XII — CBSE · 86.6%',
    year: 'March 2025',
  },
  {
    name: 'Delhi Public School Dehradun',
    detail: 'Class X — CBSE · 87%',
    year: 'March 2023',
  },
]

export const contact: ContactItem[] = [
  {
    icon: '✉',
    label: 'Email',
    value: 'shubhi1604.agrawal@gmail.com',
    href: 'mailto:shubhi1604.agrawal@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 93183 92779',
    href: 'tel:+919318392779',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'Shubhi Agrawal',
    href: 'https://www.linkedin.com/in/shubhi-ag', 
  },
  {
    icon: '</>',
    label: 'GitHub',
    value: 'github.com/shubhi16-bit',                   
    href: 'https://github.com/shubhi16-bit',      
  },
]
