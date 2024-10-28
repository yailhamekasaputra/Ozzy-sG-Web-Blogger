// import React, { useState } from 'react';

// function SearchBar() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [iconPosition, setIconPosition] = useState('center');

//   const toggleSearch = () => {
//     setIsExpanded((prevExpanded) => !prevExpanded);
//     setIconPosition((prevPosition) =>
//       prevPosition === 'center' ? 'right' : 'center'
//     );
//   };

//   return (
//     <div className="relative">
//       {/* Circular Button */}
//       <button
//         type="button"
//         className={`w-10 h-12 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light transition-all duration-300 ${
//           isExpanded ? 'w-64' : ''
//         } focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark`}
//         onClick={toggleSearch}
//       >
//         {/* Search Icon */}
//         {!isExpanded && (
//           <svg
//             viewBox="0 0 512 512"
//             height="1em"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`fill-dark light:filter dark:invert absolute right-0 mr-4 transform transition-transform duration-300 ${
//               isExpanded ? 'translate-x-0' : 'translate-x-full'
//             }`}
//             style={{ right: iconPosition === 'center' ? '33%' : 'auto' }}
//           >
//             <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
//           </svg>
//         )}
//         {/* Oval Input Search */}
//         <input
//           className={`absolute inset-center z-10 bg-transparent pl-10 pr-0 flex items-center justify-${iconPosition} w-full group-hover:px-3 text-dark dark:text-light font-sans rounded-full transition-all duration-300 ${
//             isExpanded ? 'w-64' : 'w-10'
//           } focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark`}
//           placeholder="Search"
//           type="text"
//         />
//       </button>
//     </div>
//   );
// }

// export default SearchBar;
import React, { useState } from 'react';
import { allBlogs } from 'contentlayer/generated'; // Pastikan ini sesuai dengan lokasi data blog Anda

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [iconPosition, setIconPosition] = useState('center');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleSearch = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
    setIconPosition((prevPosition) =>
      prevPosition === 'center' ? 'right' : 'center'
    );
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const results = allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (slug) => {
    // Arahkan ke halaman blog yang dipilih (misalnya menggunakan router)
    window.location.href = `/blog/${slug}`; // Ganti dengan route yang sesuai
  };

  return (
    <div className="relative">
      {/* Circular Button */}
      <button
        type="button"
        className={`w-10 h-12 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light transition-all duration-300 ${
          isExpanded ? 'w-64' : ''
        } focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark`}
        onClick={toggleSearch}
      >
        {/* Search Icon */}
        {!isExpanded && (
          <svg
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-dark light:filter dark:invert absolute right-0 mr-4 transform transition-transform duration-300 ${
              isExpanded ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ right: iconPosition === 'center' ? '33%' : 'auto' }}
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
        )}
        {/* Oval Input Search */}
        <input
          className={`absolute inset-center z-10 bg-transparent pl-10 pr-0 flex items-center justify-${iconPosition} w-full group-hover:px-3 text-dark dark:text-light font-sans rounded-full transition-all duration-300 ${
            isExpanded ? 'w-64' : 'w-10'
          } focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark`}
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </button>

      {/* Render Hasil Pencarian */}
      {isExpanded && searchResults.length > 0 && (
        <div className="absolute z-20 bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-lg w-full">
          {searchResults.map((result) => (
            <div
              key={result._raw.flattenedPath}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => handleResultClick(result.slug)} // Mengarahkan ke artikel yang dipilih
            >
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
