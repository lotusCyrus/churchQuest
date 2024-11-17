import React from 'react'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import './modal.css'
import './authmodal.css'
import { useTheme } from '../../hooks/useTheme'
import validation from './LoginValidation';
import signupValidation from './SignupValidation'
import LoginValidation from './LoginValidation'
import axios from 'axios'


export default function Authform({loginSuccess}) {

const [isLogin, setIsLogin]=useState(true)
const [isSignup, setIsSignup]=useState(null)

const [userData, setUserData]=useState({
       
        churchName:'',
        churchSize:'',
        address:'',
        email: '',
        password: '',
        confirmPassword:''        
       })

  const [errors, setErrors]=useState({
    login:{},
    signup:{}
  })

   const handleInput =(event)=>{
    setUserData(prev => ({...prev, [event.target.name]: event.target.value }))
    }
        
   const handleLogin=(event)=>{
   event.preventDefault();
   const loginErrors=LoginValidation(userData)
   setErrors(prevErrors=>({...prevErrors, login:loginErrors}));

   if(errors.login.email === "" && errors.login.email === "") {
        axios.post('http://localhost:8081/login', userData)
        .then(res => {
           
            if(res.data === "success")
            {
              loginSuccess()
              console.log(res)
            }
             else{
              alert("Invalid Credentialsy")
             }
             })
             .catch(err => console.log(err))
        }    
      }

   

   const handleRegister=(event)=>{
    event.preventDefault();
    const signupErrors=signupValidation(userData)
    setErrors(prevErrors =>({...prevErrors, signup:signupErrors }) )
     
    if (errors.signup.churchName === "" && errors.signup.email === "")
    {
      axios.post('http://localhost:8081/register', userData )
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}


  return (
    <div className='auth-modal-content'> 
        {!isLogin && (
                <form action="" onSubmit={handleRegister} className='auth-form' > 
                <h3>Register</h3>
          
                <div className="user-field">
                    <i className="fa fa-church"></i>
                   <input  type="text" name='churchName' value={userData.churchName} onChange={handleInput} placeholder="Church Name" className="user-input"/>
               </div>
               {errors.signup.churchName && <span>{errors.signup.churchName}</span>}


          <div className="user-field">
           <i className="fa fa-arrows-alt"></i>
            <input type="number" name='churchSize' value={userData.churchSize} onChange={handleInput} placeholder="Size of your church" className="user-input"/>

          </div>
          {errors.signup.churchSize && <span>{errors.signup.churchSize}</span>}


          <div className="user-field">
           <i className="fa fa-map"></i>
            <input type="text" name='address' value={userData.address} onChange={handleInput} placeholder="Address" className="user-input"/>
          </div>
          {errors.signup.address &&  <span>{errors.signup.address}</span>}

          <div className="user-field">
          <i className="fa fa-envelope"></i>
            <input type="email" name='email' value={userData.email}  placeholder="Email" className="user-input" onChange={handleInput} />
          </div>
          {errors.signup.email && <span>{errors.signup.email}</span>}

          
          <div className="user-field">
              <i className="fa fa-lock"></i>
              <input type="password" name='password' value={userData.password} placeholder="Create a password" className="user-input" onChange={handleInput} />
          </div>
          
          {errors.signup.password && <span>{errors.signup.password}</span>}


          <div className='user-field'  > 
                <i className='fa fa-lock'></i>
                <input type='password' name='confirmPassword' value={userData.confirmPassword}  className='user-input' placeholder='Confirm Password' onChange={handleInput} />  
          </div>
          {errors.signup.confirmPassword && <span>{errors.signup.confirmPassword}</span>}

          <div>
             <input type='submit' className='auth-btn submit-btn' value='submit'/>
          </div>
            <br/><br/>

          <span>Already have an account ?</span> <span  onClick={()=>setIsLogin(true)}> <b>Log in </b> </span>
           <br/><br/>
           <span>By registering , you accept our legal terms and conditions.</span>
          </form>
    
        )} 
        

{isLogin &&(
<form className='auth-form' onSubmit={handleLogin} > 
<br/><br/>
      <h3>Log in</h3>

      <div className="user-field">
          <i className="fa fa-envelope"></i>
         <input type="email"  value={userData.email} name='email' placeholder="Email" className="user-input" onChange={handleInput}/>
            

       </div>
       {errors.login.email && <span>{errors.login.email}</span>}

            
<div className="user-field">
    <i className="fa fa-lock"></i>
    <input type="password" value={userData.password}  name='password'  placeholder="Your password" className="user-input" onChange={handleInput} />
    
</div>
{errors.login.password && <span>{errors.login.password}</span>}

           

  <div>
   <input type='submit'  className='auth-btn submit-btn' value='Login'/>
  </div>
<br/><br/> <br/><br/>
  <h3>Don't have an account?</h3>  <br/> <span   onClick={()=>setIsLogin(false)}> Sign up </span>


  </form>
   )}
    </div>
  )
}
