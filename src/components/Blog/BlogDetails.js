// import { format, parseISO } from 'date-fns';
// import Link from 'next/link';
// import React from 'react';
// import { slug } from 'github-slugger';
// import ViewCounter from './ViewCounter';

// const BlogDetails = ({ blog, slug: blogSlug }) => {
//   return (
//     <div className="px-2 md:px-10 bg-dark dark:bg-white text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
//       <time className="m-3">
//         {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
//       </time>
//       <span className="m-3">
//         <ViewCounter slug={blogSlug} />
//       </span>
//       <div className="m-3">{blog.readingTime.text}</div>
//       <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
//         #{blog.tags[0]}
//       </Link>
//     </div>
//   );
// };

// export default BlogDetails;


import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { slug } from 'github-slugger';
import ViewCounter from './ViewCounter';
import { FiCalendar, FiEye, FiClock } from 'react-icons/fi';

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="bg-dark dark:bg-white text-light dark:text-dark py-1 px-1 md:px-0 flex items-center justify-between flex-nowrap gap-2 md:gap-4 text-sm font-medium mx-0 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">

      <div className="flex items-center whitespace-nowrap">
        <FiCalendar className="mr-1 text-xs md:text-sm shrink-0" />
        <span className="text-[10px] md:text-sm">
          {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
        </span>
      </div>

      <div className="flex items-center whitespace-nowrap">
        <FiEye className="mr-1 text-xs md:text-sm shrink-0" />
        <span className="text-[10px] md:text-sm">
          <ViewCounter slug={blogSlug} />
        </span>
      </div>

      <div className="flex items-center whitespace-nowrap">
        <FiClock className="mr-1 text-xs md:text-sm shrink-0" />
        <span className="text-[10px] md:text-sm">
          {blog.readingTime.text}
        </span>
      </div>

      <span className="text-[10px] md:text-sm whitespace-nowrap shrink-0">
        <Link href={`/categories/${slug(blog.tags[0])}`}>
          #{blog.tags[0]}
        </Link>
      </span>

    </div>
  );
};

export default BlogDetails;
