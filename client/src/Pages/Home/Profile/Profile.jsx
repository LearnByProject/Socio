import React from 'react'
import Postside from '../../../components/Postside/Postside'
import ProfileCard from '../../../components/ProfileCard/ProfileCard'
import Profileleft from '../../../components/Profileleft/Profileleft'
import RightSide from '../../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className='Profile'>
        <Profileleft/>
        <div className="Profile-center">
            <ProfileCard location="profilePage"/>
            <Postside/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile
