import React from 'react';
import './sideNav.css';
import churchLogo from './churchLogo.png';
import { Link } from 'react-router-dom';
export default function SideNav({setIsAuthModalOpen, modalToggle,isOpen}) { 
   
const handleLogout=() => {
  setIsAuthModalOpen(true)
}

  return (
    <div className={`side-nav ${isOpen ? 'expanded':'collapsed'}`}>
         <div className="group-info">
          <Link to='/'> <img src={churchLogo} className="group-img" alt="church logo"/></Link>
    
            <h5 className={`group-name ${isOpen ?'shown':'hidden'}`}>Church Quest</h5>
          
         </div>
         <nav> 
                 <div className={`side-nav-inner ${isOpen?'shown-nav-text':'hidden-nav-text'}`}>
            
            <p  className="side-nav-links">
              <Link className='link' to="/dashboard" >
              <i className="fa-solid fa-table-columns"></i><span className="nav-link">Dashboard</span></Link>
              </p>
            <p  className="side-nav-links"  onClick={()=>modalToggle("Convert")}><Link className='link'  ><i className="fa-solid fa-user-plus"></i><span className="nav-link"  >Collect</span></Link></p>
            <p  className="side-nav-links"><Link className='link' to="/dashboard/members" ><i className="fa-solid fa-people-group"></i><span className="nav-link">Members</span></Link></p>
            <p  className="side-nav-links"><Link className='link' to="/dashboard/settings" ><i className="fa-solid fa-gears"></i><span className="nav-link">Settings</span></Link></p>
            <p  className="side-nav-links" onClick={handleLogout} ><Link className='link'><i className="fa-solid fa-door-open"></i><span  className="nav-link">Log Out</span></Link></p>

            </div>
         </nav>
    </div>
  )
}