// import React, { useEffect } from 'react'
// import { PostsData } from '../../Data/PostData'
// import Post from '../Post/Post'
// import { useDispatch,useSelector } from 'react-redux'
// import './Posts.css'
// import { getTimelinePosts } from '../../Actions/Postaction'
// import { useParams } from 'react-router-dom'
// const Posts = () => {
//   const params = useParams()
//   const dispatch = useDispatch();
//   const {user} = useSelector((state)=>state.authReducer.authData)
//   let { posts, loading } = useSelector((state) => state.postReducer);
//   if(!posts) return 'No Posts';
//   if(params.id) posts = posts.filter((post)=> post.userId===params.id)
//   useEffect(()=>{
//     dispatch(getTimelinePosts(user._id))
//   },[])
//   return (
//     <div className='Posts'>
//       {loading ? "Fetching Post...":
//       posts.map((post,id)=>{
//         return <Post data={post} id={id}/>
//       })}
//     </div>
//   )
// }

// export default Posts

import React, { useEffect } from "react";
import { getTimelinePosts } from "../../Actions/Postaction.js";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)
  return (
    <div className="Posts">
      {loading
        ? "Fetching posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
