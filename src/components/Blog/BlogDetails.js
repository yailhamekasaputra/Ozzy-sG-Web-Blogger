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
import { FiCalendar, FiEye, FiClock } from 'react-icons/fi'; // Import icons from react-icons library

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className=" md:px-0 bg-dark dark:bg-white text-light dark:text-dark py-1 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-0 md:mx-0 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
      <div className="m-1 flex items-center">
        <FiCalendar className="mr-1 text-sm" /> {/* Calendar icon */}
        <span className="text-xs md:text-sm">
          {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
        </span>
      </div>
      <div className="m-1 flex items-center">
        <FiEye className="mr-1 text-sm" /> {/* Eye icon */}
        <span className="text-xs md:text-sm ">
          <ViewCounter slug={blogSlug} />
        </span>
      </div>
      <div className="m-1 flex items-center">
        <FiClock className="mr-1 text-sm" /> {/* Clock icon */}
        <span className="text-xs md:text-sm">{blog.readingTime.text}</span>
      </div>
      <span className="m-1 text-xs md:text-sm">
        <Link href={`/categories/${slug(blog.tags[0])}`} passHref>
          #{blog.tags[0]}
        </Link>
      </span>
    </div>
  );
};

export default BlogDetails;
