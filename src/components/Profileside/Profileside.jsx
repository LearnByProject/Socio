import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Profileside.css'
const profileside = () => {
  return (
    <div className='Profileside'>
      <LogoSearch/>
      <ProfileCard/>
    </div>
  )
}

export default profileside
