import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar flex justify-center flex-wrap text-xl">
    {props.children}

    <style jsx>
      {`
        .navbar {
          @apply bg-white border-b py-2;
        }
        .navbar :global(a) {
          @apply text-gray-900;
        }

        .navbar :global(a:hover) {
          @apply no-underline text-gray-900;
        }
      `}
    </style>
  </ul>
);

export { Navbar };
