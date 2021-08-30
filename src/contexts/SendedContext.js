import React, { useContext, useState } from 'react'
import { createContext } from "react";

export const SendedContext = createContext()

// hook proprio
export function useSended(){
    const value = useContext(SendedContext)
    return value
}

export default function SendedContextProvider(props) {

    const [sended, setSended] = useState(false)

    return (
        <SendedContext.Provider value={{sended, setSended}}>
            {props.children}
        </SendedContext.Provider>
    )
}
