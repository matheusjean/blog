/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { PostData } from '../../domain/posts/posts';
import { Category, Container } from './styles';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        <meta
          name="description"
          content="Alguma coisa bem legal e interessante aqui"
        />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
