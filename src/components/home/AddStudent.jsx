import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { DataContext } from '../../context/DataProvider';


const AddStudent = () => {

  const navigate = useNavigate();
  const {formDataList, setFormDataList}=useContext(DataContext);

  const [name, setName] = useState('');
  const [ticketNo, setTicketNo] = useState('');
  const [examGrade, setExamGrade] = useState('');
  const [ratingGrade, setRatingGrade] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormDataList(JSON.parse(storedFormData));
    }
  }, []);

  const capitalizeEachWord = (string) => {
    return string
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const formData = {
      id: Date.now(),
      name:capitalizeEachWord(name),
      ticketNo,
      examGrade,
      ratingGrade,
      comments
    };

    const updatedFormDataList = [...formDataList, formData];
    setFormDataList(updatedFormDataList);
    const sortedList = [...updatedFormDataList].sort((a, b) => b.id - a.id);
    localStorage.setItem('formData', JSON.stringify(sortedList));

    setName('');
    setTicketNo('');
    setExamGrade('');
    setRatingGrade('');
    setComments('');

    navigate('/');
  };

   return (
    <Box maxWidth={400} mx="auto">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="setTicketNo"
          value={ticketNo}
          type="number"
          onChange={(e) => setTicketNo(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="ExamGrade"
          value={examGrade}
          type="number"
          onChange={(e) => setExamGrade(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="RatingGrade"
          value={ratingGrade}
          type="number"
          onChange={(e) => setRatingGrade(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" style={{background:"#00ADB5", color:"#fff"}}>
          Submit
        </Button>
      </form>

    </Box>
  );
};

export default AddStudent;