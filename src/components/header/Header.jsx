import {AppBar, Toolbar, Box, Typography, styled} from '@mui/material';
import logo from "../../images/logo.png";
// components


const StyledHeader=styled(AppBar)`
    background:#71C9CE; 
    height:70px;
`;

const StyledToolbar=styled(Toolbar)` 
    display:flex;
    justify-content:space-between;
`;

const Header=()=>{
  let date=new Date();
  return(
    <>
      <StyledHeader elevation={0}>
          <StyledToolbar style={{minHeight:'70px'}}>
            <Box style={{display:"flex"}}>
              <img src={logo} alt="logo" style={{width:70, marginRight:5, marginLeft:25}}/>
              <Typography variant="h4" style={{fontWeight:500, marginTop:15}}>THE GRADEBOOK</Typography>
            </Box>
            <Typography variant="h6" style={{fontWeight:500, marginRight:25}}>{date.toDateString()}</Typography>
          </StyledToolbar>
      </StyledHeader>
    </>
  )
}

export default Header;