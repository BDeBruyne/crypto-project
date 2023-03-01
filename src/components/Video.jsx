import React from 'react'
import { Link} from 'react-router-dom';

const Video = () => {
  return (
    <div className='flex mx-auto max-w-[1140px] shadow-xl my-8 border border-[#85bb65]'>
    <div className='shadow-lg'></div>
    <div className='px-2  w-full mx-auto py-2'>
    <div className='flex-col sm:flex-row'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/MfY45cJptao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/spa4rC-7tt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className='flex-col sm:flex-row'>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/xQllY6dzmDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/rNi121-J_v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
    
    </div>
  )
}

export default Video