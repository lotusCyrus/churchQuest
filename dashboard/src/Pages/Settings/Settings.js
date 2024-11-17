import React from 'react'
import './Settings.css'
import profileImage from '../../components/nav/topBar/profileImage.png'
import modeIcon from '../../../src/assets/lightDarkMode.svg'
import { useTheme } from '../../hooks/useTheme'
export default function Settings() {
   
   const {mode, changeMode, changeBackgroundColor}=useTheme()
   
   const toggleMode = () => {
      changeMode(mode === 'dark' ? 'light' : 'dark' )
   }

   console.log(mode)
   return (
    
               
    <div className="settings-box">
                

    <div className="settings-nav">
          <ul>
             <li> <i className="fa-solid fa-gears"></i>  <h3 className="settings-nav-text">Settings</h3> </li>

             <li> <i className="fa-solid fa-user"></i> <span className="settings-nav-text">Your Profile</span> </li>
             <li> <i className="fa-solid fa-sun" style={{filter: mode === 'white' ? 'invert(20%)' : 'invert(50%)' }} onClick={toggleMode}   ></i> <span className="settings-nav-text" >Light/Dark Mode</span> </li>
             <li> <i className="fa-solid fa-star-half-stroke"></i> <span className="settings-nav-text">Product Feedback</span> </li>
    
          </ul>
       </div>
       
       
       <div className="settings-board">
          <div className="profile-name"> <span><b>Johnson</b> </span>  <span className="profile-change delete">(Change)</span></div>  
          <div className="profile-pic">    <img src={profileImage} className="user-img" alt="" />  <span className="profile-upload-text"> Upload New Picture</span> <span className="delete">Remove</span></div>
      
            
             <form action="#" className="profile-form">
                   <span>Email address</span> 
                   
                  <div className="profile-input-container">
                   <input className="profile-email profile-input" placeholder="your-domain@gmail.com" type="email" />
                   <button className="theme profile-button">Update</button> <br/>
                  </div> 
             </form>
                 
               <form action="#" className="profile-form">

                   <span>Password</span>
       
                   <div className="profile-input-container">
                      <input className="profile-pass profile-input"  placeholder="**********" type="password" /><button className="theme profile-button">Update</button>
                   </div>
                   
                    
             </form>
             

               <div className="delete-account">
                  <span><span className="delete">Delete account</span><br/><br/>
                By deleting this account, you will loose all your contacts and their data. Are you sure about this?
               </span>
                <button className="profile-button delete-bg">Delete</button>
               </div>

           
                  
      </div>


  </div>
  )
}
