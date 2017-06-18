export interface BlogSummary {
  id: number;
  title: string;
  info: string;
  infoImg?: string;
  tags: string[];
  postDate: Date;
}

export const DEFAULT_BLOG_SUMMARY = {
  id: undefined,
  title: undefined,
  info: undefined,
  infoImg: undefined,
  tags: [],
  postDate: undefined
};