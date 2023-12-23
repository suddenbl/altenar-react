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

  setDescriptor: (descriptor: string, inputLength: number) => void;
  setTitle: (name: string, inputLength: number) => void;
  setDescription: (description: string, inputLength: number) => void;
  setSwitch: () => void;
  setImage: (backgroundFile: string) => void;
  setColor: (color: string) => void;
  setLinkTitleName: (title: string, inputLength: number) => void;
  setLink: (link: string, inputLength: number) => void;
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

  setDescriptor: (descriptor, inputLength) =>
    descriptor.length <= inputLength && set({ descriptor }),
  setTitle: (title, inputLength) => title.length <= inputLength && set({ title }),
  setDescription: (description, inputLength) =>
    description.length <= inputLength && set({ description }),
  setImage: (image) => set({ image }),
  setColor: (color) => set({ color }),
  setLinkTitleName: (title, inputLength) =>
    title.length <= inputLength && set({ linkTitleName: title }),
  setLink: (link, inputLength) => link.length <= inputLength && set({ link }),
  setSwitch: () => set((state) => ({ isDark: !state.isDark })),
}));
