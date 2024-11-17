import './App.css';
import './responsive.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Members from './Pages/Members/Members';
import Settings from './Pages/Settings/Settings';
import TopBar from './components/nav/topBar/topBar';
import SideNav from './components/nav/sideNav/sideNav';
import Modal from './components/modal/Modal';
import Authmodal from './components/modal/Authmodal';
import './Pages/Home/Home.css'
import { useState } from 'react';
import ModalForm from './components/modal/ModalForm';
import { useTheme } from './hooks/useTheme';

function App() {
const [isOpen,setIsOpen]=useState()
const [isModalOpen, setIsModalOpen]=useState(false)
const [status,setStatus]=useState(null)
const [isAuthModalOpen, setIsAuthModalOpen]=useState(true)


const {mode}=useTheme()

const [memberList, setMemberList ]=useState([
  {id:'1', name:'Kunle  Adewaleyy orishalwere', number:'091343493433', email:'Johnson@gmail.com' , address:'No 1 , adekunle street, Ibadan', status:'Convert' } ,
  {id:'2', name:'Kunley  Adewaleuuu orishalwere', number:'091344343433', email:'Johnsons@gmail.com', address:'No 2 , adekunle street, Ibadan', status:'Discipling' },
  {id:'3', name:'Kunler  Adewalel orishalwere', number:'091343043433', email:'Johnsonsolotu@gmail.com', address:'No 3, adekunle street, Ibadan', status:'Established' }
])

const loginSuccess=()=>{
  setIsAuthModalOpen(false)
}

const addMember=(member)=>{
  setMemberList((prevMember)=>{
    return[...prevMember, member]
  })
}

const modalToggle=(value)=>{
    setIsModalOpen(!isModalOpen)
    setStatus(value)
 }

  const onClose=()=>{
  setIsModalOpen(!isModalOpen)
  console.log("closed")
 }

  const toggleSideNav=()=>{
   setIsOpen(!isOpen)
   console.log(isOpen)
 }
   return ( 
      <div className={`App ${mode ==='dark'?'dark':'light'}`}>
        
        {isAuthModalOpen && <Authmodal  loginSuccess={loginSuccess}  />}
          {isModalOpen && (
                <Modal  onClose={onClose}>
                           <ModalForm addMember={addMember} status={status}/>
              </Modal>
   )}     
      
           <SideNav setIsAuthModalOpen={setIsAuthModalOpen} modalToggle={modalToggle} isOpen={isOpen}/>     
      
           <div className={`right-section ${isOpen ? 'open' : 'close'}`}>
           <TopBar isOpen={isOpen} toggleSideNav={toggleSideNav}/>
        <Routes>
            <Route path="/"  element={<Home isOpen={isOpen} modalToggle={modalToggle} />} />
            <Route path="/Members" isOpen={isOpen} element={<Members setMemberList={setMemberList} memberList={memberList} addMember={addMember}  />} />
            <Route path="/Settings"  element={<Settings />} />
         </Routes>
       </div>
      </div>
   
  );
}  


export default App;
