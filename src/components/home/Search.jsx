import { useState, useEffect, useContext } from 'react';

import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// components
import { DataContext } from '../../context/DataProvider';


const StyledBox=styled(Box)`
    background: #CBF1F5;  
    border-radius:10px; 
    display:flex;
`;
const StyledInput=styled(InputBase)`
    padding-left:20px; 
    width:100%;
    font-size:unset;
`;
const StyledIconWrapper=styled(Box)`
    margin-left: auto;
    padding: 5px;
    display: flex;
    color: #2dc0cf;
`;

const Search=()=>{
    
    const {text, setText}=useContext(DataContext);

    const getText=(e)=>{
        setText(e.target.value);
    }

    return(
        <StyledBox>
            <StyledInput 
                placeholder="Search by Name"
                onChange={getText}
                value={text}
            />
            <StyledIconWrapper>
                <SearchIcon/>
            </StyledIconWrapper>
        </StyledBox>
    )
}

export default Search;