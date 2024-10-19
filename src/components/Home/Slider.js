'use client'; // Menandakan bahwa ini adalah Client Component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee'; // Import Marquee

const Slider = ({ blogs }) => {
  return (
    <div className="overflow-hidden relative w-full mt-1 mb-8">
      {/* Menggunakan Marquee untuk membuat efek running text */}
      <Marquee
        speed={50} // Kecepatan marquee, Anda bisa sesuaikan
        gradient={false} // Menghilangkan gradasi di tepi slider
        pauseOnHover={true} // Pause saat hover
      >
        {blogs.map((blog, index) => (
          <Link
            href={blog.url}
            key={index}
            className="flex-shrink-0 w-80 h-28 flex flex-col justify-center gap-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow p-2 mx-2 hover:shadow-lg transition-shadow duration-300"
          >
            {' '}
            {/* Menjadikan seluruh card dapat diklik */}
            <div className="flex gap-2">
              <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-500">
                <Image
                  src={blog.image.filePath.replace('../public', '')}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-neutral-700 dark:text-neutral-200 italic text-sm line-clamp-3">
                  {blog.title}
                </span>
                <p className="line-clamp-2 text-neutral-600 dark:text-neutral-400 text-xs">
                  {blog.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
