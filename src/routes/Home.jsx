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
    <Trending />
    <Thumbnails />
    
    
  </div>

)

export default Home

