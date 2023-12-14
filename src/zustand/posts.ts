// In usePostsStore.ts
import { create } from 'zustand'

export interface PostsData {
  posts: PostData[]
  setPosts: (posts: PostData[]) => void
}

export interface PostData {
  descriptor?: string
  title?: string
  description?: string
  backgroundFile: string
  color?: string
  linkTitleName?: string
  link?: string
  isDark?: boolean
  success?: boolean
  publishTime?: string
  publishName?: string
}

export const usePostsStore = create<PostsData>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}))
