import React from 'react'
import Newsfeed from '../components/Newsfeed'
import Thumbnails from '../components/Thumbnails'
import TopFive from '../components/TopFive'
import Trending from '../components/Trending'
import Video from '../components/Video'


const Home = () => (

  <div>
    <Newsfeed />  
    <TopFive /> 
    <Video />
    <Thumbnails />
    <Trending />
    
  </div>

)

export default Home

