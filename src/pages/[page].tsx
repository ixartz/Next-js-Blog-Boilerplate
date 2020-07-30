import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts, PostItems } from '../utils/Content';
import { convertTo2D } from '../utils/Paginate';

type IPageUrl = {
  page: string;
};

type IPageProps = {
  posts: PostItems[];
};

const PaginatePosts = (props: IPageProps) => (
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
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const posts = getAllPosts(['slug']);

  const pages = convertTo2D(posts, Config.pagination_size);

  return {
    paths: pages.map((_, ind) => ({
      params: {
        page: `page${ind + 1}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPageProps, IPageUrl> = async ({ params }) => {
  const posts = getAllPosts(['title', 'date', 'slug']);

  const pages = convertTo2D(posts, Config.pagination_size);
  const currentPage = Number(params!.page.replace('page', '')) - 1;

  return {
    props: {
      posts: pages[currentPage],
    },
  };
};

export default PaginatePosts;
