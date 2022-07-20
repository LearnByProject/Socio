import React, { useState } from 'react'
import './Auth.css'
import Logo from './../../../img/logo.png'
import {useDispatch, useSelector} from 'react-redux'
import { logIn } from '../../../Actions/Authaction'
import { signUp } from '../../../Actions/Authaction'
import {useNavigate} from 'react-router-dom'
const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignup,setisSignup] = useState(false)
  const navigate = useNavigate();
  console.log(loading)
  const [data , setdata ] = useState({firstname:"",lastname:"",username:"",password:"",confirmpassword:""})
  const [confirmpassword,setconfirmpassword] = useState(true)
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    setconfirmpassword(true);
    e.preventDefault();
    if(isSignup)
    {
      data.password === data.confirmpassword ? dispatch(signUp(data,navigate)) : setconfirmpassword(false);
    }
    else{
      dispatch(logIn(data,navigate))
    }
  }
  const resetForm=()=>{
    setconfirmpassword(true)
    setdata({firstname:"",lastname:"",username:"",password:"",confirmpassword:""})
  }
  return (
    <div className='Auth'>
      <div className="a-left">
        <img src={Logo} alt=''/>
        <div className="Webname">
            <h1>H.R.U.</h1>
            <h4>Welcome  Lets Connect to World ! ! ! </h4>
        </div>
      </div>
      <div className="a-right">
            <form action="" className="infoform authform" onSubmit={handleSubmit}>
                <h3>{isSignup ? "Sign Up":"Login"}</h3>
                {isSignup &&
                <div>
                    <input type='text' placeholder='First Name' className='infoInput' value={data.firstname} name='firstname' onChange={handleChange} />
                    <input type='text' placeholder='Last Name' className='infoInput' name='lastname' value={data.lastname} onChange={handleChange}/>
                </div> 
                }
                <div>
                    <input type='text' placeholder='Username' className='infoInput' value={data.username} name='username' onChange={handleChange} />
                </div>
                <div>
                    <input type='password' placeholder='Password' className='infoInput' value={data.password} name='password' onChange={handleChange} />
                    {isSignup &&
                    <input type='password' placeholder='Confirm Password' className='infoInput' value={data.confirmpassword} name='confirmpassword' onChange={handleChange} />
                    }
                </div>
                <span style={{display:confirmpassword?'none':'block',color:'red',fontSize:'12px',alignSelf:'flex-end',marginRight:'5px'}}>
                  * Confirm Password is not Matching.
                </span>
                <div>
                    <span style={{fontSize:'bold',cursor:'pointer',}} onClick={()=>{setisSignup((prev)=>!prev);resetForm()}}>
                      {isSignup ? "Already have an account. Login!!!" : "Don't have an account? Sign Up"}
                    </span>
                </div>
                <button className="button infoButton" disabled={loading} type='submit'>{loading ? "Loading..." : isSignup ? "Sign Up":"Login"}</button>
            </form>
        </div>
    </div>
  )
}
export default Auth
