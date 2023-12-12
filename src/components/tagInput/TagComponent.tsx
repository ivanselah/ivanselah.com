type TagComponentProps = {
  name: 'tag';
  value: string;
  onTagInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TagComponent({ name, value, onTagInputChange }: TagComponentProps) {
  return (
    <div>
      <h4>Tag Component input</h4>
      <input name={name} value={value} onChange={onTagInputChange} />
    </div>
  );
}
