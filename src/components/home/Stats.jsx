import { useContext, useEffect } from 'react';

import {Box, Typography, Button, styled} from '@mui/material';
import Plot from 'react-plotly.js';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// import './Styles.css'

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

const Stats=()=>{

  const {formDataList, setFormDataList}=useContext(DataContext);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormDataList(JSON.parse(storedFormData));
    }
  }, []);

  const layout = {
    title: 'Grade Distribution',
    height: 430,
    width: 380
  };

  let p=0;
  let f=0;
  let all=0;
  let grade;
  let a=0,b=0,c=0,d=0,e=0;
  let avg=0;
  let max=-1,min=11;
  for(let x in formDataList){
      all=all+1;
      grade=Math.round((0.6*formDataList[x].examGrade)+(0.4*formDataList[x].ratingGrade));
      grade>=4?p=p+1:f=f+1;
      if(grade>=0&&grade<2){a+=1};
      if(grade>=2&&grade<4){b+=1};
      if(grade>=4&&grade<6){c+=1};
      if(grade>=6&&grade<8){d+=1};
      if(grade>=8&&grade<10){e+=1};
      if(grade>max){max=grade};
      if(grade<min){min=grade};
      
  }
  avg=(a+b+c+d+e)/5;
  
  const data = [
    {
      values: [a,b,c,d,e],
      labels: ['0-2','2-4', '4-6', '6-8','8-10'],
      type: 'pie',
      hole: 0.5,
      marker: {
        colors: ['red', 'orange','#FF8C00','yellow',"Green"]
      }
    }
  ];
  
      return(
        <>
        <Box style={{display:"flex", justifyContent: "center"}}>
          <Link to="/">
            <StyledButton 
              startIcon={<ArrowBackIcon />}
            >
              Back To Home Page
            </StyledButton>
          </Link>
        </Box>
        <style>{`#stats{border: 2px solid #eee;margin:10px; border-collapse: collapse;background-color: white;padding: 10px;}
                #tab{display: flex;margin: 50px; background-color: white;box-shadow: 5px 10px 18px #56b5ba;justify-items: center;
                align-items: center;}`}</style>
      <div id="tab">
      <table id="stats">
      <thead id="stats">
        <tr id="stats">
          <th id="stats">Details</th>
          <th id="stats">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr id="stats">
          <td id="stats">Total formDataList</td>
          <td id="stats">{all}</td>
        </tr>

        <tr id="stats">
          <td id="stats">Passed formDataList</td>
          <td id="stats">{p}</td>
        </tr>

        <tr id="stats">
          <td id="stats">Failed formDataList</td>
          <td id="stats">{f}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Maximum Grade</td>
          <td id="stats">{max}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Average Grade</td>
          <td id="stats">{avg}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Minimum Grade</td>
          <td id="stats">{min}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Maximum Grade</td>
          <td id="stats">{max}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Grades(6-8)</td>
          <td id="stats">{d}</td>
        </tr>
        <tr id="stats">
          <td id="stats">Grades(8-10)</td>
          <td id="stats">{e}</td>
        </tr>
      </tbody>
    </table>
      <Plot
        data={[
          {
            x: ["All","Passed","Failed"],
            y: [all,p,f],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
            name: 'Scatter Plot',
          },
          {
            type: 'bar',
            x: ["All","Passed","Failed"],
            y: [all,p,f],
            name: 'Bar Chart',
            marker: {color:['gray','Green','Red']},
          },
        ]}
        layout={{
          width: 380,
          height: 430,
          title: 'Student Details',
         
        }}
      />
      <Plot
      data={data}
      layout={layout}
      />
     <Plot
        data={[
          {
            type: 'bar',
            x: ["Maximum","Average","Minimum"],
            y: [max,avg,min],
            name: 'Bar Chart',
            marker: {color:['Green','Yellow','Red']},
          }
        ]}
        layout={{
          width: 380,
          height: 430,
          title: 'Student Grades',
         
        }}
      />
  </div>
      </>
      )
  
  
}
export default Stats;