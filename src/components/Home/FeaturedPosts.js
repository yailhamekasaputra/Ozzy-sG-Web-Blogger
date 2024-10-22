import { sortBlogs } from '@/src/utils';
import React from 'react';
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-8 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Recent Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 ">
        {/* Artikel pertama yang akan mengambil dua baris */}
        <article className="col-span-1 sm:col-span-2 md:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>

        {/* Artikel kedua yang lebih kecil */}
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>

        {/* Artikel ketiga yang lebih kecil */}
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[4]} />
        </article>

        <article className="col-span-1 sm:col-span-2 md:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[2]} />
        </article>

        {/* Artikel kedua yang lebih kecil */}
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[5]} />
        </article>

        {/* Artikel ketiga yang lebih kecil */}
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[6]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
