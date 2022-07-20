import React, { useEffect } from 'react'
import './InfoCard.css'
import {VscEdit} from "react-icons/vsc"
import { useState } from 'react'
import Profilemodel from '../Profilemodel/Profilemodel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../API/Userrequest.js'
import { logout } from '../../Actions/Authaction.js'
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const dispatch = useDispatch()
  const params = useParams()
  const profileUserId = params.id
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const handleLogOut = ()=> {
    dispatch(logout())
  }
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser)
      }
    };
    fetchProfileUser();
  }, [user]);
  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your Info</h4>
        {user._id === profileUserId ? (
          <div>
            <VscEdit style={{cursor:"pointer"}} width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
            <Profilemodel modalOpened={modalOpened} setModalOpened={setModalOpened} data={user}/>
          </div>) : ("")}
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives</b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Work</b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <button className="button logout-button" onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default InfoCard
