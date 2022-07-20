import React,{useState,useRef} from 'react'
import './Postshare.css'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule , UilTimes } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../Actions/uploadAction.js'
const Postshare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  // const loading = useSelector((state)=>state.postReducer.uploading)
  // const[image,setImage]=useState(null);
  // const imageRef=useRef();
  // const desc = useRef();
  // const dispatch = useDispatch();
  // const {user} =  useSelector((state)=>state.authReducer.authData)
  // const reset = () =>{
  //   setImage(null);
  //   desc.current.value=""
  // };
  // const handlesubmit =(e)=>{
  //   e.preventDefault();
  //   const newPost ={
  //     userId : user._id,
  //     desc : desc.current.value 
  //   }
  //   if(image){
  //     const data = new FormData()
  //     const filename = Date.now() + image.name;
  //     data.append("name",filename)
  //     data.append("file",image)
  //     newPost.image = filename 
  //     console.log(newPost)
  //     try {
  //       dispatch(uploadImage(data))
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   dispatch(uploadPost(newPost))
  //   reset();
  // }
  // const onImageChange =(event)=>{
  //   if(event.target.files && event.target.files[0])
  //   {
  //     let img = event.target.files[0];
  //     setImage(img);
  //   }
  // };
 
  return (
    <div className='Postshare'>
      <img src={ user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"} alt='' />
      <div>
        <input required ref={desc} type='text' placeholder="What is happenning?" />
        <div className="postOptions">
          <div className="option" style={{color:"var(--photo)"}} onClick={()=>imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{color:"var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{color:"var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{color:"var(--schedule)"}}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" disabled={loading} onClick={handleUpload}>{loading ? "Uploading...":"Share"}</button>
          <div style={{display:'none'}}>
            <input type='file' name='MyImage' ref={imageRef} onChange={onImageChange}/>
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes  onClick={()=>setImage(null)}/>
            <img src={URL.createObjectURL(image)} alt=''/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Postshare
