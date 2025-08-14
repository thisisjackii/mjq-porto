import { ReactNode } from 'react';
import Link from 'next/link';
import DarkToggle from './DarkToggle';

type Props = {
  children: ReactNode;
};

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }: Readonly<Props>) {
  return (
    <div className="min-h-screen font-sans"> {/* REMOVED: bg-gray-50 dark:bg-gray-900 */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white">
            MJQ
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <DarkToggle />
            {/* Mobile menu button can go here */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Jalaludin Qurthubi. All Rights Reserved.</p>
          <p className="mt-2">Built with Next.js, NestJS, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}