import React from 'react'
import Posts from '../Posts/Posts'
import Postshare from '../Postshare/Postshare'
import './Postside.css'
const Postside = () => {
  return (
    <div className='Postside'>
      <Postshare/>
      <Posts/>
    </div>
  )
}

export default Postside
