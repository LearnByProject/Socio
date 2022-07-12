import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
const InfoCard = () => {
  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width='2rem' height='1.2rem'/>
        </div>
      </div>
      <div className="info">
        <span>
            <b>Status</b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
            <b>Lives</b>
        </span>
        <span>in London</span>
      </div>
      <div className="info">
        <span>
            <b>Work</b>
        </span>
        <span>at Google</span>
      </div>
      <button className="button logout-button">Log out</button>
    </div>
  )
}

export default InfoCard
