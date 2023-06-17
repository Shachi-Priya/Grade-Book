import { useState, useContext } from 'react';
import {Dialog, Box, TextField, Typography, Button, styled} from '@mui/material';



const StyledBox=styled(Box)`
    height:35vh;
    width:70vh;  
    padding:20px 20px; 
    background:#E3FDFD;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`;
const StyledButton=styled(Button)`
    background:#71C9CE;
    width:18%;
`;

const DetailsDialog=({open, setOpen, comments})=>{

    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            <StyledBox>
                <Box>
                    <Typography variant="h6" style={{color:"#71C9CE",fontWeight:600}}>
                        Remarks :
                    </Typography>
                    <Typography variant="h6" style={{color:"#707070",fontWeight:500}}>
                        {comments}
                    </Typography>
                </Box>
            <StyledButton variant="contained" onClick={handleClose}>OK</StyledButton>
            </StyledBox>
        </Dialog>
    )

}

export default DetailsDialog;