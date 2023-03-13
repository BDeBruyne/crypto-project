import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState('');
  console.log(coins)
  return (
    <div className='rounded-div '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pl-2 pb-6 text-center md:text-right'>
        <div className='flex flex-col'>
        <h1 className='text-2xl text-[#85bb65]'>Top 100 Crypto Coins by Market Capitalization</h1>
        <h2 className='text-xs text-[#85bb65] sm:text-center'>SELECT COIN FOR DETAILED VIEW</h2>
        </div>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className='w-full border border-[#85bb65] px-4 py-2 shadow-md'
            type='text'
            placeholder='Search a coin'
          />
        </form>
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
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;