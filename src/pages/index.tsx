import React from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="Discover the beauty and versatility of marble for home design and inspiration on our website for homeowners, architects, and design professionals."
        description={AppConfig.description}
      />
    }
  >
    <h1 className="text-4xl my-10  font-black text-center">{`Inspiring marble collection for home design and tips.`}</h1>
    <section className="py-5">
      <div className="grid grid-cols-2">
        <div className="border shadow-lg p-5 flex flex-col justify-center rounded m-5 p-2">
          <p className="text-black">
            {`Our website is a comprehensive resource for all things related to
          marble, from its history and uses to its care and maintenance. 
         `}
          </p>
          <button className="border mt-3 rounded  px-2">Read More</button>
        </div>
        <div></div>
        <div></div>
        <div className="shadow-lg p-5 flex flex-col justify-center rounded m-5 p-2">
          <p className="text-black text-lg">
            {` Whether you are a homeowner looking to incorporate marble into your home
          design or an architect or designer seeking inspiration, you'll find
          valuable information on our site. 
         `}
          </p>
          <button className="border mt-3 rounded  px-2">Keep Exploring</button>
        </div>
      </div>
    </section>
    <section className="my-10">
      <div className="relative mx-auto border-gray-800 mb-10">
        <div className="border-b-2  border-gray-800"></div>
        <div className="text-center bg-white absolute -top-4 px-3">
          <h3 className="text-xl">Categories</h3>
        </div>
      </div>
      <div>
        <ul className="text-center font-semibold">
          <li className="bg-gray-200 py-1  hover:bg-gray-300 cursor-pointer">
            <Link href={`/Types-of-Marble`}>
              <span> Types of Marble </span>
            </Link>
          </li>
          <li className="bg-blue-200 py-1  hover:bg-blue-300 cursor-pointer">
            Marble in Home Design
          </li>
          <li className="bg-red-200 py-1  hover:bg-red-300 cursor-pointer">
            Care and Maintenance
          </li>
          <li className="bg-yellow-200 py-1  hover:bg-yellow-300 cursor-pointer">
            Marble in Art and Architecture
          </li>
          <li className="bg-indigo-200 py-1  hover:bg-indigo-300 cursor-pointer">
            Marble in Modern Design
          </li>
          <li className="bg-orange-200 py-1  hover:bg-orange-300 cursor-pointer">
            Environmental Impact
          </li>
          <li className="bg-green-200 py-1 hover:bg-green-300 cursor-pointer">
            Marble epoxy floor
          </li>
        </ul>
      </div>
    </section>
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
  const posts = getAllPosts(['title', 'date', 'slug', 'description', 'author']);
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
