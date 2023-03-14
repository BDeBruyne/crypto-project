import React from 'react';
import SavedCoin from '../components/SavedCoin';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-between items-center my-8 py-8 rounded-div'>
          <div>
            <h1 className='text-2xl text-[#85bb65]'>Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className='border bg-[#85bb65] text-white px-6 py-2 shadow-md hover:shadow-lg font-normal'>
              Sign Out
            </button>
          </div>
        </div>
        <div className='flex justfiy-between items-center my-12 py-8 rounded-div'>
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl text-[#85bb65] py-4'>Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to='/signin' />;
  }
};

export default Account;
