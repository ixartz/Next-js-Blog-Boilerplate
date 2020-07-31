import React from 'react';

import Link from 'next/link';

type IPaginationLinkProps = {
  href: string;
  as: string;
};

export type IPaginationProps = {
  previous?: IPaginationLinkProps;
  next?: IPaginationLinkProps;
};

const Pagination = (props: IPaginationProps) => (
  <div className="text-sm flex justify-between">
    {props.previous && (
      <div>
        <Link href={props.previous.href} as={props.previous.as}>
          <a>← Newer Posts</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto">
        <Link href={props.next.href} as={props.next.as}>
          <a>Older Posts →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
