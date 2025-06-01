import type { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(props.className, 'w-[90%] max-w-[1360px] mx-auto')}
    >
      {children}
    </div>
  );
};

export default Container;
