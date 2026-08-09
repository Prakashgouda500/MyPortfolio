import {
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  git,
  postgresql,
  docker,
} from '../assets';

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: javascript },
      { name: 'Python', icon: javascript },
      { name: 'JavaScript', icon: javascript },
    ],
  },
  {
    title: 'Web & Frontend',
    skills: [
      { name: 'React.js', icon: reactjs },
      { name: 'HTML5 / CSS3', icon: html },
      { name: 'UI/UX Design', icon: css },
      { name: 'Responsive Web Design', icon: tailwind },
      { name: 'Wireframing (Figma)', icon: tailwind },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: nodejs },
      { name: 'Express.js', icon: nodejs },
      { name: 'SQL', icon: postgresql },
      { name: 'MongoDB', icon: postgresql },
      { name: 'Database Optimization', icon: postgresql },
    ],
  },
  {
    title: 'Concepts & Methodologies',
    skills: [
      { name: 'OOP & Data Structures', icon: docker },
      { name: 'SDLC & Debugging', icon: docker },
    ],
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: git },
    ],
  },
  {
    title: 'AI & Emerging Tech',
    skills: [
      { name: 'Generative AI', icon: reactjs },
      { name: 'AI API Integration', icon: reactjs },
      { name: 'Prompt Engineering', icon: reactjs },
    ],
  },
];
