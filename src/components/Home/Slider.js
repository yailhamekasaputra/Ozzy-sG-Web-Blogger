'use client'; // Menandakan bahwa ini adalah Client Component

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Slider = ({ blogs }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const slider = sliderRef.current;
      if (slider) {
        const firstChild = slider.firstElementChild;
        slider.appendChild(firstChild);
      }
    }, 3000); // Mengatur interval pergeseran setiap 5 detik

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden relative w-full my-8">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out" // Perubahan durasi transisi
        style={{ width: `${blogs.length * 100}%` }} // Mengatur lebar slider sesuai jumlah blog
      >
        {blogs.map((blog, index) => (
          <Link
            href={blog.url}
            key={index}
            className="flex-shrink-0 w-80 h-40 flex flex-col justify-center gap-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow p-2 mx-2 hover:shadow-lg transition-shadow duration-300"
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
                <span className="font-bold text-neutral-700 dark:text-neutral-200 italic text-sm">
                  {blog.title}
                </span>
                <p className="line-clamp-3 text-neutral-600 dark:text-neutral-400 text-xs">
                  {blog.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;
