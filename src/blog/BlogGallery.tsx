import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 ">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <h3 className="text-3xl text-black font-bold">{elt.title}</h3>
            </a>
          </Link>
          <p className="line-clamp-2 mb-2">{elt.description}</p>
          <div className=" flex text-lg text-gray-800 justify-between">
            <div className="text-left">{elt.author}</div>
            <div className="text-right">
              {format(new Date(elt.date), 'LLL d, yyyy')}
            </div>
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
