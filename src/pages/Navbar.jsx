import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import "./Navbar.css"

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
     try{
      await logOut()
     } 
     catch (error) {
      console.log(error);
     }
    }
  return (
    <div>
         <nav>
                <div className="header">
                <h1 className='logo'>Random User</h1>
                </div>
                <div className={Mobile? 'nav-links-mobile' : "nav-links"} onClick={() => setMobile(false)}>
                    <Link to='/' className="navbar-item"><li>Home</li></Link>
              <Link to='/about' className="navbar-item"><li>About</li></Link>
              <Link to='/users' className="navbar-item"><li>Users</li></Link>
              {user?.displayName ?( <a onClick={handleSignOut}><li>LogOut</li></a>) : (<Link to='/signup' className='navbar-item'><li>Sign Up</li></Link>)}
              </div>
                <button className="mobile-menu-icons" onClick={() => setMobile(!Mobile)}>
                          {Mobile? <FaTimes className='fatimes'/> : <FaBars className='fabars'/>}
                        </button>
            </nav>
    </div>
  )
}

export default Navbar