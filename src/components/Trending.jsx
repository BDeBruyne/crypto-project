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
    <div className='flex flex-col sm:flex-row border shadow-xl  max-w-[1140px] w-full mx-auto border-[#85bb65] mt-9'>
       <div className='w-full sm:w-[50%] mx-auto flex-col pl-3 pt-1'>
              <iframe  width="100%" height="311px" className='flex pt-3' src="https://www.youtube.com/embed/0NlHP5e_Aws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>
              <iframe  width="100%" height="311px" className='flex pt-3 mt-1' src="https://www.youtube.com/embed/AiyQana_qvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; allow-full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='allowFullScreen'></iframe>        
      </div>
      <div className='sm:w-[50%] pt-1 pb-3 px-3 '>
        <h1 className='text-2xl pb-2 text-center text-[#85bb65]'>Trending Coins</h1>
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