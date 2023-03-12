import React from 'react'

const Tech = () => {
  return (
    <div>
        <>
        <div className='mt-8'></div><div className=' max-w-[1140px] w-full mx-auto text-primary shadow-xl mb-8 border border-[#85bb65] p-3'>
            <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=b6d85f9a05d2d3543231a9653" title='NewsFeed' className="flex max-w-[1140px] w-full h-[800px] mx-auto"></iframe>
            {/* <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=b6d85f9a05d2d3543231a9653" allowtransparency="true" style="border:0;background-color: transparent;width:100%;height:800px" ></iframe> */} 
        </div>
                        
        

        
        
        <div className='flex flex-col sm:flex-row mt-8 max-w-[1140px]  w-full  mx-auto text-primary shadow-xl mb-8 border border-[#85bb65]'>
            <div className='sm:w-[50%] sm:border border-r-[#85bb65] pt-1'>
            <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=b48af8c7d0ef0c5aefbcd8269" title='Thumbnails' className="flex max-w-[1140px] w-[100%] h-[933px] mr-auto"></iframe>           
            </div>

            <div className='w-full sm:w-[50%] h-[933px] mx-auto flex-col px-3'>
              <iframe  width="100%" height="311px" className='flex pt-3' src="https://www.youtube.com/embed/pOmpqdlVCoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>
              <iframe  width="100%" height="311px" className='flex pt-3 ' src="https://www.youtube.com/embed/jJpCB5Puubs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>
              <iframe  width="100%" height="311px" className='flex pt-3 pb-3' src="https://www.youtube.com/embed/S9tnPr4KIEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>     
            </div>
        </div>

        <div className='mt-8'></div><div className=' max-w-[1140px]  w-full mx-auto text-primary shadow-xl  border border-[#85bb65] p-1'>
            <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=32c153717c4e5cc9b923122df" title='Thumbnails' className="flex max-w-[1140px] w-[100%] h-[900px] mx-auto "></iframe>
        </div>
        
        <div className='mt-8'></div><div className='max-w-[1140px] w-full mx-auto text-primary shadow-xl px-3 pt-3 mb-8 border border-[#85bb65] '>
            <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=cbb542372c059f7bab5ebaf58" title='NewsFeed' className="flex max-w-[1140px] w-full h-[500px] mx-auto"></iframe>
        </div>

        <div className='flex flex-col sm:flex-row mt-8 max-w-[1140px]  w-full  mx-auto text-primary shadow-xl mb-8 border border-[#85bb65]'>
            <div className='w-full sm:w-[50%] h-[622px] mx-auto flex-col px-3'>             
              <iframe  width="100%" height="311px" className='flex pt-3 ' src="https://www.youtube.com/embed/d60kfCDJKRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>
              <iframe  width="100%" height="311px" className='flex pt-3 pb-3' src="https://www.youtube.com/embed/3DMKp_2pxeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>     
            </div>  
            
            <div className='sm:w-[50%] sm:border border-r-[#85bb65] pt-1'>
            <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=3afbae6d6d924c44bb160f587" title='Thumbnails' className="flex max-w-[1140px] w-[100%] h-[606px] mr-auto "></iframe>
            </div>
        </div>    
        </>
    </div>
  )
}

export default Tech