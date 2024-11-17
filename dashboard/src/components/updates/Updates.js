import React from 'react'
import Activities from './activities/Activities'
import Notifications from './notifications/Notifications'
import './Updates.css'
export default function Updates() {
  return (
    <div className='updates'>

       <Activities/>
       <Notifications/>
    </div>
  )
}
