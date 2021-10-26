import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/posts';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};
export default function Category({ posts, category }: CategoryProps) {
  return (
    <>
      <HomePage category={category} posts={posts} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts(
    `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`,
  );

  return {
    props: { posts, category: ctx.query.category },
  };
};
//     '_sort=id:desc&_start=0&_limit=30&category.name=LeagueOfLegends',