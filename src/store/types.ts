export interface SelectedTagStore {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  resetSelectedTag: () => void;
}

export interface ContactFormDataStore {
  contactFormData: {
    fromEmail: string,
    title: string,
    message: string,
  };
  setContactFormData: (name: string, value: string) => void;
  resetContactFormData: () => void;
}
