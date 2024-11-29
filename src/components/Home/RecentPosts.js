import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import React from 'react';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full  mt-8 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between px-0 sm:px-0 md:px-0">
  {/* Judul */}
  <h2 className="w-fit font-bold capitalize text-2xl sm:text-xl md:text-4xl text-dark dark:text-light">
    Featured Posts
  </h2>
  {/* Tombol */}
  <Link
    href="/categories/all"
    className="relative inline-block w-28 sm:w-32 md:w-40 h-auto cursor-pointer bg-transparent p-0 text-xs sm:text-sm font-medium text-accent dark:text-accentDark outline-none border-0 group"
  >
    {/* Lingkaran */}
    <span className="circle relative block w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-accent dark:bg-accentDark rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
      {/* Panah */}
      <span className="icon-arrow absolute w-[0.6rem] sm:w-[0.8rem] h-[0.1rem] sm:h-[0.25rem] left-1.5 sm:left-2.5 top-0 bottom-0 m-auto bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-2 sm:group-hover:translate-x-3 md:w-[0.9rem] md:group-hover:translate-x-4">
        <span className="absolute top-[-0.2rem] right-[0.0625rem] w-2 h-2 sm:w-2.5 sm:h-2.5 border-t-[2px] border-r-[2px] border-dark dark:border-light rotate-45"></span>
      </span>
    </span>
    {/* Teks Tombol */}
    <span className="button-text absolute inset-0 ml-2.5 py-[0.25rem] sm:py-[0.4rem] text-accent dark:text-accentDark font-bold leading-[1.4] text-center transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-dark dark:group-hover:text-light md:ml-[1rem] md:py-[0.65rem]">
      View All
    </span>
  </Link>
</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 mt-8">
        {sortedBlogs.slice(7, 13).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
