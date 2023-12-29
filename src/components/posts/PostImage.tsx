import Image from 'next/image';

type PostImageProps = {
  path: string;
  title: string;
  hasImage: boolean;
};

const fallbackPath = 'basic-image';

export default function PostImage({ path, title, hasImage }: PostImageProps) {
  return (
    <Image
      className="w-full min-h-fit max-h-[500px] select-none rounded-md"
      src={`/images/posts/${hasImage ? path : fallbackPath}.png`}
      alt={title}
      width={500}
      height={500}
      priority={true}
    />
  );
}
