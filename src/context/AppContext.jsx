import { createContext } from "react";
import {DoctorInfo } from '../assets/assets.js'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();
const AppContextProvider = (props) => {
    
    const value = {
       DoctorInfo
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider