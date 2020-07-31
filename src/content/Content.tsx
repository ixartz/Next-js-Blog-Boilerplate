import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content">
    {props.children}

    <style jsx>
      {`
        .content {
          @apply text-xl py-5;
        }

        .content :global(p) {
          @apply my-6;
        }

        .content :global(ul) {
          @apply my-6;
        }
      `}
    </style>
  </div>
);

export { Content };
