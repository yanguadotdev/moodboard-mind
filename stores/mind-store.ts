import { createStore } from "zustand/vanilla";
import type { MindStore, MindState } from "@typings/mind";

const defaultInitState: MindState = {
  items: [],
  searchQuery: "",
};

export const createMindStore = (initState: MindState = defaultInitState) => {
  return createStore<MindStore>()((set) => ({
    ...initState,
    addItem: (item) => set((state) => ({ items: [item, ...state.items] })),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),
    setSearch: (query) => set({ searchQuery: query }),
  }));
};
