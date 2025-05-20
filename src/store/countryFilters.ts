import { create } from 'zustand';

export interface FiltersState {
  search: string;
  language: string;
  regions: string[];

  languages: string[];

  setSearch: (s: string) => void;
  setLanguage: (lang: string) => void;
  toggleRegion: (r: string) => void;
  setLanguages: (langs: string[]) => void;
}

export const useCountryFilters = create<FiltersState>((set) => ({
  search: '',
  language: '',
  regions: [],
  languages: [],

  setSearch: (search) => set({ search }),
  setLanguage: (language) => set({ language }),
  toggleRegion: (region) =>
    set((state) => ({
      regions: state.regions.includes(region)
        ? state.regions.filter((r) => r !== region)
        : [...state.regions, region],
    })),
  setLanguages: (languages) => set({ languages }),
}));
