import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { StarsCanvas } from './canvas';
import { fadeIn, textVariant } from '../utils/motion';

const AIAreaCard = ({ index, title, desc }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
      className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col hover:border-accentCyan/30 transition-all duration-300"
    >
      <h3 className="text-white font-bold text-[16px] tracking-wide font-poppins">
        {title}
      </h3>
      <p className="text-zinc-400 text-xs mt-2 leading-relaxed font-poppins">
        {desc}
      </p>
    </motion.div>
  );
};

const AISection = () => {
  const areas = [
    {
      title: 'AI-Powered Web Applications',
      desc: 'Building modern interfaces that connect seamlessly with backend intelligence and LLM response streams.',
    },
    {
      title: 'Generative AI Integration',
      desc: 'Integrating cognitive API layers to summarize content, execute custom logic, or assist users interactively.',
    },
    {
      title: 'AI APIs & SDKs',
      desc: 'Working with APIs (like Gemini, OpenAI) to process inputs, analyze data structure, and retrieve structured JSON.',
    },
    {
      title: 'Intelligent Automation',
      desc: 'Using prompt engineering and model pipelines to automate repetitive tasks and optimize software workflows.',
    },
  ];

  return (
    <div className="-mt-[2rem] relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left column: Text Content */}
        <div className="flex-1 flex flex-col text-left">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Emerging Frontiers</p>
            <h2 className={styles.sectionHeadText}>Building with AI.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-zinc-400 text-[16px] md:text-[18px] max-w-xl leading-[28px] font-poppins"
          >
            I’m exploring how Artificial Intelligence can be integrated into everyday software to automate workflows, improve user experiences, and solve practical problems. My work focuses on building the software bridges that make AI capabilities accessible.
          </motion.p>

          {/* Area Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {areas.map((area, idx) => (
              <AIAreaCard key={idx} index={idx} title={area.title} desc={area.desc} />
            ))}
          </div>
        </div>

        {/* Right column: 3D Particles visual representing neural connections */}
        <div className="flex-1 w-full min-h-[300px] md:min-h-[400px] relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/40">
          {/* Embedding 3D Particle Cloud Background */}
          <StarsCanvas />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-zinc-950/10 pointer-events-none text-center">
            <div className="p-4 rounded-full bg-accentIndigo/10 border border-accentIndigo/30 backdrop-blur-sm mb-4">
              <svg className="w-8 h-8 text-accentCyan animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.982-11.725h-5.26L14.07 3 5.018 14.725h5.26z" />
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold uppercase tracking-wider font-mova">
              Neural Connectivity
            </h3>
            <p className="text-zinc-500 text-xs mt-1 max-w-[250px] font-poppins">
              Click & drag to orbit the neural data space. Represents generative connections in software.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(AISection, 'ai');
