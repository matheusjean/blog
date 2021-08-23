/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from './styles';

export type PostContentProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContentProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};
