import { createContext, useState } from "react";
import {students} from '../constants/studData.js';


export const DataContext=createContext(null);


const DataProvider=({children})=>{

    const [status, setStatus]=useState({pass:true, fail:true});
    const [finalG, setFinalG]=useState({oneTen:false, tenOne:false, reset:true});
    const [alpha, setAlpha]=useState({az:false, za:false, reset:true});
    const [alphaClicked, setAlphaClicked]=useState(true);
    const [text, setText]=useState("");
    const [formDataList, setFormDataList] = useState(students);
    
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
            setText,
            formDataList,
            setFormDataList
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;