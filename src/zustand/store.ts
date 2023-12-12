import { create } from 'zustand'

interface FormDataState {
  descriptor: string
  title: string
  description: string

  backgroundFile: File | null
  // backgroundFile: string

  color: string
  linkTitleName: string
  link: string
  isDark: boolean
  // formData: Record<string, string | File | boolean>

  setDescriptor: (descriptor: string) => void
  setTitle: (name: string) => void
  setDescription: (description: string) => void
  setSwitch: () => void

  setBackgroundFile: (file: File) => void
  // setBackgroundFile: (file: string) => void

  setColor: (color: string) => void
  setLinkTitleName: (title: string) => void
  setLink: (link: string) => void
}

export const useFormStore = create<FormDataState>((set) => ({
  descriptor: '',
  title: '',
  description: '',
  backgroundFile: null,
  color: '',
  linkTitleName: '',
  link: '',
  isDark: false,

  setDescriptor: (descriptor) => set({ descriptor }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),

  setBackgroundFile: (file) => {
    set({ backgroundFile: file })
  },
  setColor: (color) => set({ color }),
  setLinkTitleName: (title) => set({ linkTitleName: title }),
  setLink: (link) => set({ link }),
  setSwitch: () => set((state) => ({ isDark: !state.isDark })),
}))
