import React from 'react'
import './Home.css'
import Profileside from '../../components/Profileside/Profileside'
import Postside from '../../components/Postside/Postside'
const Home = () => {
  return (
    <div className='Home'>
        <Profileside/>
        <Postside/>
        <div className="rightside">RightSide</div>   
    </div>
  )
}

export default Home
