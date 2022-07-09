import React from 'react'
import './Home.css'
import Profileside from '../../components/Profileside/Profileside'
const Home = () => {
  return (
    <div className='Home'>
        <Profileside/>
        <div className="postside">Post</div>
        <div className="rightside">RightSide</div>   
    </div>
  )
}

export default Home
