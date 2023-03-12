import React from 'react'

const Thumbnails = () => {
    return (  
        <><div className='mt-8'></div><div className=' max-w-[1140px]  w-full mx-auto text-primary shadow-xl mb-8 border border-[#85bb65]'>
          <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=47a068add2a6c1d9aabcccd19" title='Thumbnails' className="flex max-w-[1140px] w-[100%] h-[1000px] mx-auto "></iframe>  {/* <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=47a068add2a6c1d9aabcccd19" allowtransparency="true" style="border:0;background-color: transparent;width:100%;height:600px" ></iframe> */}
        </div>

        <div className='mt-8'></div><div className='max-w-[1140px] w-full mx-auto text-primary shadow-xl px-3 pt-3 mb-8 border border-[#85bb65] '>
            <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=7558c693cb8a23aa216f18aa8" title='NewsFeed' className="flex max-w-[1140px] w-full h-[500px] mx-auto"></iframe>
            {/* <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=7558c693cb8a23aa216f18aa8" allowtransparency="true" style="border:0;background-color: transparent;width:100%;height:500px" ></iframe> */} 
        </div>

        <div className='flex flex-col sm:flex-row mt-8 max-w-[1140px]  w-full  mx-auto text-primary shadow-xl mb-8 border border-[#85bb65]'>
            <div className='sm:w-[50%] sm:border border-r-[#85bb65] pt-1'>
            <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=cc2a71c87683f30ba9b48ba58" title='Thumbnails' className="flex max-w-[1140px] w-[100%] h-[933px] mr-auto"></iframe>            
            </div>

            <div className='w-full sm:w-[50%] h-[933px] mx-auto flex-col px-3'>
              <iframe  width="100%" height="311px" className='flex pt-3' src="https://www.youtube.com/embed/evf-i7hds2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>
              <iframe  width="100%" height="311px" className='flex pt-3 ' src="https://www.youtube.com/embed/QxtDCdbw3Xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>
              <iframe  width="100%" height="311px" className='flex pt-3 pb-3' src="https://www.youtube.com/embed/OCNfltV5S1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>     
            </div>
        </div>        
        </>
      )
    }
    
    export default Thumbnails