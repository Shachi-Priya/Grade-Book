import { useState, useContext } from 'react';

import {Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, Paper} from '@mui/material';

// components
import {students} from "../../constants/studData.js";
import { DataContext } from '../../context/DataProvider';
import DetailsDialog from "./DetailsDialog";


const TableCompo=()=>{

  const {status}=useContext(DataContext);
  const {finalG}=useContext(DataContext);
  const {text}=useContext(DataContext);
  const {alpha}=useContext(DataContext);
  const {alphaClicked}=useContext(DataContext);


  const [open, setOpen]=useState(false);
  const [comments, setComments]=useState();
  const [selectedRows, setSelectedRows] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (rowId) => {
    setSelectedRows((prevState)=>{
      if(prevState.includes(rowId)){
        return prevState.filter(rId=>rId!==rowId)
      }else{
        return [...prevState, rowId]
      }
    });
  }

  const openDialog=(student)=>{
    setOpen(true);
    setComments(student.comments); 
  }

  const oneTenFun=(a, b)=>{
    const aFinalG=Math.round((0.6*a.examGrade)+(0.4*a.ratingGrade));
    const bFinalG=Math.round((0.6*b.examGrade)+(0.4*b.ratingGrade));
    if (aFinalG !== bFinalG) {
        return aFinalG - bFinalG
    }
    else{
      return sortByAlpha();
    }
  }

  const tenOneFun=(a, b)=>{
    const aFinalG=Math.round((0.6*a.examGrade)+(0.4*a.ratingGrade));
    const bFinalG=Math.round((0.6*b.examGrade)+(0.4*b.ratingGrade));
    if (aFinalG !== bFinalG) {
        return (-1*(aFinalG - bFinalG))
    }
    else{
      return sortByAlpha();
    }
  }

  const resetFun=(a, b)=>{
    if ( a.id !== b.id ){
      return a.id-b.id;
    }
    else{
      return 0;
    }
  }

  const azFun=(a, b)=>{
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return sortByFinalG();
  }

  const zaFun=(a, b)=>{
    if ( a.name > b.name ){
      return -1;
    }
    if ( a.name < b.name ){
      return 1;
    }
    return sortByFinalG();
  }

  const sortByFinalG=()=>{
    if(finalG.oneTen){
      return students.sort(oneTenFun)
    }else if(finalG.tenOne){
      return students.sort(tenOneFun)
    }else{
      return students.sort(resetFun)
    }
  }

  const sortByAlpha=()=>{
    if(alpha.az){
      return students.sort(azFun)
    }else if(alpha.za){
      return students.sort(zaFun)
    }else{
      return students.sort(resetFun)
    }
  }

  const studentMapping=(student)=>{
    return(
        <TableRow
          hover
          key={student.id}
          selected={selectedRows.find(stateId=>stateId === student.id)}
          onClick={() => handleRowClick(student.id)}
        > 
        { student.name.toLowerCase().includes(text.toLowerCase()) ?
        <>
          <TableCell align="right">{student.id}</TableCell>
          <TableCell align="right">{selectedRows.find(stateId=>stateId === student.id)?student.name.toUpperCase():student.name}</TableCell>
          <TableCell align="right">{student.ticketNo}</TableCell>
          {/* <TableCell align="right">{student.ticketTopic}</TableCell> */}
          {/* <TableCell align="right">{student.ratingGrade}</TableCell>
          <TableCell align="right">{student.examGrade}</TableCell> */}
          <TableCell align="right">{Math.round((0.6*student.examGrade)+(0.4*student.ratingGrade))}</TableCell>
          <TableCell align="right">{Math.round((0.6*student.examGrade)+(0.4*student.ratingGrade))>=4?"Passed":"Failed"}</TableCell>
          <TableCell align="right">
            <Button style={{background:"#71C9CE", color:"#fff"}} onClick={()=>openDialog(student)} value={student}>
              Details
            </Button>
          </TableCell>   
        </>
        :null
        }
        </TableRow>
    )
  }

  const statusChecking=()=>{
    if(status.pass && status.fail){
      alphaClicked?sortByAlpha():sortByFinalG();
      return students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(student=>studentMapping(student)) 
    }else if(status.pass && !status.fail){
      alphaClicked?sortByAlpha():sortByFinalG();
      return students.filter((student)=>(
      (Math.round((0.6*student.examGrade)+(0.4*student.ratingGrade))>=4)))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(student=>studentMapping(student)) 
    }else{
      alphaClicked?sortByAlpha():sortByFinalG();
      return students.filter((student)=>(
      (Math.round((0.6*student.examGrade)+(0.4*student.ratingGrade))<4)))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(student=>studentMapping(student)) 
    }
  }

  return (
    <TableContainer component={Paper} style={{marginTop:3}} >
      <Table>
        <TableHead style={{backgroundColor:"#A6E3E9"}}>
          <TableRow>
            <TableCell align="right">Serial No. </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Ticket Number</TableCell>
            {/* <TableCell align="right">Ticket Topic</TableCell>
            <TableCell align="right">Rating Grade</TableCell>
            <TableCell align="right">Exam Grade</TableCell> */}
            <TableCell align="right">Final Grade</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right" style={{paddingRight:30}}>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statusChecking()}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              count={students.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <DetailsDialog open={open} setOpen={setOpen} comments={comments}/>
    </TableContainer>
  );
}

export default TableCompo; 