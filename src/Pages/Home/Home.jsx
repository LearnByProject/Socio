import React from 'react'
import './Home.css'
import Profileside from '../../components/Profileside/Profileside'
import Postside from '../../components/Postside/Postside'
import RightSide from '../../components/RightSide/RightSide'
const Home = () => {
  return (
    <div className='Home'>
        <Profileside/>
        <Postside/>
        <RightSide/>
    </div>
  )
}

export default Home
