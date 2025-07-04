import { createContext, useReducer, useState } from "react"

const UserContext = createContext("")

function UserProvider ({children}) {

    function userReducer(state, action){
        if(action.type == 'login'){
            return {...state, user:action.payload}
        }
        if(action.type == 'logout'){
            return {...state, user:action.payload}
        }
    }
    const  [state, dispatch] = useReducer(userReducer, {user:null})
    return (
        <UserContext.Provider value = {{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}