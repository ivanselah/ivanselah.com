import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ContactFormDataStore, SelectedTagStore } from '@/store/types';

const ALL_POSTS = '전체보기';
const contactFormData = {
  fromEmail : '',
  title : '',
  message : '',
}


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

const contactFormDataStore = create<ContactFormDataStore>()(
  devtools(
    persist(
      (set) => ({
        contactFormData,
        setContactFormData: (name, value)=> set((state) => ({ contactFormData: {
          ...state.contactFormData,
          [name] :value
        }})),
        resetContactFormData: () => set({ contactFormData })
      }),
      {
        name : 'contact-store',
      }
    )
  )
)

const useContactFormDataStore = contactFormDataStore;


export { useSelectTagStore, useContactFormDataStore };
