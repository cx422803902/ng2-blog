export interface BlogSummary {
  postId: number;
  title: string;
  info: string;
  infoImg?: string;
  tags: string[];
  postDate: Date;
}

export const DEFAULT_BLOG_SUMMARY = {
  postId: undefined,
  title: undefined,
  info: undefined,
  infoImg: undefined,
  tags: [],
  postDate: undefined
};