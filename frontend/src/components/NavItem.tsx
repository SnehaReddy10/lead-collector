import { Link } from 'react-router-dom';

function NavItem({ title, path }: { title: string; path: string }) {
  return (
    <div className="px-2 py-[2px] hover:bg-gray-900 transition-all ease rounded-sm">
      <Link to={path}>{title}</Link>
    </div>
  );
}

export default NavItem;
