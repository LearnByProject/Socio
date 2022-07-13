import React from 'react'
import './Auth.css'
import Logo from './../../../img/logo.png'
const Auth = () => {
  return (
    <div className='Auth'>
      <div className="a-left">
        <img src={Logo} alt=''/>
        <div className="Webname">
            <h1>H.R.U.</h1>
            <h4>Welcome  Lets Connect to World ! ! ! </h4>
        </div>
      </div>
      {/* <Signup/> */}
      <LogIn/>
    </div>
  )
}
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoform authform">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function Signup(){
    return(
        <div className="a-right">
            <form action="" className="infoform authform">
                <h3>Sign Up</h3>
                <div>
                    <input type='text' placeholder='First Name' className='infoInput' name='firstname' />
                    <input type='text' placeholder='Last Name' className='infoInput' name='lastname' />
                </div>
                <div>
                    <input type='text' placeholder='Username' className='infoInput' name='username' />
                </div>
                <div>
                    <input type='text' placeholder='Password' className='infoInput' name='password' />
                    <input type='text' placeholder='Confirm Password' className='infoInput' name='confirm password' />
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account. Login!!!</span>
                </div>
                <button className="button infoButton" type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Auth
