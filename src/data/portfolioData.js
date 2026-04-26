export const personalInfo = {
  name: 'ADHITHYA K',
  firstName: 'ADHITHYA',
  role: 'Backend Developer & Cloud Enthusiast',
  tagline: 'Building Scalable, Cloud-Integrated Solutions',
  email: 'adhicse005@gmail.com',
  phone: '+91 8220848631',
  location: 'India',
  avatar: '/profile.jpeg',
  resumePath: '/files/ADHITHYA.pdf',
};

export const aboutMe = {
  description: `I'm a backend developer passionate about building scalable, cloud-integrated web applications. With expertise in Java, Python, Spring Boot, and AWS, I turn ideas into reliable, efficient solutions.\n\nI've worked on impactful projects in healthcare and travel automation, blending backend logic with AI-driven systems. I'm also experienced in version control, API design, and collaborative development through Git.\n\nCurious, driven, and always learning — I aim to craft clean code, contribute meaningfully to teams, and eventually lead innovative tech initiatives.`,
  highlights: [
    { label: 'Backend Development', icon: '⚡', desc: 'Expert in Java, Python & Spring Boot' },
    { label: 'Cloud Enthusiast', icon: '☁️', desc: 'AWS certified & cloud-native thinking' },
    { label: 'Clean Code', icon: '✨', desc: 'SOLID principles & design patterns' },
    { label: 'API Design', icon: '🔗', desc: 'RESTful APIs & system integration' },
  ],
  stats: [
    { value: '3+', label: 'Internships' },
    { value: '5+', label: 'Projects' },
    { value: '8+', label: 'Certifications' },
    { value: '2+', label: 'Years Learning' },
  ],
};

export const skills = [
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 80, category: 'Languages' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 75, category: 'Languages' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 90, category: 'Languages' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 85, category: 'Languages' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, category: 'Frontend' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90, category: 'Frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85, category: 'Frontend' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 88, category: 'Frameworks' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 85, category: 'Database' },
  { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png', level: 80, category: 'Cloud' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90, category: 'Tools' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 88, category: 'Tools' },
];

export const experience = [
  {
    id: 1,
    title: 'Java Developer Intern',
    company: 'CodSoft',
    type: 'Remote',
    period: 'Apr 2025 – May 2025',
    color: '#4285f4',
    description: 'Gained hands-on experience in Java development, focusing on implementing core OOP concepts. Built console-based and GUI-based applications, strengthening problem-solving and software design skills.',
    technologies: ['Java', 'OOP', 'Swing', 'JDBC'],
    certificate: 'https://github.com/adhiceo01/JAVA-PROGRAMMING',
  },
  {
    id: 2,
    title: 'Salesforce Intern',
    company: 'Inno Valley Works',
    type: 'Coimbatore',
    period: 'Jul 2024 – Aug 2024',
    color: '#1a73e8',
    description: 'Gained hands-on experience in Salesforce CRM, managing leads, contacts, and opportunities. Built automation solutions to improve sales pipeline efficiency and streamline workflows.',
    technologies: ['Salesforce', 'CRM', 'Apex', 'Lightning'],
    certificate: 'https://github.com/adhiceo01/JAVA-PROGRAMMING',
  },
  {
    id: 3,
    title: 'Web Development Intern',
    company: 'Crescent Infotech',
    type: 'Erode',
    period: 'Jun 2024 – Jul 2024',
    color: '#34a853',
    description: 'Developed and optimized real-time web applications with focus on performance and scalability. Contributed to both frontend and backend modules in a collaborative team environment.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'REST APIs'],
    certificate: null,
  },
];

export const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with HTML and CSS, showcasing projects, skills, and achievements with a clean modern design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DEV10ADHI',
    live: '#',
    emoji: '🌐',
    color: '#4285f4',
    category: 'Web',
  },
  {
    id: 2,
    title: 'Smart Health Care Insights',
    description: 'A ML-powered feedback system using sentiment analysis to enhance patient care and optimize hospital operations through data-driven insights.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Sentiment Analysis'],
    github: 'https://github.com/DEV10ADHI',
    live: '#',
    emoji: '🏥',
    color: '#ea4335',
    category: 'ML',
  },
  {
    id: 3,
    title: 'Travel Planner with Chatbot',
    description: 'An AI-powered travel assistant providing intelligent suggestions for destinations, hotels, and emergency contacts using NLP.',
    tech: ['Python', 'AI', 'Chatbot', 'NLP'],
    github: 'https://github.com/adhiceo01/JAVA-PROGRAMMING',
    live: '#',
    emoji: '✈️',
    color: '#1a73e8',
    category: 'AI',
  },
  {
    id: 4,
    title: 'Railway Reservation System',
    description: 'A Java-MySQL-based reservation system with ticket booking, train schedules, cancellations, and secure user authentication.',
    tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
    github: 'https://github.com/adhiceo01/JAVA-PROGRAMMING',
    live: '#',
    emoji: '🚂',
    color: '#fbbc04',
    category: 'Java',
  },
  {
    id: 5,
    title: 'Library Management System',
    description: 'A comprehensive Java-MySQL application for managing library operations — book cataloging, member management, borrowing, returns, and fines.',
    tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
    github: 'https://github.com/adhiceo01/JAVA-PROGRAMMING',
    live: '#',
    emoji: '📚',
    color: '#34a853',
    category: 'Java',
  },
];

export const certifications = [
  { id: 1, name: 'Data Structures & Algorithms', issuer: 'Infosys Springboard', date: '2024', icon: '📊', color: '#4285f4' },
  { id: 2, name: 'Industry 4.0 & IIoT', issuer: 'NPTEL', date: '2024', icon: '🏭', color: '#1a73e8' },
  { id: 3, name: 'Software Testing', issuer: 'NPTEL', date: '2024', icon: '🧪', color: '#34a853' },
  { id: 4, name: 'AWS Cloud Foundations', issuer: 'Amazon Web Services', date: '2024', icon: '☁️', color: '#ea4335' },
  { id: 5, name: 'Full Stack Web Development', issuer: 'Crescent Infotech', date: '2024', icon: '🌐', color: '#fbbc04' },
  { id: 6, name: 'Responsive Web Design', issuer: 'Crescent Infotech', date: '2024', icon: '📱', color: '#4285f4' },
  { id: 7, name: 'Salesforce Trailhead Badges', issuer: 'Salesforce', date: '2024', icon: '⚡', color: '#1a73e8' },
  { id: 8, name: 'Salesforce Bootcamp Certificate', issuer: 'Inno Valley Works', date: '2024', icon: '🎓', color: '#34a853' },
];

export const achievements = [
  {
    id: 1,
    title: 'Proficiency Award',
    description: 'Academic excellence at Kumaraguru College of Technology, Coimbatore (2025–2028)',
    icon: '🏆',
    color: '#fbbc04',
  },
  {
    id: 2,
    title: 'Smart India Hackathon 2023',
    description: 'Internal Selection — Selected as one of the top teams at the college level for national-level hackathon',
    icon: '💡',
    color: '#4285f4',
  },
  {
    id: 3,
    title: 'Internship Excellence',
    description: 'Successfully completed CodSoft Java Developer Internship with outstanding performance',
    icon: '📜',
    color: '#34a853',
  },
];

export const socialLinks = {
  github: 'https://github.com/DEV10ADHI',
  leetcode: 'https://leetcode.com/u/adhiml005/',
  linkedin: 'https://www.linkedin.com/in/adhithya-k-390780292/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/adhics1gg1',
  email: 'mailto:adhicse005@gmail.com',
  phone: 'tel:+918220848631',
};
