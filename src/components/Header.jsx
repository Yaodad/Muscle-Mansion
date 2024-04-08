import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUser, FaPlus } from 'react-icons/fa6';
import { AiOutlineMenu } from 'react-icons/ai';
import { mmLogo } from '../assets/images';
import { navLinks } from '../constants';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // navbar tranparency
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // add event listener
    window.addEventListener('scroll', handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full text-white font-montserrat z-20">
      <div
        className={`flex justify-between items-center ${
          scrollY > 10 || showMenu ? 'bg-black' : 'bg-transparent'
        } shadow-md px-8 py-2`}
      >
        {/* logo */}
        <NavLink to={'/'} className="py-2">
          <img src={mmLogo} alt="logo" width={160} />
        </NavLink>

        {/* desktop navbar */}
        <nav className="xl:block hidden">
          <ul className="flex space-x-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) => {
                    return isActive
                      ? 'text-primary font-medium leading-6'
                      : 'font-medium leading-6 text-accent';
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* mobile navbar */}
        <nav
          className={`fixed top-[87.75px] left-0 w-full bg-black transition-all duration-150 ease-in-out border-t-2 xl:hidden ${
            showMenu
              ? 'h-[501px] border-white pt-9 pb-9'
              : 'h-0 border-none pt-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-7">
            {navLinks.map((link) => (
              <li
                className="text-accent text-xl font-medium text-center"
                key={link.label}
              >
                <NavLink
                  to={link.route}
                  className={({ isActive }) => {
                    return isActive ? 'text-primary' : '';
                  }}
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-5">
          <button className="sm:block hidden">
            <NavLink
              to={'/contact'}
              className={
                'flex gap-2 items-center font-bold uppercase border-2 border-gray-500/80 p-1 pr-3 rounded-md'
              }
            >
              <i className=" bg-primary p-2 rounded-sm hover:animate-[spin_1s_ease-out_forwards]">
                <FaPlus />
              </i>
              join class now
            </NavLink>
          </button>

          <button className="cursor-pointer text-accent ">
            <NavLink to={'/login'}>
              <i>
                <FaRegUser size={20} />
              </i>
            </NavLink>
          </button>

          <button
            className="cursor-pointer text-accent xl:hidden block"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <i>
              <AiOutlineMenu size={24} />
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
