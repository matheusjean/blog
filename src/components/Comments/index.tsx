/* eslint-disable @typescript-eslint/no-unused-vars */
import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/app-config';
import { Container } from './styles';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="mjblog-4"
        config={{
          url: `${SITE_URL}/posts/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
