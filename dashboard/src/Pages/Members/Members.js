import React from 'react'
import './Members.css'
import Updates from '../../components/updates/Updates' 
export default function Members({memberList, setMemberList}) {
 

  const totalMembers=memberList.length
  
  const removeMember=(id)=>{
          setMemberList((memberList).filter((member) =>member.id !== id ) );
  }
  return (


    <div className='members-box'>
          <div className="member-cards">
               
               {memberList.map((member) =>(
                 <div className="member-card" key={member.id}>
                  
                        <div className="member-option" onClick={()=>removeMember(member.id)}>
                           <i className="fa-solid fa-ellipsis"></i>    
                        </div>
                  
                 <div className="member-detials"> 
                    
                     <div className="member-info"> <i className="fa fa-user"></i><span className="member-name">{member.name}</span></div>
                     <div className="member-info"><i className="fa fa-phone"></i><span className="member-phone">{member.number}</span> </div>
                     <div className="member-info"><i className="fa fa-envelope"></i><span className="member-email">{member.email}</span> </div>
                     <div className="member-info"><i className="fa fa-map"></i><span className="member-address">{member.address}</span> </div> 
                     <div className="member-info"><i className="fa-regular fa-circle-dot"></i><span className="member-status"> <b>{member.status}</b>  </span> </div> 


                 </div> 

                  </div>
                  )
                )
               }


             


            

                    <div className="member-card theme">
                     <div className="member-card-details ">
                         <div className="member-total">
                           <h1 className="member-card-number">{totalMembers}</h1>
                           <span>Total</span><br/>
                         </div>
                         <span className="card-icon"  ><i className="fa-solid fa-people-group"></i></span>

                       </div>


                     </div>
                     

             </div>
            <Updates/>
    </div>
  )
}
