import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../data/projects';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  category,
  description,
  image,
  repo,
  demo,
  tags,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.2] flex-[10]' : 'lg:flex-[0.6] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[460px] cursor-pointer transition-all duration-500 rounded-[24px] overflow-hidden group`}
      onClick={() => handleClick(id)}
    >
      {/* Background tint overlay */}
      <div
        className={`absolute inset-0 z-10 transition-all duration-300 ${
          active === id
            ? 'bg-zinc-950/80'
            : 'bg-zinc-950/60 group-hover:bg-zinc-950/40'
        }`}
      />

      {/* Project Image */}
      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover"
      />

      {active !== id ? (
        // Closed Card State: Vertical Text Title
        <div className="absolute z-20 flex items-center justify-center w-full h-full">
          <h3 className="font-bold uppercase whitespace-nowrap text-[18px] md:text-[22px] text-zinc-400 tracking-[3px] lg:rotate-[-90deg] transition-all group-hover:text-white font-beckman">
            {name}
          </h3>
        </div>
      ) : (
        // Active Expanded Card State
        <div className="absolute bottom-0 p-6 md:p-8 justify-end w-full flex-col z-20 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent">
          
          {/* GitHub Source Button (Top Right of active card overlay) */}
          <div className="absolute top-4 right-4 z-30">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(repo, '_blank');
              }}
              className="bg-zinc-900 border border-zinc-700 hover:border-accentCyan/50 w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 active:scale-95 transition-all text-white"
              title="View GitHub Repository"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          </div>

          <span className="text-[12px] uppercase font-bold tracking-widest text-accentCyan bg-accentCyan/10 px-2.5 py-1 rounded-md border border-accentCyan/20 w-fit mb-2 block">
            {category}
          </span>

          <h2 className="font-extrabold text-[22px] md:text-[28px] text-white uppercase font-beckman tracking-wide mb-2">
            {name}
          </h2>

          <p className="text-zinc-300 text-[14px] leading-relaxed max-w-xl mb-4 font-poppins">
            {description}
          </p>

          {/* Project tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[11px] font-semibold text-zinc-400 border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 rounded-full"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Live Demo Button (Conditional) */}
          {demo && demo !== 'https://YOUR_RUBIE_TRENDS_LIVE_URL' && demo !== 'https://YOUR_AI_CLIPPING_LIVE_URL' && (
            <button
              className="flex justify-center items-center text-[13px] md:text-[14px] text-white font-bold font-poppins tracking-wider py-2.5 px-5 rounded-lg bg-gradient-to-r from-accentCyan to-accentIndigo hover:opacity-90 transition-all gap-2 w-fit"
              onClick={(e) => {
                e.stopPropagation();
                window.open(demo, '_blank');
              }}
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              LIVE DEMO
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-zinc-400 text-[16px] md:text-[18px] max-w-3xl leading-[28px]"
        >
          The following projects showcase my full stack developer journey, incorporating modern interfaces, API routing, database schema design, and AI integration capabilities. Each card expands to provide detail alongside direct links to the source repository.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full mx-auto flex flex-col mt-10"
      >
        <div className="flex lg:flex-row flex-col min-h-[500px] gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
