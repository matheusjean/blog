/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { Date } from '../Date/index';
import { Container } from './styles';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link href={`/categories/${category.toLowerCase()}`}>{category}</Link>
    </Container>
  );
};
