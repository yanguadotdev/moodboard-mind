'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'
import { useStore } from 'zustand'
import { createVaultStore } from '../store/vault-store'
import type { VaultStore } from '../types'

export type VaultStoreApi = ReturnType<typeof createVaultStore>

export const VaultContext = createContext<VaultStoreApi | undefined>(undefined)

interface VaultProviderProps {
  children: ReactNode
}

export const VaultProvider = ({ children }: VaultProviderProps) => {
  // It's created only once per client lifecycle
  const [store] = useState(() => createVaultStore())

  return <VaultContext.Provider value={store}>{children}</VaultContext.Provider>
}

export const useVaultStore = <T,>(selector: (store: VaultStore) => T): T => {
  const context = useContext(VaultContext)

  if (!context) {
    throw new Error('useVaultStore must be used within VaultProvider')
  }
  return useStore(context, selector)
}
