import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import notlike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../../API/Postrequest'
const Post = ({data}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  return (
    <div className='Post'>
      <img  src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt="" />
      <div className="postReact">
        <img src={liked?Like:notlike}  style={{cursor:"pointer"}} onClick={handleLike} alt=''/>
        <img src={Comment} alt=''/>
        <img src={Share} alt=''/>
      </div>
      <span>{likes} Likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
