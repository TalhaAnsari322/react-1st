import { createContext } from "react";



export const themeContext = createContext();

function themeContextprovider({ children}){
    return <themeContext.Provider{ children } value={}></themeContext.Provider>
}

