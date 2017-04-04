export interface BlogRemark {
  postId: number;
  title: string;
  info: string;
  infoImg?: string;
  tags: string[];
  postDate: Date;
}

export const DEFAULT_BLOG_REMARK = {
  postId: undefined,
  title: undefined,
  info: undefined,
  infoImg: undefined,
  tags: [],
  postDate: undefined
}