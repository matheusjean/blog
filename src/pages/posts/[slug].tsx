/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../containers/Post';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPosts } from '../../data/posts/get-posts';
import { PostData } from '../../domain/posts/posts';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return (
    <>
      <Post post={post} />
    </>
  );
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const postsNumber = await countAllPosts();
  const posts = await getAllPosts(`_limit=${postsNumber}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts(ctx.params.slug);

  return {
    props: { post: posts[0] },
  };
};

// const posts = await getAllPosts(
//   '_sort=id:desc&_start=0&_limit=30&category.name=League of Legends',
// );
