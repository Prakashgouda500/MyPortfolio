import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? 'glassmorphism border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto font-poppins">
        {/* PG Custom SVG Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-accentCyan to-accentIndigo shadow-glow">
            <span className="text-white font-bold text-lg tracking-wider font-mova">PG</span>
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Prakash Gouda &nbsp;
            <span className="sm:block hidden text-accentCyan">| Dev & AI</span>
          </p>
        </Link>

        {/* Desktop nav links */}
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-accentCyan' : 'text-zinc-400'
              } hover:text-white text-[15px] font-semibold tracking-wider cursor-pointer transition-colors duration-200 uppercase`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer filter invert brightness-200"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile dropdown */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-8 bg-zinc-950/95 border-l border-zinc-800 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl glassmorphism flex-col gap-4 shadow-2xl animate-fade-in`}
          >
            <ul className="list-none flex flex-col gap-4 items-start">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-accentCyan' : 'text-zinc-300'
                  } text-[16px] font-medium tracking-wide uppercase cursor-pointer hover:text-white transition-colors`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
