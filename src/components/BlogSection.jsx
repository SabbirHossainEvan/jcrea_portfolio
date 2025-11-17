import React from 'react';

const blogPosts = [
  {
    id: 1,
    category: 'UI/UX Design',
    author: 'Jayesh Patil',
    date: '10 Nov, 2023',
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
    image: '/src/assets/Rectangle 6.png', // Placeholder URL - update this!
    alt: 'UI/UX design of a psychedelic music player',
    link: '#',
    // Custom styles derived from the visual design (Tailwind classes)
    styles: { 
      gradient: 'bg-gradient-to-br from-purple-500/80 to-pink-500/80',
      bg: 'bg-cover bg-center', // If image is used as background
    }
  },
  {
    id: 2,
    category: 'App Design',
    author: 'Jayesh Patil',
    date: '09 Oct, 2023',
    title: 'Sugee: Loan Management System for Rural Sector.',
    image: '/src/assets/Rectangle 6 (1).png', // Placeholder URL - update this!
    alt: 'Sugee app dashboard screenshot',
    link: '#',
    styles: {
      gradient: 'bg-[#18804A]', // Solid green color
      bg: 'bg-cover bg-center', 
    }
  },
  {
    id: 3,
    category: 'App Design',
    author: 'Jayesh Patil',
    date: '13 Aug, 2023',
    title: 'Cinetrade: Innovative way to invest in Digital Media',
    image: '/images/post-image-3.png', // Placeholder URL - update this!
    alt: 'Cinetrade app screenshot',
    link: '#',
    styles: {
      gradient: 'bg-amber-400', // Solid yellow/orange color
      bg: 'bg-cover bg-center',
    }
  },
];


// --- BlogCard Component ---
const BlogCard = ({ post }) => {
  // Use post.image directly as background for visual fidelity to the sample image
  const cardImageStyle = { 
    backgroundImage: `url(${post.image})`,
  };

  return (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
      <a 
        href={post.link} 
        // Hover animation: slight lift and shadow increase
        className="block group transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
      >
        {/* --- Image/Preview Area --- */}
        <div 
          className={`h-64 relative rounded-2xl overflow-hidden shadow-lg 
                      ${post.styles.gradient} 
                      ${post.styles.bg}`}
          style={cardImageStyle} // Apply the background image style
        >
          {/* Overlay for depth/text visibility */}
          <div className="absolute inset-0 bg-black/10"></div> 
          
          {/* Arrow Button */}
          <div 
            className="absolute bottom-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full 
                       transition duration-300 group-hover:bg-white"
          >
            {/* SVG Icon for the arrow */}
            <svg 
              className="w-5 h-5 text-white transition duration-300 group-hover:text-black" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>

        {/* --- Content Area --- */}
        <div className="mt-5">
          {/* Category/Author/Date Line */}
          <p className="text-sm font-medium text-gray-500 mb-2">
            {/* Orange dot indicator */}
            <span className="inline-block w-2 h-2 mr-2 rounded-full bg-orange-500"></span>
            {post.author}
            <span className="mx-2">•</span>
            {post.date}
          </p>
          {/* Title - changes color on hover */}
          <h3 className="text-xl font-semibold text-gray-900 leading-snug transition duration-300 group-hover:text-orange-600">
            {post.title}
          </h3>
        </div>
      </a>
    </div>
  );
};


// --- Main BlogSection Component ---
const BlogSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* --- Header & Button --- */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">
            From my <br /> blog post
          </h2>
          {/* See All Button matching the visual style */}
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            See All
          </button>
        </div>

        {/* --- Cards Container --- */}
        {/* md:flex-row creates the horizontal layout on medium screens and up */}
        <div className="flex flex-col md:flex-row -m-">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;