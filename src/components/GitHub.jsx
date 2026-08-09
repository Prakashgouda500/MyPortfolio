import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const GitHub = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Optional GitHub API integration that fails gracefully
    fetch('https://api.github.com/users/Prakashgouda500')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setProfile({
          avatarUrl: data.avatar_url,
          publicRepos: data.public_repos,
          followers: data.followers,
          bio: data.bio,
        });
      })
      .catch((err) => {
        console.log('GitHub API fell back to static data:', err);
        // Fallback static profile info
        setProfile({
          avatarUrl: null,
          publicRepos: '10+',
          followers: '5+',
          bio: 'Full Stack Developer | Building projects in JavaScript, Python, C# & AI API Integrations.',
        });
      });
  }, []);

  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Repositories</p>
        <h2 className={styles.sectionHeadText}>Explore My Code.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-zinc-400 text-[16px] md:text-[18px] max-w-3xl leading-[28px] font-poppins"
        >
          I open-source my projects and learning repositories to contribute to the developer community and track my progression as a software engineer.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.2, 0.75)}
        className="mt-10 p-[1px] rounded-3xl bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-800 hover:border-accentCyan/30 transition-all duration-300 w-full max-w-3xl mx-auto shadow-xl"
      >
        <div className="bg-zinc-950 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
            {/* Avatar */}
            {profile?.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt="Prakash Gouda GitHub Avatar"
                className="w-24 h-24 rounded-full border-2 border-accentCyan/50 shadow-glow"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accentCyan text-3xl font-black font-mova">
                PG
              </div>
            )}

            <div>
              <h3 className="text-white text-[22px] font-bold font-poppins">Prakashgouda500</h3>
              <p className="text-zinc-400 text-[14px] mt-1 max-w-md font-poppins leading-relaxed">
                {profile?.bio || 'Full Stack Developer and AI Enthusiast.'}
              </p>
              
              {/* Profile statistics */}
              <div className="flex gap-6 mt-4 justify-center md:justify-start">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg font-mova">
                    {profile?.publicRepos}
                  </span>
                  <span className="text-zinc-500 text-xs uppercase font-semibold">
                    Repositories
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg font-mova">
                    {profile?.followers}
                  </span>
                  <span className="text-zinc-500 text-xs uppercase font-semibold">
                    Followers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://github.com/Prakashgouda500"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-accentCyan/60 hover:bg-zinc-800 text-white font-bold font-poppins text-sm px-6 py-3 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg flex-shrink-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            VISIT GITHUB
          </a>

        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(GitHub, 'github');
