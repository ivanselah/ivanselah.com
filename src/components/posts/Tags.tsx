import React from 'react';

type TagsProps = {
  tags: string[];
  selectedTag: string;
  onClick: (tag: string) => void;
};

export default function Tags({ tags, selectedTag, onClick }: TagsProps) {
  return (
    <section className='w-40 text-center p-4'>
      <h2 className='text-lg font-bold border-b border-gray-700 pb-2 mb-3'>태그목록</h2>
      <ul>
        {tags.map((tag) => {
          return (
            <li
              className={`cursor-pointer ${tag === selectedTag && 'text-sky-600'}`}
              key={tag}
              onClick={() => onClick(tag)}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
