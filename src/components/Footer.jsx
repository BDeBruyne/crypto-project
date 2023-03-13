import React, { useState } from 'react';
import { Link,  useNavigate} from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTiktok, FaTwitter,} from 'react-icons/fa';


const Footer = () => {

 
  
    const handleNav = () => {
      setNav(!nav);
    };const [nav, setNav] = useState(false);
const navigate = useNavigate();



  return (
    <div className='px-2 max-w-[1140px] w-full mx-auto mt-8 pt-8 mb-12 text-primary border-t-2 border-[#85bb65]'>
      <div className='grid md:grid-cols-2'>
        <div className='flex flex-row justify-center w-full md:max-w-[300px] uppercase'>
          <div>            
            <ul>
              <li onClick={handleNav}  className='text-sm font-bold-light py-2 px-2 hover:text-[#85bb65]'><Link to='AboutUs'>About</Link></li>
              
              <li onClick={handleNav} className='text-sm font-bold-light py-2 px-2 hover:text-[#85bb65]'><Link to='Careers'>Careers</Link></li>
              <li onClick={handleNav} className='text-sm font-bold-light py-2 px-2 hover:text-[#85bb65]'><Link to='Contact'>Contact</Link></li>
            </ul>
          </div>

          <div className='pl-10'>
            <ul>
              <li onClick={handleNav}  className='text-sm font-bold-light py-2 px-2 hover:text-[#85bb65]'><Link to='/'>Crypto</Link></li>
              
              <li onClick={handleNav} className='text-sm font-bold-light py-2 px-2 hover:text-[#85bb65]'><Link to='Business'>Business</Link></li>
              <li onClick={handleNav} className='text-sm font-bold-light py-2 px-2 hover:text-[#85bb65]'><Link to='Tech'>Tech</Link></li>
            </ul>
          </div>
        </div>

        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-2 relative'>
              
              <div className='flex pt-8 justify-between text-[#070707]'>
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
      <p className='text-center pt-4 text-sm text-[#85bb65]'>Information provided on this site is for general informational purposes only and does not constitute financial or investment advice.</p>
      <p className='text-center pt-2 pb-2 text-xs text-[#85bb65]'>Copyright &copy; 2023 All Rights Reserved by FinTech Media Corp.</p>
      </div>    
   </div>  
  );
};

export default Footer;
