/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/posts';

import HomePage from '../containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <HomePage posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts(
    '_sort=id:desc&_start=0&_limit=30&category.name=LeagueOfLegends',
  );

  return {
    props: { posts },
  };
};
//     '_sort=id:desc&_start=0&_limit=30&category.name=LeagueOfLegends',
