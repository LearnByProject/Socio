import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../Data/TrendCardData'
const TrendCard = () => {
  return (
    <div className='TrendCard'>
      <h3>Trends for you</h3>
      {TrendData.map((trend,id)=>{
        return(
            <div className="trend" key={id}>
                <span>#{trend.name}</span>
                <span>{trend.shares}k Shares</span>
            </div>
        )
      })}
    </div>
  )
}

export default TrendCard
