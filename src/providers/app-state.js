import React, {createContext, useState, useContext} from "react";

const AppStateContext = createContext();

export function AppStateProvider({children}){
    const [searchValue, setSearchValue] = useState("");
    const [shortList, setShortList] = useState([]);

    const value = {
        searchValue, setSearchValue, shortList, setShortList
    };
    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider> 
    );
}

export function useAppState(){
    const context = useContext(AppStateContext);
    if(!context){
        throw new Error("You probably forgot <NamesProvider> context provider ");
    }
    return context;
}
