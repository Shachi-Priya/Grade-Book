import React,{useContext} from 'react'
import { Link } from 'react-router-dom';

import {Box, Typography, Button, styled} from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AddIcon from '@mui/icons-material/Add';

//components
import Headings from './Headings';
import Filter from './Filter';
import TableCompo from './TableCompo';
import Stats from './Stats';
import { DataContext } from '../../context/DataProvider';


const StyledButton = styled(Button)({
  background:"#00ADB5",
  color:"#fff",
  fontSize:"14px",
  borderRadius:"10px",
  margin:"20px 10px 0px 10px",
  padding:"15px 25px",
  '&:hover': {
    backgroundColor: '#56b5ba',
    color: '#fff',
  },
});


const Home=()=>{
  
  return (
    <Box>
      <Headings/>
      <Box style={{display:"flex", justifyContent: "center"}}>
        <Box style={{display:"flex", justifyContent: "center"}}>
          <Link to="/addstudent">
            <StyledButton 
              startIcon={<AddIcon />}
            >
              Add Student
            </StyledButton>
          </Link>
        </Box>
        <Box style={{display:"flex", justifyContent: "center"}}>
          <Link to="/statistics">
            <StyledButton 
              startIcon={<ShowChartIcon />}
            >
              Show Statistics
            </StyledButton>
          </Link>
        </Box>
      </Box>
      <Filter/>
      <TableCompo/>
    </Box>
  )
}

export default Home; 