import React from 'react'
import Newsfeed from '../components/Newsfeed'
import TopFive from '../components/TopFive'
import Trending from '../components/Trending'
import Video from '../components/Video'


const Home = () => (

  <div>
    <Newsfeed />  
    <TopFive /> 
    <Video />
    <Trending />
    
  </div>

)

export default Home

