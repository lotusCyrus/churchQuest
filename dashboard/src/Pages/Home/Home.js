import React from 'react'
import './Home.css'
import Updates from '../../components/updates/Updates'
import DisciplingImage from './discipler.png'
export default function Home( { modalToggle, isOpen}){
 
   
  return (
   
    <div className={`dashboard-box ${isOpen ? 'open' : 'close'}`}>

            <div className="data-cards"> 
      
      <div className="card">
  
       <div className="card-details">
        <h1 className="card-number">54</h1>
        <span>Convert</span><br/>
        <button className="card-button theme" onClick={()=>modalToggle("Convert")}> Add <i className="fa-solid fa-user-plus"></i></button>
     </div>
     <span className="card-icon"><img width="40" height="40" src="https://img.icons8.com/emoji/48/latin-cross-emoji.png" alt="latin-cross-emoji"/> </span>
</div>
<div className="card">
     <div className="card-details">
        <h1 className="card-number">70</h1>
        <span>Discipling</span><br/>
        <button className="card-button theme" onClick={()=>modalToggle("Discipling")}>Add <i className="fa-solid fa-user-plus"></i></button>
     </div>
     <span className="card-icon"><img width="40" height="40"  src={DisciplingImage}  alt='Discipling-img' /></span>
</div>

<div className="card">
     <div className="card-details">
        <h1 className="card-number">100</h1>
        <span>Established</span><br/>
        <button className="card-button theme" onClick={()=>modalToggle("Established")}>Add <i className="fa-solid fa-user-plus"></i></button>
     </div>
     <span className="card-icon"><img width="40" height="40" src="https://img.icons8.com/external-topaz-kerismaker/48/external-First-Medal-award-topaz-kerismaker.png" alt="external-First-Medal-award-topaz-kerismaker"/></span>
</div>
<div className="card theme">
     <div className="card-details ">
        <h1 className="card-number">224</h1>
        <span>Total</span><br/>
     </div>
     <span className="card-icon"><i className="fa-solid fa-people-group"></i></span>
</div> 



</div>


   
   <Updates/>

    </div>
  )
}
