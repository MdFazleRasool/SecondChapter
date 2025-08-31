import { ReactNode } from 'react';

type BasicTextProps = {
  children: ReactNode;
  className?: string;
};

export default function BasicText({ children, className = '' }: BasicTextProps) {
  return <p className={`text-gray-800 ${className}`}>{children}</p>;
}
