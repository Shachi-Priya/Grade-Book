import {Box, Typography, IconButton, styled} from '@mui/material';

const Heading=styled(Box)`
    height:60px;
    background:#fff;
    display:flex;
    justify-content:flex-start;
`;
const TextConatiner=styled(Box)`
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;
const TextHeader=styled(Typography)`
    color:#71C9CE
`;
const TextContent=styled(Typography)`
    color:#707070;
    margin-top:5px;
    margin-left:5px
`;

const Headings=()=>{
    return(
        <Box>
            <Heading style={{marginBottom:5}}>
                <TextConatiner style={{marginLeft:100}}>
                    <TextHeader variant="h6">University :</TextHeader>
                    <TextContent >Lovely Professional University</TextContent>
                </TextConatiner>
                <TextConatiner style={{marginLeft:250}}>
                    <TextHeader variant="h6">Department :</TextHeader>
                    <TextContent>CSE</TextContent>
                </TextConatiner>
                <TextConatiner style={{marginLeft:360}}>
                    <TextHeader variant="h6">Title :</TextHeader>
                    <TextContent>FrontEnd</TextContent>
                </TextConatiner>
            </Heading>
            <Heading>
                <TextConatiner style={{marginLeft:100}}>
                    <TextHeader variant="h6">Professor :</TextHeader>
                    <TextContent>Mir Junaid Rasool</TextContent>
                </TextConatiner>
                <TextConatiner style={{marginLeft:335}}>
                    <TextHeader variant="h6">Group :</TextHeader>
                    <TextContent>K19FE</TextContent>
                </TextConatiner>
                <TextConatiner style={{marginLeft:395}}>
                    <TextHeader variant="h6">Semester :</TextHeader>
                    <TextContent>8</TextContent>
                </TextConatiner>
            </Heading>
        </Box>
    )
}

export default Headings;