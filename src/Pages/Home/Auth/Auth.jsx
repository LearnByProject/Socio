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
            <h4>Welcome,Lets Connect to World!!!</h4>
        </div>
      </div>
      <Signup/>
    </div>
  )
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
            </form>
        </div>
    )
}

export default Auth
