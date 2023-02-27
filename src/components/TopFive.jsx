import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinItem from './CoinItem';
import { Link} from 'react-router-dom';

const TopFive = () => {

    const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, [url]);

  return (
    <div className='rounded-div'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right '>
      <h1 className='text-2xl font-bold mx-4 text-algn:center text-[#070707]'>Today's Top 5</h1>
      <Link to='/SearchCrypto' className='bg-[#85bb65] text-white font-normal px-4 p-2 w-full shadow-md hover:shadow-lg lg:w-auto '>Top 100</Link>
    </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {return value;
})
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopFive