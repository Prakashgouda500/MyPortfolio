import React from 'react';
import { navLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-10 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* PG Monogram Logo & Copyright */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-br from-accentCyan to-accentIndigo text-white font-bold text-sm tracking-wider font-mova">
              PG
            </div>
            <span className="text-white font-bold text-[16px] tracking-wide font-poppins">
              Prakash Gouda
            </span>
          </div>
          <p className="text-zinc-500 text-xs mt-2 font-poppins">
            &copy; {new Date().getFullYear()} Prakash Gouda. All rights reserved.
          </p>
        </div>

        {/* Short Navigation links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-semibold">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {nav.title}
            </a>
          ))}
        </div>

        {/* Attribution and Tech Details */}
        <div className="text-zinc-500 text-[11px] max-w-[280px] font-poppins md:text-right">
          <p>
            Designed & Developed by Prakash Gouda. Built with React, Three.js & Tailwind.
          </p>
          <p className="mt-1">
            Inspired by the open-source{' '}
            <a
              href="https://github.com/shaqdeff/Portfolio-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accentCyan underline"
            >
              Shaqdeff Template
            </a>{' '}
            (MIT License).
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
