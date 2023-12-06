import React from 'react';

type TagsProps = {
  tags: string[],
  selectedTag: string,
  onClick: (tag: string) => void,
};

export default function Tags({
  tags: originTags,
  selectedTag,
  onClick,
}: TagsProps) {
  const removeDuplicatedTags = Array.from(new Set(originTags));
  const totalTagsCount = removeDuplicatedTags.length - 1;

  return (
    <section className="hidden sm:block min-w-[20%] text-center p-4">
      <h2 className="text-lg text-left font-bold border-b border-gray-400 pb-2 mb-3">
        태그 목록
      </h2>
      <ul>
        {removeDuplicatedTags.map((tag, index) => {
          const targetTagsCount = originTags.filter(
            targetTag => targetTag === tag,
          ).length;
          const isAllPosts = index === 0;
          return (
            <li
              className={`text-left truncate leading-7 cursor-pointer ${
                tag === selectedTag && 'text-teal-500'
              } ${isAllPosts && 'font-bold'}`}
              key={tag}
              onClick={() => onClick(tag)}
            >
              <span>{`${tag} (${
                isAllPosts ? totalTagsCount : targetTagsCount
              })`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
