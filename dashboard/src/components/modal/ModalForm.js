import React from 'react'
import { useState } from 'react'
export default function ModalForm({status, addMember}) {
    
    const [formData, setFormData]=useState({
      name: '',
      number: '',
      email: '',
      address: '',
     })
    
     const resetForm=()=>{
      setFormData('')
     }
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      const member ={
        ...formData,
        id: `member_${Date.now()}`,
        status:status
      }
      addMember(member)
      resetForm()
    }

      const handleChange=(e)=>{
        const {name, value}=e.target
          setFormData((prevData)=>(
            {
                 ...prevData, 
                 [name]:value
            }))
          }

      
  return (
    <div>
           {status === "Convert" && (
                         <div className='modal-content-container'>
                            <h3>Convert Form</h3>

                      <form className='' onSubmit={handleSubmit}> 

                        <div>  
                           <input type='text' name='name' value={formData.name} className='modal-input' placeholder='Convert Name' onChange={handleChange} />
                       
                       </div>
                       
                       <div>
                          <input type='text' name='number' value={formData.number}  className='modal-input' placeholder='Phone number' onChange={handleChange}  />
           
                       </div>
                       
                       <div>
                         <input type='text' name='email' value={formData.email} className='modal-input' placeholder='Email address' onChange={handleChange} />
           
                       </div>
       
                        <div> 
                          <input type='text' name='address' value={formData.address} className='modal-input' placeholder='Residential adress' onChange={handleChange} />   
                       </div>
                        <div>
                         <input type='submit' className='submit-btn' value='submit'/>
           
                       </div>
                    </form>
                         </div>
                 )}
                 {status === "Discipling" && (
                   <form onSubmit={handleSubmit}>
                         <div>
                                      <h3>Disciples Form</h3>

                         <div>
                       <input type='text' name='name' className='modal-input'placeholder='Disciple name'  value={formData.name} onChange={handleChange}  />
                       
                       </div>
                       <div>
                       <input type='number' name='number' className='modal-input'placeholder='Phone number'  value={formData.number} onChange={handleChange}  />
            
                       </div>

                       <div>
                       <input type='text' name='email' className='modal-input'placeholder='Your email address'  value={formData.email} onChange={handleChange}  />
           
                      </div>
       
                      <div> <input type='text' name='address' className='modal-input' placeholder='Your residential adress'  value={formData.address} onChange={handleChange}  />  </div>
                       <div>
                       <input type='submit' className='submit-btn' value='submit'/>
           
                     </div>
                       
                         </div>
                         </form>
                 )}
                 {status === "Established" && (
                   
                    <form onSubmit={handleSubmit}>
                         <div>
                                                <h3>Established Members Form</h3>
         
                         <div>
                       <input type='text' name='name' className='modal-input' placeholder='Established member name'  value={formData.name} onChange={handleChange}  />
                       
                       </div>
                       <div>
                       <input type='text' name='number' className='modal-input' placeholder='Your phone number'  value={formData.number} onChange={handleChange}  />
           
                       </div>
                       <div>
                       <input type='text' name='email' className='modal-input'placeholder='Your email address'  value={formData.email} onChange={handleChange}  />
           
                      </div>
       
                      <div> <input type='text' name='address' className='modal-input' placeholder='Your residential adress'  value={formData.address} onChange={handleChange}  />  </div>
                       <div>
                       <input type='submit' className='submit-btn' value='submit'/>
           
                     </div>
                       
                         </div>
                         </form>
                 )}
            
    </div>
  )
}
