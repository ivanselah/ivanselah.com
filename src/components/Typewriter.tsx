'use client';

import { useTypewriter, Typewriter as TypewriterContainer, Cursor } from 'react-simple-typewriter';

type TypewriterContainerProps = {
  title: string;
  about: string[];
};

export default function Typewriter({ title, about }: TypewriterContainerProps) {
  const {} = useTypewriter({
    words: about,
    loop: 5,
  });

  return (
    <h2 className='w-5/6 text-center text-white flex flex-col gap-10'>
      <span className='text-base sm:text-2xl md:text-3xl'>저는 !</span>
      <span className='text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold text-black'>
        <TypewriterContainer words={about} loop={-1} deleteSpeed={100} delaySpeed={1000} />
        <Cursor />
      </span>
      <span className='text-base sm:text-2xl md:text-3xl'>{title}</span>
    </h2>
  );
}
