import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { backend, frontend, prototyping, ux } from '../assets';

const HighlightCard = ({ index, title, description, icon }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.25, 0.75)}
      className="w-full sm:w-[250px] card-gradient p-[1px] rounded-[20px] shadow-card hover:border-accentCyan/50 transition-all duration-300"
    >
      <div className="bg-zinc-900 rounded-[20px] py-6 px-6 min-h-[280px] flex justify-between items-center flex-col text-center">
        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center p-3">
          <img src={icon} alt={title} className="w-full h-full object-contain filter invert" />
        </div>
        <div className="flex-1 flex flex-col justify-center mt-4">
          <h3 className="text-white text-[18px] font-bold tracking-wide uppercase font-poppins">
            {title}
          </h3>
          <p className="text-zinc-400 text-xs mt-2 leading-relaxed font-poppins">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const highlights = [
    {
      title: 'Full Stack Dev',
      description: 'Building responsive frontends and secure, robust RESTful backend architectures.',
      icon: frontend,
    },
    {
      title: 'AI Enthusiast',
      description: 'Exploring LLM APIs, intelligent systems, prompt engineering, and smart automation.',
      icon: backend,
    },
    {
      title: 'Problem Solver',
      description: 'Creating scalable database schema designs and handling complex app logic.',
      icon: prototyping,
    },
    {
      title: 'Agile Learner',
      description: 'Continuously adopting modern frameworks, API practices, and developer tools.',
      icon: ux,
    },
  ];

  const stats = [
    { value: '4+', label: 'Projects Built' },
    { value: '15+', label: 'Technologies Learned' },
    { value: '3+', label: 'Certifications' },
    { value: '24/7', label: 'Learning & Dev' },
  ];

  return (
    <div className="-mt-[2rem]">
      {/* Headings */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Biography */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-4">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="flex-1 text-zinc-300 text-[16px] md:text-[18px] leading-[30px]"
        >
          <p>
            I'm a motivated Full Stack Developer with a strong curiosity for Artificial Intelligence and modern web development architectures. I love transforming creative concepts into clean, accessible, and high-performance applications that offer a stellar user experience.
          </p>
          <p className="mt-4">
            With experience spanning across frontend (React, Tailwind) and backend technologies (Node.js, Express, C# .NET, databases like MySQL and MongoDB), I enjoy designing complete software pipelines. My focus is on writing structured code, exploring API capabilities, and integrating automation systems that optimize user and developer workflows alike.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 0.75)}
          className="w-full lg:w-1/3 grid grid-cols-2 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-center items-center text-center shadow-lg"
            >
              <span className="text-[28px] md:text-[34px] font-black text-accentCyan font-mova">
                {stat.value}
              </span>
              <span className="text-[12px] md:text-[14px] text-zinc-400 font-medium font-poppins mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Highlights Grid */}
      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {highlights.map((highlight, index) => (
          <HighlightCard key={highlight.title} index={index} {...highlight} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
