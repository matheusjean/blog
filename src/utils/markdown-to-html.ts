/* eslint-disable @typescript-eslint/no-unused-vars */
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export const markdownToHtml = async (content: string): Promise<string> => {
  const data = await remark().use(remarkHtml);

  return String(data.arguments);
};
