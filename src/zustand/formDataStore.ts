import { create } from 'zustand';

interface FormDataState {
  descriptor: string;
  title: string;
  description: string;
  image: string;
  color: string;
  linkTitleName: string;
  link: string;
  isDark: boolean;
  success: boolean;
  publishTime: Date;
  publishName: string;

  setDescriptor: (descriptor: string) => void;
  setTitle: (name: string) => void;
  setDescription: (description: string) => void;
  setSwitch: () => void;
  setImage: (backgroundFile: string) => void;
  setColor: (color: string) => void;
  setLinkTitleName: (title: string) => void;
  setLink: (link: string) => void;
}

export const useFormStore = create<FormDataState>((set) => ({
  descriptor: '',
  title: '',
  description: '',
  image: '',
  color: '',
  linkTitleName: '',
  link: '',
  isDark: false,
  success: false,
  publishTime: new Date(),
  publishName: 'user',

  setDescriptor: (descriptor) => set({ descriptor }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setImage: (image) => set({ image }),
  setColor: (color) => set({ color }),
  setLinkTitleName: (title) => set({ linkTitleName: title }),
  setLink: (link) => set({ link }),
  setSwitch: () => set((state) => ({ isDark: !state.isDark })),
}));
