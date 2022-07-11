import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import notlike from '../../img/notlike.png'
const Post = ({data}) => {
  return (
    <div className='Post'>
      <img src={data.img} alt=""/>
      <div className="postReact">
        <img src={data.liked?Like:notlike} alt=''/>
        <img src={Comment} alt=''/>
        <img src={Share} alt=''/>
      </div>
      <span>{data.likes} Likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
