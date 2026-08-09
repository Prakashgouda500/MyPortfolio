import {
  komikult,
  space,
  leaderboard,
  math,
} from '../assets';

export const projects = [
  {
    id: 'project-1',
    name: 'Rubie Trends',
    category: 'Full Stack E-Commerce',
    description:
      'An e-commerce platform for electronic gadgets featuring product browsing, authentication, orders, reviews, and a responsive shopping experience.',
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'CSS', color: 'pink-text-gradient' },
      { name: 'JavaScript', color: 'yellow-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'Express.js', color: 'purple-text-gradient' },
      { name: 'MySQL', color: 'orange-text-gradient' },
    ],
    image: komikult,
    repo: 'https://github.com/Prakashgouda500/YOUR_RUBIE_TRENDS_GITHUB_URL',
    demo: 'https://YOUR_RUBIE_TRENDS_LIVE_URL',
  },
  {
    id: 'project-2',
    name: 'AI Video Clipping Tool',
    category: 'AI / Full Stack',
    description:
      'An AI-powered video clipping application designed to transform long-form videos into engaging short-form content for platforms such as YouTube Shorts and Instagram Reels.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'JavaScript', color: 'yellow-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'AI APIs', color: 'purple-text-gradient' },
    ],
    image: space,
    repo: 'https://github.com/Prakashgouda500/YOUR_AI_CLIPPING_GITHUB_URL',
    demo: 'https://YOUR_AI_CLIPPING_LIVE_URL',
  },
  {
    id: 'project-3',
    name: 'CommBank Backend Project',
    category: 'Backend Development',
    description:
      'A backend-focused project developed as part of a software engineering virtual experience, involving REST APIs, database integration, and backend development practices.',
    tags: [
      { name: 'C#', color: 'blue-text-gradient' },
      { name: '.NET', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'purple-text-gradient' },
      { name: 'REST API', color: 'orange-text-gradient' },
    ],
    image: leaderboard,
    repo: 'https://github.com/Prakashgouda500/YOUR_COMMBANK_GITHUB_URL',
    demo: null,
  },
  {
    id: 'project-4',
    name: 'Data Analytics Project',
    category: 'Data / Analytics',
    description:
      'Data analysis project demonstrating data processing, SQL, Excel-based analysis, and visualization techniques.',
    tags: [
      { name: 'Excel', color: 'green-text-gradient' },
      { name: 'SQL', color: 'blue-text-gradient' },
      { name: 'Python', color: 'yellow-text-gradient' },
    ],
    image: math,
    repo: 'https://github.com/Prakashgouda500/YOUR_DATA_PROJECT_GITHUB_URL',
    demo: null,
  },
];
