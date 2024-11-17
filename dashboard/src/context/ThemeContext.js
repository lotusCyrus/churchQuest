import { createContext, useReducer } from "react";

export const ThemeContext =createContext() //the function we just imported



export function ThemeProvider({ children }){

     //custom logic
  
     const themeReducer = (state, action)=>{
         switch(action.type){
            case 'CHANGE_BACKGROUND_COLOR':
                return { ...state, color: action.payload}
            case 'CHANGE_MODE':
               return {...state, mode:action.payload}
                default:
                    return state
         }
     } 

     const [state, dispatch]=useReducer(themeReducer,  {
        color: 'whtie',
        mode:'white'
     })

    const changeBackgroundColor = (color) => {
        dispatch({ type:'CHANGE_BACKGROUND_COLOR', payload: color  })
    }
   const theChangeMode= (mode) =>{
    dispatch({ type:'CHANGE_MODE', payload:mode })
   }
    const changeMode = (mode) => {
        dispatch({ type:'CHANGE_MODE', payload: mode  })
    }
    return (
          <ThemeContext.Provider value={{...state , changeBackgroundColor, changeMode, changeMode}}>
            {children}
         </ThemeContext.Provider>
    )
}            