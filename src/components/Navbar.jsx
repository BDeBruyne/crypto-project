import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import Logo from '../assets/fintecLogoWeb.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[1140px] w-full mx-auto mt-6 pb-6 flex items-center justify-between h-26 font-bold border-b-2 border-[#85bb65]'>
      {/*
      <div className='hidden md:block'>
        <ThemeToggle />
  </div>*/}
      <Link to='/'>
        <div><img src={Logo} alt="Logo"  className=''/></div>
      </Link>

    <div className='hidden lg:block'>
      <ul className='flex pt-16'>
          <li onClick={handleNav} className='px-6 font-normal hover:text-[#85bb65]'>
            <Link to='/'>Crypto</Link>
          </li>         
          <li onClick={handleNav} className='px-6 font-normal hover:text-[#85bb65]'>
            <Link to='Business'>Business</Link>
          </li>
          <li onClick={handleNav} className='px-6 font-normal hover:text-[#85bb65]'>
            <Link to='Tech'>Tech</Link>
          </li>
          <li onClick={handleNav} className='px-6 font-normal hover:text-[#85bb65]'>
            <Link to='SearchCrypto'>Coin Search</Link>
          </li>
      </ul>
    </div>
     {/** {user?.email ? (
        <div>
          <Link to='/account' className='p-4 font-normal hover:text-accent'>
            Account
          </Link>
          <button className='p-4 font-normal hover:text-accent' onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div className='hidden lg:block'>
          <Link to='/signin' className='p-4 font-normal hover:text-[#85bb65]'>
            Sign In
          </Link>
          <Link to='/signup' className='bg-[#85bb65] text-white font-normal px-4 p-2 w-full shadow-md hover:shadow-lg md:w-auto my-2'>Sign up</Link>
        </div>
        
      )} */}

      {/* Menu Icon */}
      <div onClick={handleNav} className='block lg:hidden cursor-pointer z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'lg:hidden fixed left-0 top-44 flex flex-col items-center justify-between w-full h-[90%] bg-white ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-44 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }
      >
        <ul className='w-full p-4'>
          <li onClick={handleNav} className='border-b py-6 hover:text-[#85bb65] font-normal'>
            <Link to='/'>Crypto</Link>
          </li>
          <li onClick={handleNav} className='border-b py-6 hover:text-[#85bb65] font-normal'>
            <Link to='Business'>Business</Link>
          </li>
          <li onClick={handleNav} className='border-b py-6 hover:text-[#85bb65] font-normal'>
            <Link to='Tech'>Tech</Link>
          </li>
          <li onClick={handleNav} className='border-b py-6 hover:text-[#85bb65] font-normal'>
            <Link to='SearchCrypto'>Crypto Search</Link>
          </li>         
          {/*<li onClick={handleNav} className='border-b py-6 hover:text-[#85bb65] font-normal'>
            <Link to='/account'>Account</Link>
          </li>*/}
          <li onClick={handleNav} className='border-b py-6 hover:text-[#85bb65] font-normal'>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
        {/*<div className='flex flex-col w-full p-4'>
          <Link to='/signin'>
            <button
              onClick={handleNav}
              className='w-full my-2 p-3 bg-white font-normal text-primary border-secondary shadow-md hover:shadow-lg'>
              Sign In
            </button>
          </Link>
          <Link onClick={handleNav} to='/signup'>
            <button className='w-full mt-2 mb-24 p-3 bg-[#85bb65] font-normal text-white shadow-md hover:shadow-lg'>
              Sign Up
            </button>
          </Link>
        </div>*/}
      </div>
    </div>
  );
};

export default Navbar;