import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
// import Image from 'next/image';
// import profileImg from '@/public/profile-img.png';

function Footer() {
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-light m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16  font-bold  text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Hello World!
      </h3>
      <div className="bg-gray-50 h-auto md:h-1/2 w-full flex md:flex-row flex-col justify-center items-center p-8 md:p-20">
        <div className="p-5 flex items-center">
          <div class="flex items-center p-3 w-72 h-28   rounded-md shadow-lg bg-light dark:bg-dark">
            <section class="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <svg viewBox="0 0 15 15" class="w-7 fill-gray-700">
                <path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"></path>
              </svg>
            </section>

            <section class="block border-l border-black-300 m-3 text-dark dark:text-light selection:">
              <div class="pl-3">
                <h3 class="text-gray-600 font-semibold text-sm text-dark dark:text-light">
                  yailhameka
                </h3>
                <h3 class="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#0707e6] text-lg font-bold">
                  Web Developer
                </h3>
              </div>
              <div class="flex gap-3 pt-2 pl-3 ">
                <FaGithub className="w-4 h-4 hover:scale-125 duration-200 hover:cursor-pointer fill-current text-dark dark:text-light stroke-2" />
                <FaInstagram className="w-4 h-4 hover:scale-125 duration-200 hover:cursor-pointer fill-current text-dark dark:text-light stroke-2" />
                <FaLinkedin className="w-4 h-4 hover:scale-125 duration-200 hover:cursor-pointer fill-current text-dark dark:text-light stroke-2" />
                <FaTwitter className="w-4 h-4 hover:scale-125 duration-200 hover:cursor-pointer fill-current text-dark dark:text-light stroke-2" />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container w-full mx-auto px-10 flex flex-wrap gap-9">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Welcome to my blog!</h3>
          <p className="text-sm">
            Here, you will discover insightful perspectives on fascinating
            topics such as movies, technology, music, art, and more. Let's enjoy
            this colorful journey together!
          </p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Categorie</h3>
          <ul className="flex flex-wrap">
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Movie
              </a>
            </li>
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Web Development
              </a>
            </li>
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Tech
              </a>
            </li>
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                JavaScript
              </a>
            </li>
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Music
              </a>
            </li>
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Culture
              </a>
            </li>
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                JavaScript
              </a>
            </li>
            <li className="w-1/2 mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Music
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Categories
              </a>
            </li>

            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Terms Of Use</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Privacy-Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className="text-gray-800 font-semibold  items-center text-light dark:text-dark">
          {/* &copy; {new Date().getFullYear()} Ozzy'sG Blog. All rights reserved */}
          &copy; {new Date().getFullYear()} Ozzy'sG Blog. All rights reserved
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
