import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

  export const  useLanguageStore = create(
    persist(
      (set, get) => ({
        language: "EN",
        changeLanguageState: (currentLanguage) => set(() => ({ language: currentLanguage })),
      }),
      {
        name: 'language-storage', 
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )