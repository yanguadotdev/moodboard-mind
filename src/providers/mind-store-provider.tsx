'use client';

import type { MindStore } from '@typings/mind';
import { createMindStore } from '@vault/store/mind-store';
import { createContext, type ReactNode, useContext, useState } from 'react';
import { useStore } from 'zustand';

export type MindStoreApi = ReturnType<typeof createMindStore>;

export const MindStoreContext = createContext<MindStoreApi | undefined>(undefined);

interface MindStoreProviderProps {
  children: ReactNode;
}

export const MindStoreProvider = ({ children }: MindStoreProviderProps) => {
  // we use useState so that the store is created only once and is persistent on the client
  const [store] = useState(() => createMindStore());
  return <MindStoreContext value={store}>{children}</MindStoreContext>;
};

export const useMindStore = <T,>(selector: (store: MindStore) => T): T => {
  const context = useContext(MindStoreContext);

  if (!context) {
    throw new Error('useMindStore should be used within MindStoreProvider');
  }
  return useStore(context, selector);
};
