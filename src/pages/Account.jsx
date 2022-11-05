import React from 'react'
import { UserAuth } from '../context/AuthContext'
import './Account.css'

const Account = () => {
  const {logOut, user} = UserAuth()

  const handleSignOut = async () => {
    try{
     await logOut()
    } 
    catch (error) {
     console.log(error);
    }
   }

  return (
    <div className='account__wrapper'>
        <div className="account">
            <p>Welcome, {user?.displayName}</p>
        </div>
        <button className='account__btn' onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Account