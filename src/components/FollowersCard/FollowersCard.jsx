import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
      <h3>Followers</h3>
      {Followers.map((followers,id)=>{
        return(
            <div className="followers">
                <div>
                    <img src={followers.img} alt=""/>
                    <div className='Name'>
                        <span>{followers.name}</span>
                        <span>@{followers.username}</span>
                    </div>
                </div>
                <button className='button fc-button'>
                    Follow
                </button>
            </div>
        )
      })}
    </div>
  )
}

export default FollowersCard
