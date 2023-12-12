// store.ts
import { create } from 'zustand'

interface CreationState {
  descriptor: string
  name: string
  description: string
  backgroundFile: string
  color: string
  linkTitleName: string
  link: string
  isDark: boolean
  setBackgroundFile: (file: string) => void
  setColor: (color: string) => void
  setLinkTitleName: (title: string) => void
  setLink: (link: string) => void
}

interface FormDataState {
  formData: Record<string, string | File | boolean>
  setFormData: (name: string, value: string) => void
  setFile: (name: string, file: File) => void
  setSwitch: (name: string, isDark: boolean) => void
}

export const useFormStore = create<CreationState & FormDataState>((set) => ({
  descriptor: '',
  name: '',
  description: '',
  backgroundFile: '',
  color: '',
  linkTitleName: '',
  link: '',
  isDark: true,
  formData: {},
  setBackgroundFile: (file) => set({ backgroundFile: file }),
  setColor: (color) => set({ color }),
  setLinkTitleName: (title) => set({ linkTitleName: title }),
  setLink: (link) => set({ link }),
  setFormData: (name, value) =>
    set((state) => ({ formData: { ...state.formData, [name]: value } })),
  setFile: (name, file) => set((state) => ({ formData: { ...state.formData, [name]: file } })),
  setSwitch: (name, isDark) =>
    set((state) => ({ formData: { ...state.formData, [name]: isDark } })),
}))
