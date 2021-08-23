/* eslint-disable @typescript-eslint/no-unused-vars */
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
      Publicado em <Date date={date} /> por {author} em {category}
    </Container>
  );
};
