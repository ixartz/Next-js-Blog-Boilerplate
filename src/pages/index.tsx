import React from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts, PostItems } from '../utils/Content';

type IPageProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const Index = (props: IPageProps) => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>{elt.title}</a>
          </Link>

          <div>July 2020</div>
        </li>
      ))}
    </ul>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </Main>
);

export const getStaticProps: GetStaticProps<IPageProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > Config.pagination_size) {
    pagination.next = {
      href: '/[page]',
      as: '/page2',
    };
  }

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Index;
