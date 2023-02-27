import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaFacebookF,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import { Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-2 max-w-[1140px] w-full mx-auto mt-8 pt-8 mb-12 text-primary border-t-2 border-[#85bb65]'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold text-[#070707]'>Support</h2>
            <ul>
              <li className='text-sm py-2'>Help Center</li>
              <li className='text-sm py-2'>Contact Us</li>
              <li className='text-sm py-2'>API Status</li>
              <li className='text-sm py-2'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-[#070707]'>Info</h2>
            <ul>
              <li className='text-sm py-2'>About Us</li>
              <li className='text-sm py-2'>Careers</li>
              <li className='text-sm py-2'>Invest</li>
              <li className='text-sm py-2'>Legal</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <p className='text-center md:text-right'>Sign up for crypto news</p>
              <div className='py-4'>
                <form>
                  <input className='border border-[#85bb65] p-2 mr-2 w-full shadow-md md:w-auto' type='email' placeholder='Enter your email' />
                  <Link to='/signup' className='bg-[#85bb65] text-white font-normal px-4 p-2 w-full shadow-md hover:shadow-lg md:w-auto my-2'>Sign up</Link>
                </form>
              </div>
              <div className='flex pt-2 pb-4 justify-between text-[#070707]'>
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <p className='text-center pt-4 pb-2 text-xs text-[#85bb65]'>Copyright &copy; 2023 All Rights Reserved by FinTech Media Corp.</p>
      </div>    
   </div>  
  );
};

export default Footer;
