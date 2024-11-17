import React from 'react'
import './modal.css'
export default function Modal({onClose, children}) {
  
  return (
    <div className='modal'>
       <div className="modal-content">
        <span className="close-btn"  onClick={onClose}> &times;</span>
        <br/><br/>
        {children}
      </div>

      
    </div>
  )
}
