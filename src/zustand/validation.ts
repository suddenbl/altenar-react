import { create } from 'zustand'

interface ValidationInterface {
  isErrorFile: boolean
  errorFileMsg: string

  setError: (error: boolean) => void
  setErrorMsg: (errorMsg: string) => void
}

export const useValidationStore = create<ValidationInterface>((set) => ({
  isErrorFile: false,
  errorFileMsg: '',

  setError: (error) => set({ isErrorFile: error }),
  setErrorMsg: (error) => set({ errorFileMsg: error }),
}))
