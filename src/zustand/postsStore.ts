import { create } from 'zustand';

export interface PostsData {
  posts: PostData[];
  setPosts: (posts: PostData[]) => void;
}

export interface PostData {
  descriptor?: string;
  title?: string;
  description?: string;
  image: string;
  color?: string;
  linkTitleName?: string;
  link?: string;
  isDark?: boolean;
  success?: boolean;
  publishTime?: string;
  publishName?: string;
  id?: number;
}

export const usePostsStore = create<PostsData>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
