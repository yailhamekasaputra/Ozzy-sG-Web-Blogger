import { format, parseISO } from 'date-fns';
import React from 'react';
import Link from 'next/link';

const BlogList = ({ blogs }) => {
  return (
    <section className="w-full mt-4  px-5 sm:px-10 md:px-0 sxl:px-32 flex flex-col items-center justify-center ">
      <div className="  bg-neutral-50 dark:bg-neutral-800  mx-0 hover:shadow-lg transition-shadow dark:bg-gray-800 rounded-lg p-5 shadow-md ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.slice(7, 11).map((blog, index) => (
            <Link href={blog.url} key={index} className="w-full">
              <article className=" rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-light dark:bg-dark">
                <h3 className="md:text-lg text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  <span
                    className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
        hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
                  >
                    {blog.title}
                  </span>
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-dark dark:text-light">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="md:text-sm text-xs  text-dark dark:text-light"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {/* <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-dark dark:text-light">
                  <span>
                    {format(parseISO(blog.publishedAt), 'MMMM d, yyyy')}
                  </span>
                </div> */}
                {/* <div className="text-sm text-gray-700 dark:text-gray-300 text-dark dark:text-light">
                  By <span className="font-semibold">{blog.author}</span>
                </div> */}
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
