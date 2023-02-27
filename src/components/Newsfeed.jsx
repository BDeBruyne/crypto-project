import React from 'react'
import { Link } from 'react-router-dom';

const Newsfeed = () => {
  return (  
    <><div className='mt-10'></div><div className='px-2 max-w-[1140px] w-full mx-auto mb-16 pt-10 text-primary '>
      <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=28bbdae609e5f2aa49cbb4f08" title='NewsFeed' className="flex max-w-[1140px] w-full h-[940px] mx-auto pt-4"></iframe>
    </div></>
  )
}

export default Newsfeed