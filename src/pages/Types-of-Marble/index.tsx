import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../../blog/BlogGallery';
import { Meta } from '../../layout/Meta';
import { IPaginationProps } from '../../pagination/Pagination';
import { Main } from '../../templates/Main';
import { AppConfig } from '../../utils/AppConfig';
import { getAllPosts } from '../../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="Discover the beauty and versatility of marble for home design and inspiration on our website for homeowners, architects, and design professionals."
        description={AppConfig.description}
      />
    }
  >
    <h1 className="text-4xl  font-black text-center">{`Inspiring marble collection for home design and tips.`}</h1>
    <section className="my-10">
      <div className="relative mx-auto border-gray-800 h-20">
        <div className="border-b-2  border-gray-800"></div>
        <div className="text-center bg-white absolute -top-4 px-3">
          <h3 className="text-xl">Blog Posts</h3>
        </div>
      </div>
      <BlogGallery posts={props.posts} pagination={props.pagination} />
    </section>
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'description',
    'category',
  ]).filter(
    // eslint-disable-next-line no-prototype-builtins
    (element) => element.category === 'Types-of-Marble'
  );
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
