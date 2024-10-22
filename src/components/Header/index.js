// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import Logo from './Logo';
// import ThemeSwitcher from './ThemeSwitcher';
// import SearchBar from './Search';

// const Header = () => {
//   const [click, setClick] = useState(false);

//   const toggle = () => {
//     setClick(!click);
//   };

//   return (
//     <header className="w-full p-4 px-6 sm:px-10 flex items-center justify-between bg-light dark:bg-dark fixed top-0 left-0 right-0 z-50">
//       {/* Hamburger Button for Mobile (aligned to left on mobile) */}
//       <button
//         className="inline-block sm:hidden z-50 absolute left-3"
//         onClick={toggle}
//         aria-label="Hamburger Menu"
//       >
//         <div className="w-6 cursor-pointer transition-all ease duration-300">
//           <div className="relative">
//             <span
//               className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//               style={{
//                 transform: click
//                   ? 'rotate(-45deg) translateY(0)'
//                   : 'rotate(0deg) translateY(6px)',
//               }}
//             >
//               &nbsp;
//             </span>
//             <span
//               className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//               style={{
//                 opacity: click ? 0 : 1,
//               }}
//             >
//               &nbsp;
//             </span>
//             <span
//               className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//               style={{
//                 transform: click
//                   ? 'rotate(45deg) translateY(0)'
//                   : 'rotate(0deg) translateY(-6px)',
//               }}
//             >
//               &nbsp;
//             </span>
//           </div>
//         </div>
//       </button>

//       {/* Logo (centered on mobile, remains left on larger screens) */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0">
//         <Logo />
//       </div>

//       {/* Theme Switcher (aligned to right on mobile) */}
//       <div className="ml-auto sm:ml-0">
//         <ThemeSwitcher />
//       </div>

//       {/* Navbar */}
//       <nav
//         className={`absolute top-full left-0 right-0 bg-light dark:bg-dark z-40 ${
//           click ? 'block' : 'hidden' // Change navbar visibility based on click state
//         } sm:relative sm:flex sm:items-center sm:justify-center`}
//       >
//         <ul className="sm:flex bg-light dark:bg-dark">
//           <li className="flex items-center justify-center pb-5 pt-5 md:pt-0 md:pb-0 px-20">
//             <SearchBar /> {/* Sesuaikan class */}
//           </li>

//           <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
//             <Link href="/" onClick={toggle}>
//               Home
//             </Link>
//           </li>

//           <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
//             <Link href="/categories/all" onClick={toggle}>
//               Categories
//             </Link>
//           </li>
//           <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
//             <Link href="/about" onClick={toggle}>
//               About
//             </Link>
//           </li>
//           <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
//             <Link href="/contact" onClick={toggle}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import SearchBar from './Search';

const Header = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-6 sm:px-10 flex items-center justify-between bg-light dark:bg-dark fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Hamburger Button for Mobile */}
      <button
        className="inline-block sm:hidden z-50 absolute left-3"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className={`absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200 ${
                click ? 'rotate-[-45deg] translate-y-0' : 'translate-y-1.5'
              }`}
            />
            <span
              className={`absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200 ${
                click ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200 ${
                click ? 'rotate-[45deg] translate-y-0' : '-translate-y-1.5'
              }`}
            />
          </div>
        </div>
      </button>

      {/* Logo (centered on mobile) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0">
        <Logo />
      </div>

      {/* Theme Switcher */}
      <div className="ml-auto sm:ml-0">
        <ThemeSwitcher />
      </div>

      {/* Navbar */}
      {/* <nav
        className={`absolute top-full left-0 right-0 bg-light dark:bg-dark z-40 transition-all duration-300 ${
          click ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } sm:relative sm:max-h-none sm:flex sm:items-center sm:justify-center overflow-hidden`}
      > */}
      <nav
        className={`absolute top-full left-0 right-0 bg-light dark:bg-dark z-40 ${
          click ? 'block' : 'hidden' // Change navbar visibility based on click state
        } sm:relative sm:flex sm:items-center sm:justify-center`}
      >
        <ul className="sm:flex bg-light dark:bg-dark">
          <li className="flex items-center justify-center pb-5 pt-5 md:pt-0 md:pb-0 px-20">
            <SearchBar /> {/* Sesuaikan class */}
          </li>

          <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/" onClick={toggle}>
              Home
            </Link>
          </li>
          <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/categories/all" onClick={toggle}>
              Categories
            </Link>
          </li>
          <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/about" onClick={toggle}>
              About
            </Link>
          </li>
          <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent dark:text-white">
            <Link href="/contact" onClick={toggle}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
