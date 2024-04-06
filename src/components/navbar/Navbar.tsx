import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logoFlatwhite from '../../../public/flatwhitelogo_white.svg';
import Menu from '../../../public/menu.svg';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image className="h-2" src={logoFlatwhite} alt="Logo" />
          </div>

          {/* Mobile menu button (shown on small screens) */}
          <div className="md:hidden block">
            <button
              onClick={toggleMenu}
              className="text-white px-3 py-2 rounded-md text-lg font-bold font- absolute top-10 right-10"
            >
              <Image src={Menu} alt="Menu" />
            </button>
          </div>

          {/* Right side - Navigation options */}
          <div className="hidden md:flex space-x-4">
            <Link href="/acerca-de">
              <a
                className={
                  router.pathname === '/acerca-de'
                    ? 'text-white'
                    : 'text-white px-3 py-2 rounded-md text-lg font-bold hover:underline'
                }
              >
                Acerca de
              </a>
            </Link>
            <Link href="/inscribete">
              <a
                className={
                  router.pathname === '/inscribete'
                    ? 'text-white'
                    : 'text-white px-3 py-2 rounded-md text-lg font-bold hover:underline'
                }
              >
                Inscribete
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={
                  router.pathname === '/blog'
                    ? 'text-white'
                    : 'text-white px-3 py-2 rounded-md text-lg font-bold hover:underline'
                }
              >
                Blog
              </a>
            </Link>
          </div>

          {/* Mobile dropdown menu */}
          <div
            className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
            style={{}}
          >
            <div className="mt-2 w-48 bg-white rounded-md shadow-lg fixed right-2 top-30 z-[9999]">
              <Link href="/acerca-de">
                <a
                  className={
                    router.pathname === '/acerca-de'
                      ? 'block px-4 py-2 text-gray-800 hover:bg-gray-200'
                      : 'block px-4 py-2 text-gray-600 hover:bg-gray-200'
                  }
                >
                  Acerca de
                </a>
              </Link>
              <Link href="/inscribete">
                <a
                  className={
                    router.pathname === '/inscribete'
                      ? 'block px-4 py-2 text-gray-800 hover:bg-gray-200'
                      : 'block px-4 py-2 text-gray-600 hover:bg-gray-200'
                  }
                >
                  Inscribete
                </a>
              </Link>
              <Link href="/blog">
                <a
                  className={
                    router.pathname === '/blog'
                      ? 'block px-4 py-2 text-gray-800 hover:bg-gray-200'
                      : 'block px-4 py-2 text-gray-600 hover:bg-gray-200'
                  }
                >
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
