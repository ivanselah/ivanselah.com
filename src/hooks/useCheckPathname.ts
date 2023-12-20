'use client';
import { usePathname } from 'next/navigation';

type Props = {
  targetPathname: string;
};

export const useCheckPathname = ({ targetPathname }: Props) => {
  const pathname = usePathname();
  const path = pathname.substring(1).trim();

  console.log(path);

  if (!path && targetPathname === '/') {
    return { isMatch: true };
  }

  const [nextPath] = path.split('/');
  const isMatch = nextPath === targetPathname;

  return { isMatch };
};
