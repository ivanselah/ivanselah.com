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
    <section className="min-w-[100%] md:min-w-[20%] text-center p-4">
      <h2 className="text-lg text-left font-bold border-b border-gray-400 pb-2 mb-3">
        태그 목록
      </h2>
      <ul className="flex flex-row md:flex-col max-md:overflow-x-scroll">
        {removeDuplicatedTags.map((tag, index) => {
          const targetTagsCount = originTags.filter(
            targetTag => targetTag === tag,
          ).length;
          const isAllPosts = index === 0;
          return (
            <li
              className={`max-md:bg-slate-100 max-md:rounded-2xl max-md:min-w-fit max-md:m-1 max-md:p-1 max-md:px-3 max-md:text-teal-500 max-md:hover:text-teal-300 max-md:dark:bg-neutral-800 text-left md:truncate md:leading-7 cursor-pointer ${
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
