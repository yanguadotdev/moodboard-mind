// Business Entity
export interface VaultItem {
  id: string
  type: 'image' | 'quote' | 'link' | 'color'
  content: string
  tags: string[]
  color?: string
  createdAt: Date
  spaceId: string
}

// Store types
export type VaultState = {
  items: VaultItem[]
  searchQuery: string
}

export type VaultActions = {
  addItem: (item: VaultItem) => void
  removeItem: (id: string) => void
  setSearch: (query: string) => void
}

export type VaultStore = VaultState & VaultActions
