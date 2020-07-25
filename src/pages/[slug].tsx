import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import markdownStyle from '../styles/markdown.module.css';
import { Main } from '../templates/Main';
import { getAllPosts, getPostBySlug } from '../utils/content';
import markdownToHtml from '../utils/markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  content: string;
};

const DisplayPost = (props: IPostProps) => (
  <Main
    meta={(
      <Meta
        title="Lorem ipsum"
        description="Lorem ipsum"
        locale="en"
        site_name="Creative Designs Guru"
      />
    )}
  >
    <div
      className={markdownStyle.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  </Main>
);

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
    'description',
    'date',
    'image',
    'tags',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post,
      content,
    },
  };
};

export default DisplayPost;
