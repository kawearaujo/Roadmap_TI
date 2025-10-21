import { create } from 'zustand'

interface UserStore {
  conquistas: number[];
  roadmap: string[];
  set: (conquistas: number[]) => void;
  add: (id: number) => void;
  reset: () => void;
  
  setR: (roadmap: string[]) => void;
  addR: (id: string) => void;
  delR: (id: string) => void;
  resetR: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  conquistas: [],
  roadmap : [],
  set: (conquistas) => set({ conquistas }),
  add: (id) =>
    set((state) => {
      if (!state.conquistas.includes(id)) {
        return { conquistas: [...state.conquistas, id] };
      }
      return state;
    }),
  reset: () => set({ conquistas: [] }),


  setR: (roadmap) => set({ roadmap }),
  addR: (id) =>
    set((state) => {
      // if (!state.roadmap.includes(id)) {
        return { roadmap: [...state.roadmap, id] };
      // }
      // return state;
    }),
    
  delR: (id) =>
    set((state) => {
        return { roadmap: state.roadmap.filter((item) => item !== id) };
    }),
  resetR: () => set({ roadmap: [] }),
}));
