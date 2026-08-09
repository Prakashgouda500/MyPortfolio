import {
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  git,
  postgresql, // Using postgresql icon for MySQL/SQL general database icon
  docker,
} from '../assets';

export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: html },
      { name: 'CSS3', icon: css },
      { name: 'JavaScript', icon: javascript },
      { name: 'React.js', icon: reactjs },
      { name: 'Tailwind CSS', icon: tailwind },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: nodejs },
      { name: 'Express.js', icon: nodejs }, // Reusing nodejs icon
      { name: 'REST APIs', icon: docker }, // Reusing docker or other generic icon
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: postgresql },
      { name: 'MongoDB', icon: postgresql },
      { name: 'SQLite', icon: postgresql },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: javascript },
      { name: 'Python', icon: javascript }, // Reusing javascript for simplicity
      { name: 'Java', icon: javascript },
      { name: 'C#', icon: javascript },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: git },
      { name: 'VS Code', icon: git },
      { name: 'Postman', icon: git },
    ],
  },
  {
    title: 'AI & Emerging Technologies',
    skills: [
      { name: 'Generative AI', icon: reactjs },
      { name: 'AI API Integration', icon: reactjs },
      { name: 'AI-Powered Applications', icon: reactjs },
      { name: 'Prompt Engineering', icon: reactjs },
    ],
  },
];
