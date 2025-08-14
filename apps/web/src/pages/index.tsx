import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center py-16 md:py-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
        <span className="block">Full-Stack Engineer &</span>
        <span className="block text-blue-600 dark:text-blue-500 mt-2">Creative Developer</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
        I design and build beautiful, scalable, and user-friendly web applications. Let's create something amazing together.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <Link 
          href="/projects" 
          className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Explore My Work
        </Link>
        <Link 
          href="/contact" 
          className="px-5 py-2.5 text-sm font-semibold text-gray-800 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}