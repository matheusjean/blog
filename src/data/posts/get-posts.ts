import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/posts';
import { fetchJson } from '../../utils/fetch-json';

export const getPosts = async (
  slug: string | string[],
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);

  return jsonPosts;
};

// export const getPosts = async (
//   slug: string | string[],
// ): Promise<PostData[]> => {
//   const slugString = Array.isArray(slug) ? slug[0] : slug;
//   const url = `${POSTS_URL}?slug=${slugString}`;
//   const jsonPosts = await fetchJson<PostData[]>(url);
//   const content = await markdownToHtml(jsonPosts[0].content);
//   const finalContent = { ...jsonPosts[0], content };
//   return [finalContent];
// };
