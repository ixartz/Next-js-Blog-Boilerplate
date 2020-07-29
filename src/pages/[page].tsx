import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';
import { convertTo2D } from '../utils/Paginate';

type IPageUrl = {
  page: string;
};

type IPageProps = {
  page: string;
};

const PaginatePost = (props: IPageProps) => <div>{props.page}</div>;

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

export const getStaticProps: GetStaticProps<IPageProps, IPageUrl> = async ({ params }) => ({
  props: {
    page: params!.page,
  },
});

export default PaginatePost;
