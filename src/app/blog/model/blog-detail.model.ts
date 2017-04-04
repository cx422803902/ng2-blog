export interface BlogDetail {
  id: number;
  title: string;
  info: string;
  infoImg?: string;
  content: string;
  tags: string[];
  updateDate: Date;
  postDate: Date;
};

export const DEFAULT_BLOG_DETAIL: BlogDetail = {
  id: undefined,
  title: undefined,
  info: undefined,
  infoImg: undefined,
  content: undefined,
  tags: [],
  updateDate: undefined,
  postDate: undefined
};