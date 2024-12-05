import React, { useContext } from 'react'
import './topBar.css'
import profileImage from './profileImage.png'
import { Link } from 'react-router-dom'
import { useUser } from '../../../context/UserContext'

export default function TopBar({toggleSideNav, isOpen}) {   
  const {user}=useUser()


  return (
    <div className={`top-bar ${isOpen?'open':'close'}`} >
          
            <div className={`hamburger ${isOpen?'open':'close'}`} onClick={toggleSideNav}>
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
 
            </div>

          <div className="search-box">
            <i className="fa fa-search"></i>
            <input type="text"  placeholder="search member" className="search-input"/>

          </div>
          
          <Link to='/dashboard/Settings' className='top-bar-link'>
          <div className="user">
             <img src={profileImage} className="user-img" alt="" />
             <div className="user-info">
            
                <span className="user-name">
                  
                  {user && user.churchName} </span> <br/>
                <span className="user-title"> Super Admin</span>
             </div>
          </div> 
          </Link>
    </div>
  )
}
