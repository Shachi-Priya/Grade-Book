import { createContext, useState } from "react";


export const DataContext=createContext(null);


const DataProvider=({children})=>{

    const [status, setStatus]=useState({pass:true, fail:true});
    const [finalG, setFinalG]=useState({oneTen:false, tenOne:false, reset:true});
    const [alpha, setAlpha]=useState({az:false, za:false, reset:true});
    const [alphaClicked, setAlphaClicked]=useState(true);
    const [text, setText]=useState("");
    
    return(
        <DataContext.Provider value={{
            status,
            setStatus,
            finalG,
            setFinalG,
            alpha,
            setAlpha,
            alphaClicked,
            setAlphaClicked,
            text,
            setText
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;