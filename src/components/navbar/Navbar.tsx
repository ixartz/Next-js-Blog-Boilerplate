'use-client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <img className="h-8" src="logo.png" alt="Logo" />
          </div>

          {/* Mobile menu button (shown on small screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          {/* Right side - Navigation options */}
          <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/option1">
              <a
                className={
                  router.pathname === '/option1'
                    ? 'text-white'
                    : 'text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                }
              >
                Option 1
              </a>
            </Link>
            <Link href="/option2">
              <a
                className={
                  router.pathname === '/option2'
                    ? 'text-white'
                    : 'text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                }
              >
                Option 2
              </a>
            </Link>
            <Link href="/option3">
              <a
                className={
                  router.pathname === '/option3'
                    ? 'text-white'
                    : 'text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                }
              >
                Option 3
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
