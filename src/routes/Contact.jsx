import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='rounded-div mt-8'>
        <form method='POST' action="https://getform.io/f/1adffb66-25b7-46a3-b8ab-c4b33bf32f05" className='flex flex-col w-full text-black'>
               <div className=''>
                  <p className='text-2xl text-[#85bb65] '>Contact</p>
                  <p className='pb-6'>Get in touch by email or reach out on social media. <br></br></p>
              </div>
              <input className='shadow-sm shadow-black bg-white p-2' type="text"  placeholder='Name' name='name'/>
              <input className='shadow-sm shadow-black my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
              <textarea className='shadow-sm shadow-black bg-white p-2' name="message" rows="6" placeholder='Message'></textarea>
              <button className='text-[#000000] text-lg hover:scale-90 hover:text-[#85bb65] duration-500  px-4 py-4 mx-auto flex items-center'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact