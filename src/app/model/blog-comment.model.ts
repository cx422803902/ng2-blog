export interface BlogComment {
  id: number;
  postId: number;
  author: string;
  content: string;
  postDate: Date;
  parentId?: number;
}

export const DEFAULT_BLOG_COMMENT = {
  id: undefined,
  postId: undefined,
  author: undefined,
  content: undefined,
  postDate: undefined,
  parentId: undefined
};