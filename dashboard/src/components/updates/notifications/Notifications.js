import React from 'react'
import Checklist from './checklist.png'
import Calendar from './calendar.png'
export default function Notifications() {
  return (
    <div class="notifications">
    <p>Notifications</p>


     <div class="notification-card">
        <span class="notification-icon meeting-bg"><img src={Calendar}  width="12px" height="12px" alt=""/>  </span> 
        <div class="notification-info">
            <span class="notification-title"><b>Meeting</b><br/>
             <span class="notification-highlight"> Meeting with Chinedum by 4pm</span> 
           </span>
        </div>
        <div class="notification-time"> 
           In 3 hours time
        </div>

        <div class="notification-option">
           <i class="fa-solid fa-ellipsis"></i>    
       </div>
          

      </div>
  

     <div class="notification-card">
        <span class="notification-icon todo-bg"><img src={Checklist} width="14px" height="12px" alt=""/>  </span> 
        <div class="notification-info">
            <span class="notification-title"><b>To-do</b><br/>
             <span class="notification-highlight"> To-do list for the day</span> 
           </span>
        </div>
        <div class="notification-time"> 
           In 3 hours time
        </div>

        <div class="notification-option">
           <i class="fa-solid fa-ellipsis"></i>    
       </div>
     </div>
  </div>
  )
}
