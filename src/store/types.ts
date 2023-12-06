export interface SelectedTagStore {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  resetSelectedTag: () => void;
}
