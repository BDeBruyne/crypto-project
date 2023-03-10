import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      //   console.log(response.data.coins)
    });
  }, []);

  return (
    <div className='flex flex-col sm:flex-row border shadow-xl px-2 max-w-[1140px] w-full mx-auto border-[#85bb65] mt-9'>
      <div className='px-2 max-w-[760px] w-full mx-auto mb-8 py-2 flex-col scrollbar-hide'>
      <iframe  width="96%" height="293" className='flex  mt-6 mb-2 mx-auto pt-4' src="https://www.youtube.com/embed/rNi121-J_v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>
      <iframe width="100%" height="319" src="https://www.feedgrabbr.com/inframe/?widgetid=7558c693cb8a23aa216f18aa8" title="news" className='flex mt-'  ></iframe>      
      </div>
      <div className='pl-1 pr-5 max-w-[380px] w-full mx-automb-8 py-2 mx-auto'>
        <h1 className='text-[15pt] font-bold pb-2 text-center text-[#070707]'>Trending Coins</h1>
        <div className='grid grid-cols'>
          {trending.map((coin, idx) => (
            <div key={idx} className='border shadow-md px-2  w-full mx-auto border-[#85bb65] flex justify-between p-4 hover:scale-95 ease-in-out duration-300'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex'>
                  <img
                    className='mr-4'
                    src={coin.item.small}
                    alt='/'
                  />
                  <div>
                    <p className='font-bold  text-[#070707]'>{coin.item.name}</p>
                    <p className=''>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img
                    className='w-4 mr-2'
                    src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                    alt='/'
                  />
                  <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Trending;