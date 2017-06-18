export interface BlogTag {
  id: number,
  name: string;
  blogCount: number;
}

export const DEFAULT_BLOG_TAG = {
  id: undefined,
  name: undefined,
  blogCount: 0
}