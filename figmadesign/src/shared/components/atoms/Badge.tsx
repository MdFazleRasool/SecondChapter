import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger';
};

export default function Badge({ children, color = 'primary' }: BadgeProps) {
  const colorClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${colorClasses[color]}`}>
      {children}
    </span>
  );
}
