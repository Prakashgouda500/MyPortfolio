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
      title: 'Full-Stack Software Dev',
      description: 'Hands-on experience in Java, Python, JavaScript, React.js, Node.js, and Express.js.',
      icon: frontend,
    },
    {
      title: 'UI/UX & Web Design',
      description: 'Solid grounding in HTML5, CSS3, Figma wireframing, and responsive web design principles.',
      icon: backend,
    },
    {
      title: 'Databases & SDLC',
      description: 'Fundamentals across SQL and MongoDB, OOP, data structures, and SDLC debugging.',
      icon: prototyping,
    },
    {
      title: 'AI & Continuous Dev',
      description: 'Eager to build intelligent software solutions and continuously grow technical expertise.',
      icon: ux,
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'GFGC Kuvempu University, Sagara, Karnataka, India',
      duration: 'Aug 2023 – Jun 2026',
      detail: 'Computer Science • CGPA: 8.28',
    },
    {
      degree: 'Pre-University Course (PUC)',
      institution: 'SMGPUC, Sirsi, Karnataka, India',
      duration: 'Mar 2021 – Mar 2023',
      detail: 'Percentage: 76.77% • Coursework: Java, Python, OOP, Data Structures, DBMS (SQL), Web Development',
    },
  ];

  return (
    <div className="-mt-[2rem]">
      {/* Headings */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-4">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="flex-1 text-zinc-300 text-[16px] md:text-[18px] leading-[30px] font-poppins"
        >
          <p>
            Junior software developer with hands-on experience in Java and Python programming, and front-end and back-end web development using JavaScript, React.js, Node.js, and Express.js.
          </p>
          <p className="mt-4">
            Solid grounding in HTML, CSS, and database fundamentals across SQL and MongoDB, with skills in version control (Git, GitHub) and UI/UX design principles. Comfortable working across the software development lifecycle (SDLC) from design to implementation, with strong problem-solving skills and a focus on writing clean, maintainable code. Completed a BCA in Computer Science; eager to contribute to a full-stack software development role and grow technical expertise.
          </p>
        </motion.div>

        {/* Education Panel */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 0.75)}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <h3 className="text-white font-bold text-xl font-poppins flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accentCyan" />
            Education
          </h3>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-center shadow-lg"
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h4 className="text-white text-[16px] font-bold font-poppins">{edu.degree}</h4>
                <span className="text-accentCyan text-xs font-semibold">{edu.duration}</span>
              </div>
              <p className="text-zinc-400 text-xs mt-1 font-poppins">{edu.institution}</p>
              <span className="text-zinc-500 text-xs mt-2 font-medium bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800 w-fit">
                {edu.detail}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Capability Highlights Grid */}
      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {highlights.map((highlight, index) => (
          <HighlightCard key={highlight.title} index={index} {...highlight} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
