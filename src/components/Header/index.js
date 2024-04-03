'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import SearchBar from './Search';

const Header = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setClick(!click);
    setNavbar(false);
  };

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between bg-light dark:bg-dark fixed top-0 left-0 right-0 z-50  ">
      {/* Logo */}

      <Logo />

      {/* <SearchBar /> */}

      {/* <ThemeSwitcher /> */}

      {/* Hamburger Button */}
      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? 'rotate(-45deg) translateY(0)'
                  : 'rotate(0deg) translateY(6px)',
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? 'rotate(45deg) translateY(0)'
                  : 'rotate(0deg) translateY(-6px)',
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      {/* Navbar */}
      <nav
        className={`absolute top-full left-0 right-0 bg-light dark:bg-dark  z-40 ${
          click ? 'block' : 'hidden' // Change navbar visibility based on click state
        } sm:relative sm:flex sm:items-center sm:justify-center`}
      >
        <ul className="sm:flex bg-light dark:bg-dark">
          <li className="flex items-center justify-center pb-1 px-5">
            <ThemeSwitcher />
          </li>

          <li className="flex items-center justify-center pb-1 px-20">
            <SearchBar /> {/* Sesuaikan class */}
          </li>

          <li className="pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/" onClick={toggleNavbar}>
              Home
            </Link>
          </li>

          <li className="pb-6 text-xl  py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/categories/all" onClick={toggleNavbar}>
              Categories
            </Link>
          </li>
          <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/about" onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li className="pb-6 text-xl  py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/about" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
