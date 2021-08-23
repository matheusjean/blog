/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styles';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ cover, slug, title }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};

// href={`/posts/${slug}`}
// href="/post/[slug]" as={`/post/${slug}`}
