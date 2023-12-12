import { useRef, useState } from 'react';
import TagComponent from './TagComponent';

export const formDataState = {
  tag: '',
};

interface FormDataState {
  tag: string;
}

export default function TagInputComponent() {
  const [formData, setFormData] = useState<FormDataState>(formDataState);
  const tagInputRef = useRef<string>('');

  const onTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    tagInputRef.current = event.target.value;
    setFormData((preFormData) => ({
      ...preFormData,
      tag: event.target.value,
    }));
  };

  return (
    <div>
      <span>{formData['tag']}</span>
      <TagComponent name={'tag'} value={formData['tag']} onTagInputChange={onTagInputChange} />
    </div>
  );
}
