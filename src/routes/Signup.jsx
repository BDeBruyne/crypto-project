import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email,password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className='rounded-div mt-8'>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl text-[#85bb65]'>Sign Up</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative shadow-md'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border border-[#85bb65]'
                type='email'
              />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative shadow-md'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 border border-[#85bb65]'
                type='password'
              />
              <AiFillLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-[#85bb65] text-white shadow-md hover:shadow-lg'>
            Sign up
          </button>
        </form>
        <p className='my-4'>
          Already have an account?{' '}
          <Link to='/signin' className='text-accent'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
