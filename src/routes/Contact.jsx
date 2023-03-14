import React from 'react'

const Contact = () => {
  return (

    <div className='rounded-div mt-8'>
    <div className=' max-w-[800px] mx-auto min-h-[600px] px-4 py-20'>
      <h1 className='text-2xl text-[#85bb65]'>Contact</h1>
      <form  method='POST' action="https://getform.io/f/4a112e51-5a66-41c8-ae95-917c5c881b3e">
      <div className='my-4'>
          <label>Name</label>
          <div className='my-2 w-full relative shadow-md'>
            <input              
              className='w-full p-2 border border-[#85bb65]'
              type='name'
            />            
          </div>
        </div>

        <div className='my-4'>
          <label>Email</label>
          <div className='my-2 w-full relative shadow-md'>
            <input              
              className='w-full p-2 border border-[#85bb65]'
              type='email'
            />            
          </div>
        </div>

        <div className='my-4'>
        <label>Message</label>
        <textarea className='w-full border border-[#85bb65] shadow-md'name="message" rows="6">          
        </textarea>
        </div>

        <button className='w-[100px]  p-2 bg-[#85bb65] text-white shadow-md hover:shadow-lg'>
          Submit
        </button>
      </form>
      
    </div>
  </div>
    

    


  )
}

export default Contact   
 {/*<div>
        <div className='rounded-div mt-8'>
        <form method='POST' action="https://getform.io/f/1adffb66-25b7-46a3-b8ab-c4b33bf32f05" className='flex flex-col w-full text-black'>
               <div className=''>
                  <p className='text-2xl text-[#85bb65] '>Contact</p>
                  <p className='pb-6'>Get in touch by email or reach out on social media. <br></br></p>
              </div>
              <input className='shadow-sm shadow-black border-[#85bb65] b-2 bg-white p-2' type="text"  placeholder='Name' name='name'/>
              <input className='shadow-sm shadow-black my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
              <textarea className='shadow-sm shadow-black bg-white p-2' name="message" rows="6" placeholder='Message'></textarea>
              <button className='text-[#000000] text-lg hover:scale-95 hover:text-[#85bb65] duration-100  px-4 py-4 mx-auto flex items-center'>Submit</button>
          </form>
  </div>
    </div>*/}