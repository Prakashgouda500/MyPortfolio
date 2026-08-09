import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { certifications } from '../data/certifications';
import { fadeIn, textVariant } from '../utils/motion';

const CertificationCard = ({ index, name, organization, date, icon, link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className="p-[1px] rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-800 hover:border-accentCyan/40 hover:shadow-cardLight transition-all duration-300 w-full md:max-w-[350px] flex"
    >
      <div className="bg-zinc-950 p-6 rounded-2xl flex flex-col justify-between w-full relative">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-white text-[16px] font-bold font-poppins leading-snug">
              {name}
            </h3>
            <p className="text-accentCyan text-xs font-semibold mt-1.5 font-poppins">
              {organization}
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center p-2 flex-shrink-0">
            <img src={icon} alt={organization} className="w-full h-full object-contain filter invert opacity-60" />
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-900 flex justify-between items-center">
          <span className="text-zinc-500 text-xs font-medium font-poppins">
            {date}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white hover:text-accentCyan font-bold tracking-wider uppercase transition-colors"
          >
            Verify
            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications & Virtual Experiences.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-zinc-400 text-[16px] md:text-[18px] max-w-3xl leading-[28px]"
        >
          I continuously push myself to learn and keep up with software development and engineering best practices. Here are some of the virtual experiences, credentials, and courses I have completed.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, 'certifications');
