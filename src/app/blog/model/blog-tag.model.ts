export interface BlogTag {
  tagId: number;
  tagContent: string;
  tagCount: number;
}

export const DEFAULT_BLOG_TAG  = {
  tagId: undefined,
  tagContent: undefined,
  tagCount: undefined
}