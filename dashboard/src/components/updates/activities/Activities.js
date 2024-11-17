import React from 'react'
import '../Updates.css'

export default function Activities() {
  return (
    <div  className="activities">
    <p>Activities</p>
    <div className="activities-board">
             <div className="activity-card">
               <div className="activity-info">
                 <p className="activity-name signup-color">Signup</p>
                 <span className="activity-highlight">You just <span className="signup-color"> created</span> you account</span><br/>
                 <span className="activity-time">10 minute(s) ago</span>

               </div>   
               <button className="activity-button convert-color"> <span className="fa-solid fa-pen-to-square"></span><span> View </span> </button>
             </div>
             <div className="activity-card">
                <div className="activity-info">
                  <p className="activity-name deletion-color">Deletion</p>
                  <span className="activity-highlight">You just <span className="deletion-color">deleted</span> a member's contact </span><br/>
                  <span className="activity-time">30 minute(s) ago</span>

                </div>   
                <button className="delete-bg activity-button"><span  className="fa-solid fa-clock"> </span> <span>Restore</span> </button>
              </div>
    </div>            

 </div>
  )
}
