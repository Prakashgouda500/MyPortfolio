import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../data/experience';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#18181b', // Dark zinc-900 card
      color: '#f4f4f5',
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid #18181b',
    }}
    date={
      <span className="text-zinc-400 text-[16px] font-semibold font-poppins">
        {experience.date}
      </span>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain filter invert"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[20px] font-bold font-poppins tracking-[1px]">
        {experience.title}
      </h3>
      <p
        className="text-accentCyan text-[15px] font-semibold font-poppins"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-zinc-300 text-[14px] pl-1 tracking-wider leading-relaxed font-poppins"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center md:text-left`}>
          My professional journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          
          {/* Resume Download timeline node */}
          <VerticalTimelineElement
            contentStyle={{
              background: '#18181b',
              color: '#f4f4f5',
              boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.3)',
              border: '1px dashed rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #18181b',
            }}
            iconStyle={{ background: '#27272a' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain filter invert"
                />
              </div>
            }
          >
            <h4 className="text-white text-[16px] font-semibold font-poppins mb-2 text-center">
              Want to see my full history?
            </h4>
            <a
              href="/resume.pdf"
              download="Prakash_Gouda_Resume.pdf"
              className="flex justify-between items-center bg-gradient-to-r from-accentCyan to-accentIndigo text-white font-bold font-poppins text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-all gap-3 hover:scale-105 active:scale-95 shadow-glow"
            >
              MY RESUME
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
