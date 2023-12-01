import { CommonUtils } from '@/utils/common';

type ContainerProps = {
  className: string,
  children: React.ReactNode,
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={CommonUtils.combineClassName(
        'container px-8 xl:px-5',
        className,
      )}
    >
      {children}
    </div>
  );
}
