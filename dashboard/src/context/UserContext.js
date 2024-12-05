import React , {createContext, useState, useContext, useEffect} from 'react'

const userContext=createContext();

export const UserProvider = ({children}) => {
   
    const [user, setUser]=useState(()=>{
        const storedUser=localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
        })

       const login = (userData) => {
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData))
       }
      
       //Logout function
       const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
       };
       
       return (
        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
       )

}
  export const useUser=()=>useContext(userContext)