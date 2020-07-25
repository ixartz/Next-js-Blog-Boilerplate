import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { getAllPosts, getPostBySlug } from '../utils/content';
import markdownToHtml from '../utils/markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  content: string;
};

const DisplayPost = () => <div>Test</div>;

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      content,
    },
  };
};

export default DisplayPost;
