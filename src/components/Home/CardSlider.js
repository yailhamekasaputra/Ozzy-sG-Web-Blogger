// 'use client';

// import { format, parseISO } from 'date-fns';
// import React, { useRef } from 'react';
// import Link from 'next/link';
// import { FiCalendar } from 'react-icons/fi';

// const CardSlider = ({ blogs }) => {
//   const sliderRef = useRef(null);

//   const handleNext = () => {
//     const slider = sliderRef.current;
//     if (slider) {
//       const firstChild = slider.firstElementChild;
//       slider.appendChild(firstChild);
//     }
//   };

//   const handlePrev = () => {
//     const slider = sliderRef.current;
//     if (slider) {
//       const lastChild = slider.lastElementChild;
//       slider.insertBefore(lastChild, slider.firstChild);
//     }
//   };

//   return (
//     <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center ">
//       <div className="overflow-hidden relative w-full mt-1 mb-8 ">
//         <div className="flex items-center justify-between mb-4">
//           <button
//             onClick={handlePrev}
//             className="bg-gray-500   dark:text-white p-2 rounded-md"
//           >
//             &#10094; {/* Icon panah kiri */}
//           </button>
//           <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light text-center">
//             Popular Posts
//           </h2>
//           <button
//             onClick={handleNext}
//             className="bg-gray-500 dark:text-white p-2 rounded-md"
//           >
//             &#10095; {/* Icon panah kanan */}
//           </button>
//         </div>
//         <div
//           ref={sliderRef}
//           className="flex transition-transform duration-700 ease-in-out"
//         >
//           {blogs.map((blog, index) => (
//             <Link
//               href={blog.url}
//               key={index}
//               className="flex-shrink-0 w-64 mx-2" // Atur jarak antar card
//             >
//               <article className="border border-gray-900 dark:border-white rounded-lg shadow-lg transition hover:shadow-sm">
//                 <div className="rounded-lg p-4 text-center bg-light dark:bg-dark ">
//                   <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white line-clamp-3">
//                     {blog.title}
//                   </h3>
//                   <div className="mt-2 flex items-center justify-center">
//                     <FiCalendar className="mr-1 text-gray-900 dark:text-white" />
//                     <span className="text-sm text-gray-900 dark:text-white">
//                       {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
//                     </span>
//                   </div>
//                   <div className="mt-2">
//                     <span className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">
//                       #{blog.tags[0]}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardSlider;

// 'use client';

// import { format, parseISO } from 'date-fns';
// import React from 'react';
// import Link from 'next/link';
// import { FiCalendar } from 'react-icons/fi';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CardSlider = ({ blogs }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5, // Show 5 cards on desktop
//     slidesToScroll: 1,
//     arrows: true, // Show arrows for manual scrolling
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet and below
//         settings: {
//           slidesToShow: 3, // Show 3 cards on tablet
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600, // Mobile
//         settings: {
//           slidesToShow: 1, // Show 1 card on mobile
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
//       <div className="relative w-full mt-1 mb-8">
//         <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light text-center mb-4">
//           Popular Posts
//         </h2>
//         <Slider {...settings}>
//           {blogs.map((blog, index) => (
//             <Link href={blog.url} key={index} className="flex-shrink-0">
//               <article className="border border-gray-900 dark:border-white rounded-lg shadow-lg transition hover:shadow-sm mx-2">
//                 <div className="rounded-lg p-4 text-center bg-light dark:bg-dark">
//                   <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white line-clamp-3">
//                     {blog.title}
//                   </h3>
//                   <div className="mt-2 flex items-center justify-center">
//                     <FiCalendar className="mr-1 text-gray-900 dark:text-white" />
//                     <span className="text-sm text-gray-900 dark:text-white">
//                       {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
//                     </span>
//                   </div>
//                   <div className="mt-2">
//                     <span className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">
//                       #{blog.tags[0]}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default CardSlider;

// 'use client';

// import { format, parseISO } from 'date-fns';
// import React from 'react';
// import Link from 'next/link';
// import { FiCalendar } from 'react-icons/fi';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CardSlider = ({ blogs }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5, // Show 5 cards on desktop
//     slidesToScroll: 1,
//     arrows: true, // Show arrows for manual scrolling
//     nextArrow: (
//       <div className="slick-arrow slick-next dark:bg-gray-700 bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-600 rounded-full p-2">
//         <span className="text-white dark:text-black">›</span>
//       </div>
//     ),
//     prevArrow: (
//       <div className="slick-arrow slick-prev dark:bg-gray-700 bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-600 rounded-full p-2">
//         <span className="text-white dark:text-black">‹</span>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet and below
//         settings: {
//           slidesToShow: 3, // Show 3 cards on tablet
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600, // Mobile
//         settings: {
//           slidesToShow: 2, // Show 2 cards on mobile
//           slidesToScroll: 1,
//           arrows: true,
//         },
//       },
//       {
//         breakpoint: 480, // Smaller mobile screens
//         settings: {
//           slidesToShow: 1, // Show 1 card on smaller mobile
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
//       <div className="relative w-full mt-1 mb-8">
//         <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light text-center mb-4">
//           Popular Posts
//         </h2>
//         <Slider {...settings}>
//           {blogs.map((blog, index) => (
//             <Link href={blog.url} key={index} className="flex-shrink-0">
//               <article className="border border-gray-900 dark:border-white rounded-lg shadow-lg transition hover:shadow-sm mx-2">
//                 <div className="rounded-lg p-4 text-center bg-light dark:bg-dark">
//                   <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white line-clamp-3">
//                     {blog.title}
//                   </h3>
//                   <div className="mt-2 flex items-center justify-center">
//                     <FiCalendar className="mr-1 text-gray-900 dark:text-white" />
//                     <span className="text-sm text-gray-900 dark:text-white">
//                       {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
//                     </span>
//                   </div>
//                   <div className="mt-2">
//                     <span className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">
//                       #{blog.tags[0]}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default CardSlider;

'use client';

import { format, parseISO } from 'date-fns';
import React from 'react';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = ({ blogs }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards on desktop
    slidesToScroll: 1,
    arrows: true, // Show arrows for manual scrolling
    nextArrow: (
      <div className="slick-arrow slick-next dark:bg-gray-700 bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-600 rounded-full p-2">
        <span className="text-white dark:text-black">›</span>
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev dark:bg-gray-700 bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-600 rounded-full p-2">
        <span className="text-white dark:text-black">‹</span>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 3, // Show 3 cards on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 2, // Show 2 cards on mobile
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480, // Smaller mobile screens
        settings: {
          slidesToShow: 2, // Show 1 card on smaller mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full mt-8 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="relative w-full mt-0 mb-0">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light text-center mb-8">
          Popular Posts
        </h2>
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <Link href={blog.url} key={index} className="flex-shrink-0">
              <article className="border border-gray-900 dark:border-white rounded-lg shadow-lg transition hover:shadow-sm mx-2">
                <div className="rounded-lg p-4 text-center bg-light dark:bg-dark">
                  <h3 className="mt-2 md:text-lg text-sm font-semibold text-gray-900 dark:text-white line-clamp-3">
                    <span
                      className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
        hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
                    >
                      {blog.title}
                    </span>
                  </h3>
                  <div className="mt-2 flex items-center justify-center">
                    <FiCalendar className="mr-1 text-gray-900 lg:text-xs text-sm dark:text-white" />
                    <span className="text-gray-900 dark:text-white md:text-sm lg:text-xs text-xs">
                      {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="md:text-lg text-sm text-gray-600 dark:text-gray-400 dark:text-white">
                      #{blog.tags[0]}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CardSlider;
