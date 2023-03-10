import React from 'react'
import CoinSearch from '../components/CoinSearch'


const SearchCrypto = ({coins}) => {
  return (
    <div className='mt-8'>
        <CoinSearch coins={coins} />
    </div>
  )
}

export default SearchCrypto