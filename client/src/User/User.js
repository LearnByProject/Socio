// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { followUser, unfollowUser } from "../Actions/UserAction.js";
// const User = ({ person }) => {
//   // const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
//   const publicFolder = "http://localhost:5000/images/"
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const dispatch = useDispatch()
  
//   const [following, setFollowing] = useState(
//     person.followers.includes(user._id)
//   );
//   const handleFollow = () => {
//     following
//       ? dispatch(unfollowUser(person._id, user))
//       : dispatch(followUser(person._id, user));
//     setFollowing((prev) => !prev);
//   };
//   return (
//     <div className="follower">
//       <div>
//         <img
//           src={
//             publicFolder + person.profilePicture
//               ? publicFolder + person.profilePicture
//               : publicFolder + "defaultProfile.png"
//           }
//           alt="profile"
//           className="followerImage"
//         />
//         <div className="name">
//           <span>{person.firstname}</span>
//           <span>@{person.username}</span>
//         </div>
//       </div>
//       <button
//         className={
//           following ? "button fc-button UnfollowButton" : "button fc-button"
//         }
//         onClick={handleFollow}
//       >
//         {following ? "Unfollow" : "Follow"}
//       </button>
//     </div>
//   );
// };

// export default User;

//
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../Actions/UserAction";
const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  // const publicFolder = "http://localhost:5000/images/"
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  console.log(publicFolder + person.profilePicture)
  return (
    <div className="follower">
      <div>
        <img style={{borderRadius:'50%',width:'3rem',height:'3rem'}}
          src={
            person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}<br></br></span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;