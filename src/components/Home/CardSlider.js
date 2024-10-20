'use client';

import { format, parseISO } from 'date-fns';
import React, { useRef } from 'react';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

const CardSlider = ({ blogs }) => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    const slider = sliderRef.current;
    if (slider) {
      const firstChild = slider.firstElementChild;
      slider.appendChild(firstChild);
    }
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    if (slider) {
      const lastChild = slider.lastElementChild;
      slider.insertBefore(lastChild, slider.firstChild);
    }
  };

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center ">
      <div className="overflow-hidden relative w-full mt-1 mb-8 ">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePrev}
            className="bg-gray-500   dark:text-white p-2 rounded-md"
          >
            &#10094; {/* Icon panah kiri */}
          </button>
          <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light text-center">
            Popular Posts
          </h2>
          <button
            onClick={handleNext}
            className="bg-gray-500 dark:text-white p-2 rounded-md"
          >
            &#10095; {/* Icon panah kanan */}
          </button>
        </div>
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {blogs.map((blog, index) => (
            <Link
              href={blog.url}
              key={index}
              className="flex-shrink-0 w-64 mx-2" // Atur jarak antar card
            >
              <article className="border border-gray-900 dark:border-white rounded-lg shadow-lg transition hover:shadow-sm">
                <div className="rounded-lg p-4 text-center bg-light dark:bg-dark ">
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white line-clamp-3">
                    {blog.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-center">
                    <FiCalendar className="mr-1 text-gray-900 dark:text-white" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">
                      #{blog.tags[0]}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
