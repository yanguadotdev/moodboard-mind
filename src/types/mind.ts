export interface MindItem {
  id: string;
  type: 'image' | 'text' | 'link' | 'color';
  content: string;
  tags: string[];
  color?: string;
  createdAt: Date;
}

export type MindState = {
  items: MindItem[];
  searchQuery: string;
};

export type MindActions = {
  addItem: (item: MindItem) => void;
  removeItem: (id: string) => void;
  setSearch: (query: string) => void;
};

export type MindStore = MindState & MindActions;
