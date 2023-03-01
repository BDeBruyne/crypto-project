import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import axios from 'axios';
import CoinPage from './routes/CoinPage';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';
import SearchCrypto from './routes/SearchCrypto';
import News from './routes/News';
import Video from './routes/Video';

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, [url]);

  return (
    
      <AuthContextProvider>
        <Navbar />        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchCrypto' element={<SearchCrypto coins={coins} />} />
          <Route path='/news' element={<News />} />
          <Route path='/video' element={<Video />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
          <Route path=':coinId' />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
  );
}

export default App;
