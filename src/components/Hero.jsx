import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { NetworkCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-center items-center overflow-hidden bg-primary pt-24 pb-12">
      {/* Decorative background grid and lighting glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accentIndigo/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accentCyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-10 relative z-10`}>
        {/* Left Text / Info Panel */}
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-accentCyan/30 bg-accentCyan/5 text-accentCyan text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accentCyan animate-pulse" />
            Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${styles.heroHeadText} font-poppins`}
          >
            Hi, I'm <span className="bg-gradient-to-r from-accentCyan to-accentIndigo bg-clip-text text-transparent">Prakash Gouda</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 font-semibold md:text-[28px] sm:text-[24px] text-[18px] mt-2"
          >
            Full Stack Developer | AI Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-zinc-300 text-[16px] md:text-[18px] max-w-xl leading-relaxed"
          >
            I'm a passionate Full Stack Developer with a strong interest in Artificial Intelligence and modern web technologies. I enjoy transforming ideas into scalable, responsive, and intelligent applications that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-accentCyan to-accentIndigo text-white font-semibold shadow-glow hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
            >
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              download="Prakash_Gouda_Resume.pdf"
              className="px-6 py-3 rounded-lg border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-white font-semibold hover:border-zinc-500 hover:scale-105 active:scale-95 transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-6 mt-8 items-center text-zinc-400"
          >
            <a
              href="https://github.com/Prakashgouda500"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accentCyan transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/prakash-gouda-227347217" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accentCyan transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:prakashgouda500@gmail.com"
              className="hover:text-accentCyan transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right 3D Visual Panel */}
        <div className="flex-1 w-full flex items-center justify-center relative min-h-[300px] md:min-h-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-full"
          >
            <NetworkCanvas />
          </motion.div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-zinc-700 flex justify-center items-start p-1.5">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 rounded-full bg-accentCyan"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
