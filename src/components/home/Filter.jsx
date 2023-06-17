import React from 'react';
import { useState, useEffect, useContext } from 'react';
import {Box, Typography, Button, styled, Menu, MenuItem} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

//components
import Search from "./Search";
import AddStudent from "./AddStudent";
import TableCompo from "./TableCompo";
import { DataContext } from '../../context/DataProvider';


const Heading=styled(Box)`
    margin-top:10px;
    height:60px;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:3px;
`;


const FilterButton = styled(Button)({
  background:"#71C9CE",
  color:"#fff",
  fontSize:"14px",
  borderRadius:"20px",
  height:"35px",
  padding:"10px",
  marginLeft:"10px",
  '&:hover': {
    backgroundColor: '#56b5ba',
    color: '#fff',
  },
});


const Filter=()=>{

    const {setStatus}=useContext(DataContext);
    const {setFinalG}=useContext(DataContext);
    const {setAlpha}=useContext(DataContext);
    const {setAlphaClicked}=useContext(DataContext);   
    
    const [anchorElStatus, setAnchorElStatus] = useState(null);
    const openStatus = Boolean(anchorElStatus);
    const handleClickStatus = (event) => {
        setAnchorElStatus(event.currentTarget);
    };
    const handleCloseStatus = () => {
        setAnchorElStatus(null);
    };

    const [anchorElFinalG, setAnchorElFinalG] = useState(null);
    const openFinalG = Boolean(anchorElFinalG);
    const handleClickFinalG = (event) => {
        setAnchorElFinalG(event.currentTarget);
    };
    const handleCloseFinalG = () => {
        setAnchorElFinalG(null);
    };

    const [anchorElAlpha, setAnchorElAlpha] = useState(null);
    const openAlpha = Boolean(anchorElAlpha);
    const handleClickAlpha = (event) => {
        setAnchorElAlpha(event.currentTarget);
    };
    const handleCloseAlpha = () => {
        setAnchorElAlpha(null);
    };

    const allFun=()=>{
        setStatus({pass:true, fail:true});
    }
    const passFun=()=>{
        setStatus({pass:true, fail:false});
    }
    const failFun=()=>{
        setStatus({pass:false, fail:true});
    }
    const oneTenFun=()=>{
        setAlphaClicked(false);
        setFinalG({oneTen:true, tenOne:false, reset:false})
    }
    const tenOneFun=()=>{
        setAlphaClicked(false);
        setFinalG({oneTen:false, tenOne:true, reset:false})
    }
    const azFun=()=>{
        setAlphaClicked(true);
        setAlpha({az:true, za:false, reset:false});
    }
    const zaFun=()=>{
        setAlphaClicked(true);
        setAlpha({az:false, za:true, reset:false})
    }
    const resetFun=()=>{
        setFinalG({oneTen:false, tenOne:false, reset:true});
        setAlpha({az:false, za:false, reset:true});
        setStatus({pass:true, fail:true});
    }

    return(
        <Box>
            <Heading>
                <Box style={{height:25, marginLeft:25}}>  

                    <FilterButton
                        id="basic-button"
                        aria-controls={openStatus ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openStatus ? 'true' : undefined}
                        onClick={handleClickStatus}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Sort by Status
                    </FilterButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElStatus}
                        open={openStatus}
                        onClose={handleCloseStatus}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        transformOrigin={{ vertical: 'top',horizontal: 'right' }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    >
                        <MenuItem onClick={()=>{handleCloseStatus();allFun()}}>All</MenuItem>
                        <MenuItem onClick={()=>{handleCloseStatus();passFun()}}>Passed</MenuItem>
                        <MenuItem onClick={()=>{handleCloseStatus();failFun()}}>Failed</MenuItem>
                    </Menu>
                    <FilterButton
                        id="basic-button"
                        aria-controls={openFinalG ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openFinalG ? 'true' : undefined}
                        onClick={handleClickFinalG}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Sort by Final Grade
                    </FilterButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElFinalG}
                        open={openFinalG}
                        onClose={handleCloseFinalG}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        transformOrigin={{ vertical: 'top',horizontal: 'right' }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    >
                        <MenuItem onClick={()=>{handleCloseFinalG();tenOneFun()}}>10-1</MenuItem>
                        <MenuItem onClick={()=>{handleCloseFinalG();oneTenFun()}}>1-10</MenuItem>
                    </Menu>


                    <FilterButton
                        id="basic-button"
                        aria-controls={openAlpha ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAlpha ? 'true' : undefined}
                        onClick={handleClickAlpha}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Sort by Alphabetically
                    </FilterButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElAlpha}
                        open={openAlpha}
                        onClose={handleCloseAlpha}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        transformOrigin={{ vertical: 'top',horizontal: 'right' }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    >
                        <MenuItem onClick={()=>{handleCloseAlpha();azFun()}}>A-Z</MenuItem>
                        <MenuItem onClick={()=>{handleCloseAlpha();zaFun()}}>Z-A</MenuItem>
                    </Menu>

                    <FilterButton
                        onClick={resetFun}
                        endIcon={<RestartAltIcon/>}
                    >
                        Reset
                    </FilterButton>      
                </Box>
                <Box style={{height:25, marginRight:40}}>
                    <Search/>
                </Box>
            </Heading>
        </Box>
    )
}

export default Filter;