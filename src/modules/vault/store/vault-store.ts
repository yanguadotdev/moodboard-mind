import { createStore } from 'zustand/vanilla'
import type { VaultState, VaultStore } from '../types'

const defaultInitState: VaultState = {
  items: [],
  searchQuery: ''
}

export const createVaultStore = (initState: VaultState = defaultInitState) => {
  return createStore<VaultStore>()((set) => ({
    ...initState,
    addItem: (item) => set((state) => ({ items: [item, ...state.items] })),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((i) => i.id !== id)
      })),
    setSearch: (query) => set({ searchQuery: query })
  }))
}
