import { NavLink } from 'react-router-dom';

type NavItemProps = {
  label: string;
  to: string;
};

export default function NavItem({ label, to }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 font-medium ${
          isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-500'
        }`
      }
    >
      {label}
    </NavLink>
  );
}
