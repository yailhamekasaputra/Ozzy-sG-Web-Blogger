// 1
// 'use client'; // Menandakan bahwa ini adalah Client Component

// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Slider = ({ blogs }) => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const slider = sliderRef.current;
//       if (slider) {
//         const firstChild = slider.firstElementChild;
//         slider.appendChild(firstChild);
//       }
//     }, 3000); // Mengatur interval pergeseran setiap 3 detik

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="overflow-hidden relative w-full mt-1 mb-8">
//       <div
//         ref={sliderRef}
//         className="flex transition-transform duration-700 ease-in-out" // Perubahan durasi transisi
//         style={{ width: `${blogs.length * 100}%` }} // Mengatur lebar slider sesuai jumlah blog
//       >
//         {blogs.map((blog, index) => (
//           <Link
//             href={blog.url}
//             key={index}
//             className="flex-shrink-0 w-80 h-28 flex flex-col justify-center gap-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow p-2 mx-2 hover:shadow-lg transition-shadow duration-300"
//           >
//             {' '}
//             {/* Menjadikan seluruh card dapat diklik */}
//             <div className="flex gap-2">
//               <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-500">
//                 <Image
//                   src={blog.image.filePath.replace('../public', '')}
//                   alt={blog.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-neutral-700 dark:text-neutral-200 italic text-sm line-clamp-3">
//                   {blog.title}
//                 </span>
//                 <p className="line-clamp-2 text-neutral-600 dark:text-neutral-400 text-xs">
//                   {blog.description}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// 2
// 'use client'; // Menandakan bahwa ini adalah Client Component

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Marquee from 'react-fast-marquee'; // Import Marquee

// const Slider = ({ blogs }) => {
//   return (
//     <div className="overflow-hidden relative w-full mt-1 mb-8">
//       {/* Menggunakan Marquee untuk membuat efek running text */}
//       <Marquee
//         speed={50} // Kecepatan marquee, Anda bisa sesuaikan
//         gradient={false} // Menghilangkan gradasi di tepi slider
//         pauseOnHover={true} // Pause saat hover
//       >
//         {blogs.map((blog, index) => (
//           <Link
//             href={blog.url}
//             key={index}
//             className="flex-shrink-0 w-80 h-28 flex flex-col justify-center gap-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow p-2 mx-2 hover:shadow-lg transition-shadow duration-300"
//           >
//             <div className="flex gap-2">
//               <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-500">
//                 <Image
//                   src={blog.image.filePath.replace('../public', '')}
//                   alt={blog.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-neutral-700 dark:text-neutral-200 italic text-sm line-clamp-3">
//                   {blog.title}
//                 </span>
//                 <p className="line-clamp-2 text-neutral-600 dark:text-neutral-400 text-xs">
//                   {blog.description}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default Slider;

// 3
// 'use client'; // Menandakan bahwa ini adalah Client Component

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Marquee from 'react-fast-marquee'; // Import Marquee

// const Slider = ({ blogs }) => {
//   return (
//     <div className="relative w-full mt-1 mb-8">
//       {/* Menggunakan Marquee untuk membuat efek running text */}
//       <Marquee
//         speed={50} // Kecepatan marquee
//         gradient={false} // Menghilangkan gradasi di tepi slider
//         pauseOnHover={true} // Pause saat hover
//         style={{ overflowX: 'auto', cursor: 'grab' }} // Menambahkan scroll manual
//       >
//         {blogs.map((blog, index) => (
//           <Link
//             href={blog.url}
//             key={index}
//             className="flex-shrink-0 w-80 h-28 flex flex-col justify-center gap-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow p-2 mx-6 hover:shadow-lg transition-shadow duration-300"
//             style={{ scrollSnapAlign: 'start' }} // Scroll behavior seperti snap
//           >
//             <div className="flex gap-2">
//               <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-500">
//                 <Image
//                   src={blog.image.filePath.replace('../public', '')}
//                   alt={blog.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-neutral-700 dark:text-neutral-200 italic text-sm line-clamp-3">
//                   {blog.title}
//                 </span>
//                 <p className="line-clamp-2 text-neutral-600 dark:text-neutral-400 text-xs">
//                   {blog.description}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default Slider;

// 4
// 'use client'; // Menandakan bahwa ini adalah Client Component

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Slider from 'react-slick'; // Import Slider dari react-slick

// const BlogSlider = ({ blogs }) => {
//   // Setting untuk Slick
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="overflow-hidden relative w-full mt-1 mb-8">
//       <Slider {...settings}>
//         {blogs.map((blog, index) => (
//           <Link
//             href={blog.url}
//             key={index}
//             className="flex-shrink-0 w-80 h-28 flex flex-col justify-center gap-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow p-2 mx-2 hover:shadow-lg transition-shadow duration-300"
//           >
//             <div className="flex gap-2">
//               <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-500">
//                 <Image
//                   src={blog.image.filePath.replace('../public', '')}
//                   alt={blog.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-neutral-700 dark:text-neutral-200 italic text-sm line-clamp-3">
//                   {blog.title}
//                 </span>
//                 <p className="line-clamp-2 text-neutral-600 dark:text-neutral-400 text-xs">
//                   {blog.description}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BlogSlider;

// fix
'use client'; // Menandakan bahwa ini adalah Client Component

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee'; // Import Marquee

const Slider = ({ blogs }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full mt-1 mb-8">
      {/* Slider wrapper */}
      <div
        ref={sliderRef}
        className="overflow-x-auto"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Menggunakan Marquee untuk membuat efek running text */}
        <Marquee
          speed={50} // Kecepatan marquee
          gradient={false} // Menghilangkan gradasi di tepi slider
          pauseOnHover={true} // Pause saat hover
        >
          {blogs.map((blog, index) => (
            <Link
              href={blog.url}
              key={index}
              className="flex-shrink-0 w-80 h-28 flex flex-col justify-center gap-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow p-2 mx-2 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-2">
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-500">
                  {/* <Image
                    src={blog.image.filePath.replace('../public', '')}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  /> */}
                  <Image
                    src={blog.image.filePath.replace('../public', '')}
                    alt={blog.title}
                    fill
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    loading="eager" // Menambahkan ini
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="group flex flex-col">
                    <h2 className="font-bold text-dark-700 dark:text-neutral-200  text-sm line-clamp-3">
                      <span
                        className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
        group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
                      >
                        {blog.title}
                      </span>
                    </h2>
                  </div>

                  <p className="line-clamp-2 text-neutral-600 dark:text-neutral-400 text-xs">
                    {blog.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
