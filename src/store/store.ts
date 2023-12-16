import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ContactFormDataStore, PostLikeHeartStore, SelectedTagStore } from '@/store/types';

const ALL_POSTS = '전체보기';
const initContactFormData: ContactFormDataStore['contactFormData'] = {
  fromEmail: '',
  title: '',
  message: '',
};
const initPostLikeHeart: PostLikeHeartStore['postLikeHeart'] = {
  isPostLike: false,
  totalPostLikeCount: 0,
};

const selectTagStore = create<SelectedTagStore>()(
  devtools(
    persist(
      set => ({
        selectedTag: ALL_POSTS,
        setSelectedTag: selectedTag => set(() => ({ selectedTag })),
        resetSelectedTag: () => set({ selectedTag: ALL_POSTS }),
      }),
      {
        name: 'tag-store',
      },
    ),
  ),
);

const useSelectTagStore = selectTagStore;

const contactFormDataStore = create<ContactFormDataStore>()(
  devtools(
    persist(
      set => ({
        contactFormData: initContactFormData,
        setContactFormData: (name, value) =>
          set(state => ({
            contactFormData: {
              ...state.contactFormData,
              [name]: value,
            },
          })),
        resetContactFormData: () => set({ contactFormData: initContactFormData }),
      }),
      {
        name: 'contact-store',
      },
    ),
  ),
);

const useContactFormDataStore = contactFormDataStore;

const postLikeHeartStore = create<PostLikeHeartStore>()(
  devtools(
    persist(
      set => ({
        postLikeHeart: initPostLikeHeart,
        setTotalPostLikeCount: count =>
          set(state => {
            const isPostLike = count > 0;
            const totalCount = state.postLikeHeart.totalPostLikeCount + count;
            return {
              postLikeHeart: {
                isPostLike,
                totalPostLikeCount: totalCount < 0 ? 0 : totalCount,
              },
            };
          }),
      }),
      {
        name: 'post-likeHeart-store',
      },
    ),
  ),
);

const usePostLikeHeartStore = postLikeHeartStore;

export { useSelectTagStore, useContactFormDataStore, usePostLikeHeartStore };
