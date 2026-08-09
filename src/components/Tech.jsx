import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { skillCategories } from '../data/skills';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].title);

  return (
    <>
      <motion.div variants={textVariant()} className="text-center md:text-left">
        <p className={styles.sectionSubTextLight}>What I work with</p>
        <h2 className={styles.sectionHeadTextLight}>Skills & Technologies.</h2>
      </motion.div>

      {/* Category Selection Pills */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 mb-10">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 border ${
              activeCategory === category.title
                ? 'bg-gradient-to-r from-accentCyan to-accentIndigo border-transparent text-white shadow-glow'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Category Skills Grid */}
      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center"
      >
        {skillCategories
          .find((cat) => cat.title === activeCategory)
          ?.skills.map((skill, index) => (
            <motion.div
              variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl glassmorphism hover:border-accentCyan/30 hover:shadow-cardLight transition-all duration-300 group"
            >
              {/* 3D Ball Canvas / Fallback Icon Container */}
              <div className="w-20 h-20 mb-3 flex items-center justify-center">
                <BallCanvas icon={skill.icon} name={skill.name} />
              </div>
              <span className="text-zinc-300 group-hover:text-white text-[14px] font-semibold text-center mt-2 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');
