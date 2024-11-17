import React from 'react'
import './modal.css'
import './authmodal.css'
import { useState } from 'react'
import churchLogo from '../../assets/churchLogo.png';
import Authform from './Authform';

export default function Authmodal({loginSuccess}) {
   
  return (
    <div className='auth-modal'>
              
            <div className='logo-container'> <img className='logo' src={churchLogo}/> <h4> <a href='#' target="_blank" rel="noopener noreferrer">Church Quest</a> </h4>  </div> 
       
                    
                    <Authform loginSuccess={loginSuccess} />
             

        

               </div>
  )
}
