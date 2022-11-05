import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import {UserAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import "./Login.css"

const Login = () => {
  const {googleSignIn, user} = UserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () =>{
    try{
      await googleSignIn()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
  if(user != null) {
    navigate('/account')
  }
  },[user])
  return (
    <div className='login-wrapper'>
        <Helmet>
        <title>Sign Up</title>
        <meta name='description' content='Sign Up to use our services'/>
        <link rel="cononical" href="/signup" />
      </Helmet>
        <h1>SignUp</h1>
        <div className="google__button">
        <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
    </div>
  )
}

export default Login