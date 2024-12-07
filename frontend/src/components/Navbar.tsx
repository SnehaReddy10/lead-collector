import { useEffect, useState } from 'react';
import NavItem from './NavItem';

const navItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Courses',
    path: '/courses',
  },
  {
    title: 'Visualizations',
    path: '/visualizations',
  },
];

const authItems = [
  {
    title: 'Register',
    path: '/register',
  },
  {
    title: 'Login',
    path: '/login',
  },
];

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem('token');
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);
  return (
    <div className="bg-black flex text-white text-xxs justify-around py-2">
      <div className="flex gap-3">
        <div className="px-2 py-[2px] font-bold hover:bg-gray-900 transition-all ease rounded-sm">
          TEKS-AC
        </div>
        {navItems.map((x) => (
          <NavItem title={x.title} path={x.path} />
        ))}
      </div>
      <div className="flex gap-3">
        {!isLoggedIn &&
          authItems.map((x) => <NavItem title={x.title} path={x.path} />)}

        {isLoggedIn && (
          <div
            onClick={() => {
              localStorage.removeItem('token');
              setIsLoggedIn(false);
            }}
          >
            <NavItem title={'Logout'} path={'/'} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
