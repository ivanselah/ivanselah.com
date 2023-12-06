import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { SelectedTagStore } from '@/store/types';

const ALL_POSTS = '전체보기';


const selectTagStore = create<SelectedTagStore>()(
    devtools(
      persist(
        (set) => ({
            selectedTag: ALL_POSTS,
            setSelectedTag: selectedTag => set(() => ({ selectedTag })),
            resetSelectedTag: () => set({ selectedTag: ALL_POSTS }),
        }),
        {
          name: 'tag-store',
        },
      ),
    ),
  )

const useSelectTagStore = selectTagStore;

export { useSelectTagStore };
