import React from 'react';
import {Typography, Divider, Box} from '@mui/material';

export default function Footer() {
  let date=new Date();
  return (
    <>
        <Box style={{ padding:20, marginTop:25}}> 
        <Box style={{display:'flex', justifyContent: 'center', paddingBottom:15 }}>
 <Divider style={{width:"40%"}}/>
        </Box> 
       
            <Typography color="#ababab"  style={{fontSize:'13px', fontWeight:500, textAlign:"center"}}>© {date.toDateString()} All Rights Reserved. GradeBook`</Typography>
        </Box>
    </>
  )
}
