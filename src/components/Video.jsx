import React from 'react'
import { Link} from 'react-router-dom';

const Video = () => {
  return (
    <div>
    <div className='py-6'></div>
    <div className='px-2 max-w-[1140px] w-full mx-auto mb-12 pt-20 pb-16'>
    <div className='flex'>
        <iframe width="50%" height="315" src="https://www.youtube.com/embed/MfY45cJptao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="50%" height="315" src="https://www.youtube.com/embed/spa4rC-7tt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className='flex'>
    <iframe width="50%" height="315" src="https://www.youtube.com/embed/xQllY6dzmDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="50%" height="315" src="https://www.youtube.com/embed/rNi121-J_v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
    
    </div>
  )
}

export default Video