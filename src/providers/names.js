import React, {createContext, useContext} from "react";

import { names } from "../data";

// 1. Create a context
const NamesContext = createContext();

// Provider + Consumer
export function NamesProvider({children}){
    return <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
}

export function useNames(){
    const context = useContext(NamesContext);
    if(!context){
        throw new Error("You probably forgot <NamesProvider> context provider ");
    }
    return context;
}