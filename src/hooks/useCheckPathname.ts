'use client';
import { usePathname } from 'next/navigation';

type Props = {
  targetPathname: string,
};

export const useCheckPathname = ({ targetPathname }: Props) => {
  const pathname = usePathname();
  const isMatch = pathname === targetPathname;

  return { isMatch };
};
